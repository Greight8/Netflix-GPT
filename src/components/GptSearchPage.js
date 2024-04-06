import React from 'react'
import GptMovieSugestions from './GptMovieSugestions'
import GptSearchBar from './GptSearchBar'
import { Background_Img } from "../utils/constants"

const GptSearch = () => {
    return (
        <div>
            <div className='fixed -z-10'>
                <img src={Background_Img} alt="background image inside GptSearchPage" />
            </div>

            <GptSearchBar />
            <GptMovieSugestions />
        </div>
    )
}

export default GptSearch
