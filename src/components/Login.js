import React from 'react'
import { useState } from 'react'
import Header from './Header'

const Login = () => {
    const [isSignInForm, setIsSignInForm] = useState(true);

    const toggleForm = () => {
        setIsSignInForm(!isSignInForm)
    }

    return (
        <div>
            <Header />

            <div className='absolute'>
                <img src="https://assets.nflxext.com/ffe/siteui/vlv3/93da5c27-be66-427c-8b72-5cb39d275279/94eb5ad7-10d8-4cca-bf45-ac52e0a052c0/IN-en-20240226-popsignuptwoweeks-perspective_alpha_website_medium.jpg" alt="background image on netflix login page" />
            </div>

            <form className='w-4/12 my-36 p-12 mx-auto left-0 right-0 text-white absolute bg-black rounded-sm bg-opacity-80'>
                <h1 className='font-bold text-3xl pb-4 mx-4'>{isSignInForm ? "Sign In" : "Sign up"}</h1>

                {!isSignInForm && <input className='mx-4 m-2 pt-3 px-3 pb-2 w-[275px] bg-gray-700 text-sm' type="text" placeholder='Full Name' />}

                <input className='mx-4 m-2 pt-3 px-3 pb-2 w-[275px] bg-gray-700 text-sm' type="text" placeholder='Email or phone number' />

                {isSignInForm && <input className='mx-4 m-2 pt-3 px-3 pb-2 w-[275px] bg-gray-700 text-sm' type="password" placeholder='Password' />}

                {!isSignInForm && <input className='mx-4 m-2 pt-3 px-3 pb-2 w-[275px] bg-gray-700 text-sm' type="password" placeholder='Create new password' />}

                {!isSignInForm && <input className='mx-4 m-2 pt-3 px-3 pb-2 w-[275px] bg-gray-700 text-sm' type="password" placeholder='Confirm password' />}

                <button className='mx-4 mt-7 py-2 bg-red-700 w-[275px]'>{isSignInForm ? "Sign In" : "Sign up"}</button>

                {isSignInForm ? <p className='text-[#737373] text-sm mt-6 mx-4'>New to Netflix? <span className='text-white cursor-pointer' onClick={toggleForm}>Sign up now.</span></p> : <p className='text-[#737373] text-sm mt-6 mx-4'>Already a user? <span className='text-white cursor-pointer' onClick={toggleForm}>Sign In.</span></p>}
            </form>

        </div>
    )
}

export default Login
