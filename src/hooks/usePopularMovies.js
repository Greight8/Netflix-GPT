import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { API_OPTIONS } from '../utils/constants';
import { addPopularMovies } from '../utils/moviesSlice';

const usePopularMovies = () => {
    // 1) fetching the data from tmdb and updating our store
    const dispatch = useDispatch()

    // 2) subscribing to our store for memoization
    const myPopularMovies = useSelector((store) => {
        return store.movies.popularMovies
    })

    const popularMovies = async () => {
        const url = 'https://api.themoviedb.org/3/movie/popular?language=en-US&page=1'
        const response = await fetch(url, API_OPTIONS)
        const data = await response.json()
        // console.log("popular movies", data)

        dispatch(addPopularMovies(data.results))
    }

    useEffect(() => {
        // 1) only do the api call if store is empty
        if (!myPopularMovies) {
            popularMovies();
        }
    })
}

export default usePopularMovies
