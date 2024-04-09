import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { API_OPTIONS } from '../utils/constants';
import { addUpcomingMovies } from '../utils/moviesSlice';

const useUpcomingMovies = () => {
    // 1) fetching the data from tmdb and updating our store
    const dispatch = useDispatch()

    // 2) subscribing to our store for memoization
    const myUpcomingMovies = useSelector((store) => {
        return store.movies.upcomingMovies
    })

    const upcomingMovies = async () => {
        const url = 'https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1'
        const response = await fetch(url, API_OPTIONS)
        const data = await response.json()

        dispatch(addUpcomingMovies(data.results))
    }

    useEffect(() => {
        // 1) only do the api call if store is empty
        if (!myUpcomingMovies) {
            upcomingMovies();
        }
    })
}

export default useUpcomingMovies