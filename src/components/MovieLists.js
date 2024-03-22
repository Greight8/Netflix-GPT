import React from 'react'
import MovieCards from './MovieCards'

const MovieLists = ({ title, movies }) => {
    if (!movies) {
        return
    }
    // console.log(movies)

    return (
        <div className='px-6 pb-14'>
            <h1 className='text-2xl text-white pb-4 pt-4'>{title}</h1>

            <div className='flex overflow-x-scroll'>
                <div className='flex'>
                    {movies.map((image) => {
                        return <MovieCards key={image.id} image={image.poster_path} />
                    })}
                    {/* <MovieCards /> */}
                </div>
            </div>
        </div>
    )
}

export default MovieLists
