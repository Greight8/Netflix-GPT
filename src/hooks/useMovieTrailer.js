import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addTrailerVideo } from "../utils/moviesSlice";

const useMovieTrailer = (movieId) => {
    const dispatch = useDispatch()

    // getting the trailer video from tmdb and updating our store with the trailer of movie

    const getMovieTralier = async () => {
        // const url = 'https://api.themoviedb.org/3/movie/1011985/videos?language=en-US'
        const url = 'https://api.themoviedb.org/3/movie/' + movieId + '/videos?language=en-US'
        const response = await fetch(url, API_OPTIONS)
        const data = await response.json()
        // console.log("movie trailer data", data);

        const movieTrailer = data.results.filter((item) => {
            return item.name === "Official Trailer";
        })
        console.log("filtered movie trailer data", movieTrailer)
        dispatch(addTrailerVideo(movieTrailer))
        // SetTrailerId(movieTrailer.key)
    }

    useEffect(() => {
        getMovieTralier();
    }, [])
}

export default useMovieTrailer;