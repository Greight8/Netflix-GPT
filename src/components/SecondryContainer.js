import React from 'react'
import { useSelector } from 'react-redux'
import language from '../utils/languageConstants'
import MovieLists from './MovieLists'

const SecondryContainer = () => {
    // 1) getting all the movies from our store
    const movies = useSelector((store) => {
        return store.movies
    })

    // 2) subscribing to config store
    const myLang = useSelector((store) => {
        return store.config.lang
    })

    return (
        <div className='bg-black'>
            <div className='-mt-[130px] relative z-20'>
                <MovieLists title={language[myLang].nowPlaying} movies={movies?.nowPlayingMovies} />
                <MovieLists title={language[myLang].popular} movies={movies?.popularMovies} />
                <MovieLists title={language[myLang].topRated} movies={movies?.topRatedMovies} />
                <MovieLists title={language[myLang].upcoming} movies={movies?.upcomingMovies} />
            </div>
        </div>

    )
}

export default SecondryContainer
