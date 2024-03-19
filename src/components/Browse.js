import React from 'react'
import useNowPlayingMovies from '../hooks/useNowPlayingMovies'
import Header from './Header'
import MainContainer from './MainContainer';
import SecondryContainer from './SecondryContainer';

const Browse = () => {
    // console.log("browse component")

    // 1) calling useNowPlayingMovies custom hook here
    useNowPlayingMovies();

    return (
        <div>
            <Header />
            <MainContainer />
            <SecondryContainer />
        </div>
    )
}

export default Browse
