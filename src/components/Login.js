import React from 'react'
import { useState } from 'react'
import Header from './Header'
import { checkValidateData } from '../utils/validateLogic'
import { signupValidateData } from '../utils/signupValidateLogic'
import { useRef } from 'react'
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "../utils/firebase"
import { useDispatch } from 'react-redux'
import { addUser } from '../utils/userSlice'
import { Background_Img, MyphotoURL } from '../utils/constants'

const Login = () => {
    // console.log("login component")

    // 1) making state to change the login / sign up form
    const [isSignInForm, setIsSignInForm] = useState(true);

    // 2) making state to change email input box
    const [emailText, setEmailText] = useState("")

    // 3) using useref hook to get reference of password
    const password = useRef(null)

    // 5) making state to show the error message through validation
    const [errorMsg, setErrorMsg] = useState(null)

    // 6) useRef hook to get reference of name, confirmPassword
    const name = useRef(null)
    // const confirmPassword = useRef(null)

    // 7) using useDispatch hook to update the store again to fix pour bug
    const dispatch = useDispatch();

    // 1.1) func to change login/Signup form
    const toggleForm = () => {
        setIsSignInForm(!isSignInForm)
    }

    // 4) func to validate email & password  (Login form)
    const handleValidate = () => {
        // validate the form data
        const message = checkValidateData(emailText, password.current.value)
        setErrorMsg(message);

        if (message) {
            return
        }

        signInWithEmailAndPassword(auth, emailText, password.current.value)
            .then((userCredential) => {
                const user = userCredential.user;
                // console.log(user)
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                setErrorMsg("user not found ! kindly sign up.")
            });
    }

    // 5) func to validate (Sign Up form)
    const handleValidate2 = () => {
        const message2 = signupValidateData(name.current.value, emailText, password.current.value);
        setErrorMsg(message2);

        if (message2) {
            return
        }

        createUserWithEmailAndPassword(auth, emailText, password.current.value)
            .then((userCredential) => {
                // Signed up 
                const user = userCredential.user;
                // console.log(user)

                updateProfile(user, {
                    displayName: name.current.value, photoURL: MyphotoURL

                }).then(() => {
                    // b) updating the store again
                    const { uid, email, displayName, photoURL } = auth.currentUser;
                    dispatch(addUser({ uid: uid, email: email, name: displayName, photoURL: photoURL }))

                }).catch((error) => {
                    setErrorMsg(error);
                });

            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                setErrorMsg(errorCode + errorMessage);
            });
    }

    return (
        <div>
            <Header />

            <div className='absolute'>
                <img src={Background_Img} alt="background image on netflix login page" />
            </div>

            <form onSubmit={(e) => { return e.preventDefault() }} className='w-4/12 my-36 p-12 mx-auto left-0 right-0 text-white absolute bg-black rounded-sm bg-opacity-80'>
                <h1 className='font-bold text-3xl pb-4 mx-4'>{isSignInForm ? "Sign In" : "Sign up"}</h1>

                {!isSignInForm && <input ref={name} className='mx-4 m-2 pt-3 px-3 pb-2 w-[275px] bg-gray-700 text-sm' type="text" placeholder='Full Name' />}

                <input className='mx-4 m-2 pt-3 px-3 pb-2 w-[275px] bg-gray-700 text-sm' type="text" placeholder='Email or phone number' value={emailText} onChange={(e) => {
                    setEmailText(e.target.value)
                    // console.log(emailText)
                }} />

                {isSignInForm && <input ref={password} className='mx-4 m-2 pt-3 px-3 pb-2 w-[275px] bg-gray-700 text-sm' type="password" placeholder='Password' />}

                {!isSignInForm && <input ref={password} className='mx-4 m-2 pt-3 px-3 pb-2 w-[275px] bg-gray-700 text-sm' type="password" placeholder='Create new password' />}

                {/* {!isSignInForm && <input ref={confirmPassword} className='mx-4 m-2 pt-3 px-3 pb-2 w-[275px] bg-gray-700 text-sm' type="password" placeholder='Confirm password' />} */}

                <p className='text-yellow-400 text-bold text-sm mx-4'>{errorMsg}</p>

                {isSignInForm && <button className='mx-4 mt-7 py-2 bg-red-700 w-[275px]' onClick={handleValidate}>Sign In</button>}

                {!isSignInForm && <button className='mx-4 mt-7 py-2 bg-red-700 w-[275px]' onClick={handleValidate2}>Sign up</button>}

                {isSignInForm ? <p className='text-[#737373] text-sm mt-6 mx-4'>New to Netflix? <span className='text-white cursor-pointer' onClick={toggleForm}>Sign up now.</span></p> : <p className='text-[#737373] text-sm mt-6 mx-4'>Already a user? <span className='text-white cursor-pointer' onClick={toggleForm}>Sign In.</span></p>}
            </form>

        </div>
    )
}

export default Login
