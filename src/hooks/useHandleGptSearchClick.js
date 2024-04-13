import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { API_OPTIONS } from '../utils/constants';
import { addGpthMovieResult } from '../utils/gptSlice';
import openai from '../utils/openai';

const useHandleGptSearchClick = async (searchText, myFlag) => {
    // console.log("value of input box is", searchText.current.value);
    const dispatch = useDispatch();

    const tmdbSearchMovies = async (movies) => {
        const url = 'https://api.themoviedb.org/3/search/movie?query=' + movies + '&include_adult=false&language=en-US&page=1'
        const response = await fetch(url, API_OPTIONS)
        const data = await response.json();
        console.log(data)
        return data.results
    }

    const handleGptSearchClick = async () => {
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

        // 1) mapping over tmdbSearchMovies to get movies from tmdb search api
        const myPromises = gptMovies.map((movies) => {
            return tmdbSearchMovies(movies)
        })
        console.log(myPromises)

        const tmdbSearchResult = await Promise.allSettled(myPromises);
        console.log(tmdbSearchResult)

        dispatch(addGpthMovieResult({ movieNames: gptMovies, movieResults: tmdbSearchResult }));
    }

    useEffect(() => {
        if (myFlag) {
            handleGptSearchClick()
        }
    })

}

export default useHandleGptSearchClick
