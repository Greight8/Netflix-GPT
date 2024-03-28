import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { API_OPTIONS } from '../utils/constants';
import { addPopularMovies } from '../utils/moviesSlice';

const usePopularMovies = () => {
    const dispatch = useDispatch()

    const popularMovies = async () => {
        const url = 'https://api.themoviedb.org/3/movie/popular?language=en-US&page=1'
        const response = await fetch(url, API_OPTIONS)
        const data = await response.json()
        // console.log("popular movies", data)

        dispatch(addPopularMovies(data.results))
    }

    useEffect(() => {
        popularMovies();
    })
}

export default usePopularMovies
