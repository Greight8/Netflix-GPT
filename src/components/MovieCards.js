import React from 'react'
import { IMG_URL } from '../utils/constants'

const MovieCards = ({ image }) => {
    if (!image) {
        return
    }

    return (
        <div className='w-44'>
            <img className='h-[210px]' src={IMG_URL + image} alt="movie-poster" />
        </div>
    )
}

export default MovieCards
