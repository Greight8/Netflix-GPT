import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { API_OPTIONS } from '../utils/constants';
import { addTopRatedMovies } from '../utils/moviesSlice';

const useTopRatedMovies = () => {
    const dispatch = useDispatch()

    const topRatedMovies = async () => {
        const url = 'https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1'
        const response = await fetch(url, API_OPTIONS)
        const data = await response.json()

        dispatch(addTopRatedMovies(data.results))
    }

    useEffect(() => {
        topRatedMovies();
    })
}

export default useTopRatedMovies