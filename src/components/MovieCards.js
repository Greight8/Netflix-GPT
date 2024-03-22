import React from 'react'
import { IMG_URL } from '../utils/constants'

const MovieCards = ({ image }) => {
    return (
        <div className='w-44'>
            <img className='h-[210px]' src={IMG_URL + image + ".jpg"} alt="movie-poster" />
        </div>
    )
}

export default MovieCards
