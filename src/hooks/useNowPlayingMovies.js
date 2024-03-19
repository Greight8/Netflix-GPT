// import { useState } from 'react'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { API_OPTIONS } from '../utils/constants'
import { addNowPlayingMovies } from '../utils/moviesSlice'

const useNowPlayingMovies = () => {

    // 1) fetching the data from tmdb and updating our store
    const dispatch = useDispatch()

    const getNowPlayingMovies = async () => {
        const url = 'https://api.themoviedb.org/3/movie/now_playing?page=1'
        const response = await fetch(url, API_OPTIONS)
        const data = await response.json();
        // console.log(data.results)

        dispatch(addNowPlayingMovies(data.results));
    }

    useEffect(() => {
        getNowPlayingMovies()
    }, [])
}

export default useNowPlayingMovies