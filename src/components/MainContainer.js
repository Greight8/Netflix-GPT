import React from 'react'
import { useSelector } from 'react-redux'
import VideoBackground from './VideoBackground'
import VideoTitle from './VideoTitle'

const MainContainer = () => {
    // 1) subscribing movieSlice to get nowPlayingMovies
    const movies = useSelector((store) => {
        return store.movies.nowPlayingMovies
    })

    // if (movies === null) {
    //     return
    // }

    if (!movies) {
        return
    }

    const mainMovie = movies[0];
    // console.log(mainMovie)

    const { original_title, overview, id } = mainMovie

    return (
        <div>
            <VideoTitle title={original_title} overview={overview} />
            <VideoBackground movieId={id} />
        </div>
    )
}

export default MainContainer
