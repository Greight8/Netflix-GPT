// import { useState } from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { API_OPTIONS } from '../utils/constants'
import { addNowPlayingMovies } from '../utils/moviesSlice'

const useNowPlayingMovies = () => {

    // 1) fetching the data from tmdb and updating our store
    const dispatch = useDispatch()

    // 2) subscribing to our store for memoization
    const nowPlayingMovies = useSelector((store) => {
        return store.movies.nowPlayingMovies
    })

    const getNowPlayingMovies = async () => {
        const url = 'https://api.themoviedb.org/3/movie/now_playing?page=1'
        const response = await fetch(url, API_OPTIONS)
        const data = await response.json();
        // console.log(data.results)

        dispatch(addNowPlayingMovies(data.results));
    }

    useEffect(() => {
        // 1) only do the api call if store is empty
        if (!nowPlayingMovies) {
            getNowPlayingMovies()
        }
    }, [])
}

export default useNowPlayingMovies