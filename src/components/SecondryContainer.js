import React from 'react'
import { useSelector } from 'react-redux'
import MovieLists from './MovieLists'

const SecondryContainer = () => {
    // 1) getting all the movies from our store
    const movies = useSelector((store) => {
        return store.movies
    })

    return (
        <div className='bg-black'>
            <div className='-mt-[130px] relative z-20'>
                <MovieLists title={"Now Playing"} movies={movies?.nowPlayingMovies} />
                <MovieLists title={"Popular"} movies={movies?.popularMovies} />
                <MovieLists title={"Top Rated"} movies={movies?.topRatedMovies} />
                <MovieLists title={"Upcoming"} movies={movies?.upcomingMovies} />
            </div>
        </div>

    )
}

export default SecondryContainer
