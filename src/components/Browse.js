import React from 'react'
import { useSelector } from 'react-redux';
import useNowPlayingMovies from '../hooks/useNowPlayingMovies'
import usePopularMovies from '../hooks/usePopularMovies'
import useTopRatedMovies from '../hooks/useTopRatedMovies';
import useUpcomingMovies from '../hooks/useUpcomingMovies';
import GptSearchPage from './GptSearchPage';
import Header from './Header'
import MainContainer from './MainContainer';
import SecondryContainer from './SecondryContainer';

const Browse = () => {
    // console.log("browse component")

    // 1) calling useNowPlayingMovies custom hook here
    useNowPlayingMovies();
    usePopularMovies();
    useTopRatedMovies();
    useUpcomingMovies();

    // 2) subscribing to our gpt store to show, wether to show gptSearch component or not
    const myGpt = useSelector((store) => {
        return store.gpt.gptSearch
    })


    return (
        <div>
            <Header />
            {myGpt ? <GptSearchPage /> :
                <>
                    <MainContainer />
                    <SecondryContainer />
                </>}

        </div>
    )
}

export default Browse
