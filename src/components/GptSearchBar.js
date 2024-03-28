import React from 'react'
import { useSelector } from 'react-redux'
import language from '../utils/languageConstants'

const GptSearchBar = () => {
    const myLang = useSelector((store) => {
        return store.config.lang
    })

    console.log("value of my store is", myLang);

    return (
        <div className='flex justify-center pt-[160px]'>
            <div className=' bg-black'>
                <form>
                    <input className='pl-[15px] w-[451px] ml-[10px] py-2 text-black' type="text" placeholder={language[myLang].placeholder} />
                    <button className='bg-red-700 w-[130px] py-2 ml-[20px] mr-[10px] my-2 rounded-md text-white text-bold'>{language[myLang].search}</button>
                </form>
            </div>
        </div>
    )
}

export default GptSearchBar
