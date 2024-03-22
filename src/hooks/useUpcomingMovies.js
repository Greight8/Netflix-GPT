import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { API_OPTIONS } from '../utils/constants';
import { addUpcomingMovies } from '../utils/moviesSlice';

const useUpcomingMovies = () => {
    const dispatch = useDispatch()

    const upcomingMovies = async () => {
        const url = 'https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1'
        const response = await fetch(url, API_OPTIONS)
        const data = await response.json()

        dispatch(addUpcomingMovies(data.results))
    }

    useEffect(() => {
        upcomingMovies();
    })
}

export default useUpcomingMovies