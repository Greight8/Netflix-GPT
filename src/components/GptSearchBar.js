import React from 'react'

const GptSearchBar = () => {
    return (
        <div className='flex justify-center pt-[160px]'>
            <div className=' bg-black'>
                <form>
                    <input className='pl-[15px] w-[451px] ml-[10px] py-2' type="text" placeholder='What Movie you would like to watch ?' />
                    <button className='bg-red-700 w-[103px] py-2 ml-[20px] mr-[10px] my-2 rounded-md text-white'>search</button>
                </form>
            </div>
        </div>
    )
}

export default GptSearchBar
