import React from 'react'

const VideoTitle = ({ title, overview }) => {
    return (
        <div className='w-full aspect-video pt-40 px-24 absolute text-white bg-gradient-to-r from-black overflow-hidden'>
            <h1 className='text-4xl font-bold'>{title}</h1>
            <p className='text-lg py-6 w-1/4'>{overview}</p>

            <div>
                <button className='bg-white text-black p-2 px-10 text-xl rounded-md hover:bg-opacity-80'>▶️ Play</button>
                <button className='ml-4 bg-gray-500 text-white p-2 px-10 text-xl rounded-md bg-opacity-50'>ℹ️ More Info</button>
            </div>
        </div>
    )
}

export default VideoTitle
