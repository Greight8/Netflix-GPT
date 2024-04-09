import React from 'react'
import { useSelector } from 'react-redux'
import language from '../utils/languageConstants'

const VideoTitle = ({ title, overview }) => {
    // 1) subscribing to config store
    const myLang = useSelector((store) => {
        return store.config.lang
    })

    return (
        <div className='w-[100%] overflow-x-hidden overflow-y-hidden aspect-video pt-40 px-24 absolute text-white bg-gradient-to-r from-black'>
            <h1 className='text-4xl font-bold'>{language[myLang].videoTitle}</h1>
            <p className='text-lg py-6 w-1/4'>{language[myLang].videoDescription}</p>

            <div>
                <button className='bg-white text-black p-2 px-10 text-xl rounded-md hover:bg-opacity-80'>▶️ {language[myLang].play}</button>

                <button className='ml-4 bg-gray-500 text-white p-2 px-10 text-xl rounded-md bg-opacity-50'>ℹ️ {language[myLang].info}</button>
            </div>
        </div>
    )
}

export default VideoTitle
