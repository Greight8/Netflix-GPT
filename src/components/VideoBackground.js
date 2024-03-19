import React from 'react'
// import { useState } from 'react';
import { useSelector } from 'react-redux';
import useMovieTrailer from '../hooks/useMovieTrailer';

const VideoBackground = ({ movieId }) => {
    // 1) fetching trailer of our main movie through useMovieTrailer custom hook
    useMovieTrailer(movieId);

    // 2) there are 2 ways to make to make youtube url id dynamic :-

    // a) using state 
    // const [trailerId, SetTrailerId] = useState(null);

    // b) using using our store :- subscribing to our store
    const trailerId = useSelector((store) => {
        return store.movies?.trailerVideo
    })

    if (!trailerId) {
        return
    }

    return (
        <div >
            <iframe className='w-full aspect-video' src={"https://www.youtube.com/embed/" + trailerId[0]?.key + "?autoplay=1&mute=1"} title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></iframe>
        </div>
    )
}

export default VideoBackground
