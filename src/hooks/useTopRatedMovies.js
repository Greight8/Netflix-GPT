import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { API_OPTIONS } from '../utils/constants';
import { addTopRatedMovies } from '../utils/moviesSlice';

const useTopRatedMovies = () => {
    // 1) fetching the data from tmdb and updating our store
    const dispatch = useDispatch()

    // 2) subscribing to our store for memoization
    const myTopRatedMovies = useSelector((store) => {
        return store.movies.topRatedMovies
    })

    const topRatedMovies = async () => {
        const url = 'https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1'
        const response = await fetch(url, API_OPTIONS)
        const data = await response.json()

        dispatch(addTopRatedMovies(data.results))
    }

    useEffect(() => {
        // 1) only do the api call if store is empty
        if (!myTopRatedMovies) {
            topRatedMovies();
        }
    })
}

export default useTopRatedMovies