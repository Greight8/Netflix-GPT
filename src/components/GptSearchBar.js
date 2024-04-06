import React from 'react'
import { useRef } from 'react'
import { useSelector } from 'react-redux'
import { API_OPTIONS } from '../utils/constants';
import { useDispatch } from 'react-redux';
import language from '../utils/languageConstants'
import { addGpthMovieResult } from '../utils/gptSlice';
import openai from '../utils/openai';
// import useHandleGptSearchClick from '../hooks/useHandleGptSearchClick'

const GptSearchBar = () => {
    const dispatch = useDispatch();

    // 4) calling useRef() hook to get data from input box
    const searchText = useRef(null);

    // 1) subscribing to config store
    const myLang = useSelector((store) => {
        return store.config.lang
    })
    // console.log("value of my store is", myLang);

    // 2) func. to prevent the default behaviour of form
    const handleClick = (e) => {
        return e.preventDefault()
    }

    // 5) calling tmdb search api here
    const searchMoviesTmdb = async (movies) => {
        const url = 'https://api.themoviedb.org/3/search/movie?query=' + movies + '&include_adult=false&language=en-US&page=1'
        const response = await fetch(url, API_OPTIONS)
        const data = await response.json();
        console.log(data)
        return data.results
    }

    // 3) func to call the openAi-GPT api
    const handleGptSearchClick = async () => {
        // console.log("value of input box is", searchText.current.value);

        const gptQuery = "Act as a movie recomendation system and suggest some movies for the query : " + searchText.current.value + ".Only give me names of 5 movies, comma seperated like the example result given ahead. Example reselt : Sholay, Don3, Pathan. aazigar, Koi Mil Gya"

        const GptResult = await openai.chat.completions.create({
            messages: [{ role: 'user', content: gptQuery }],
            model: 'gpt-3.5-turbo',
        }).catch(() => {
            // <NotFoundError />
            <h1 className='flex align-middle justify-center text-center m-2 text-white'>Sorry, unable to find any movies !!</h1>
        })
        // console.log(GptResult.choices)

        // const gptMovies = GptResult?.choices[0]?.message?.content.split(",");
        // console.log(gptMovies)

        const gptMovies = ["Andaz Apna Apna", "Hera Pheri", "Padosan", "Chupke Chupke", "Jaane Bhi Do Yaaro"];

        const myPromises = gptMovies.map((movies) => {
            return searchMoviesTmdb(movies)
        })
        // console.log(myPromises)

        const tmdbSearchResult = await Promise.allSettled(myPromises);
        // console.log(tmdbSearchResult)

        dispatch(addGpthMovieResult({ movieNames: gptMovies, movieResults: tmdbSearchResult }));
    }


    return (
        <div className='flex justify-center pt-[160px]'>
            <div className=' bg-black'>
                <form onSubmit={handleClick}>
                    <input ref={searchText} className='pl-[15px] w-[451px] ml-[10px] py-2 text-black' type="text" placeholder={language[myLang].placeholder} />

                    <button className='bg-red-700 w-[130px] py-2 ml-[20px] mr-[10px] my-2 rounded-md text-white text-bold' onClick={handleGptSearchClick}>{language[myLang].search}</button>
                </form>
            </div>
        </div>
    )
}

export default GptSearchBar
