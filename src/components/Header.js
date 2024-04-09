import React from 'react'
import { useEffect } from 'react'
import { onAuthStateChanged, signOut } from "firebase/auth";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { auth } from '../utils/firebase'
import { addUser, removeUser } from '../utils/userSlice'
import { netflixLogo, SUPPORTED_LANGUAGES } from '../utils/constants';
import { toggleGptSearchView } from '../utils/gptSlice';
import { changeLanguage } from '../utils/configSlice';
import language from '../utils/languageConstants';

const Header = () => {
    // console.log("header component")

    const dispatch = useDispatch()
    const navigate = useNavigate()

    // 3) subscribing to our store to get the photoUrl
    const myUser = useSelector((store) => {
        return store.user
    })

    // 2) func. to sign out
    const handleSignOut = () => {
        signOut(auth).then(() => {
            // a) Sign-out successful.

            // c) make the user null
            dispatch(removeUser())

        }).catch((error) => {
            console.log(error);
        });
    }

    // 1) making our logic to check every time if the user is sign up / logged in or not
    useEffect(() => {
        // console.log("useeffect called after header component")

        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                // a) User is signed in , we will update our store , userSlice
                const { uid, email, displayName, photoURL } = user;
                dispatch(addUser({ uid: uid, email: email, name: displayName, photoURL: photoURL }))
                navigate("/browse");

            } else {
                // User is signed out , we will update our store , userSlice
                dispatch(removeUser());

                // b) take the user to login page
                navigate("/");
            }
        });

        return (() => {
            return unsubscribe();
        })
    }, [])


    //4) func to go gptSearchPage 
    const handleGptSearchClick = () => {
        // toggle Gpt feature
        dispatch(toggleGptSearchView())
    }

    // 5) func to change the language 
    const handleChangeLanguage = (e) => {
        // console.log(e.target.value)
        dispatch(changeLanguage(e.target.value))
    }

    // 6) subscribing to our gpt store only show the language change button when we are rendering gptSearchPage :-
    const myGpt = useSelector((store) => {
        return store.gpt.gptSearch
    })

    // 1) subscribing to config store
    const myLang = useSelector((store) => {
        return store.config.lang
    })

    return (
        <div className="absolute flex justify-between w-[100%] overflow-x-hidden overflow-y-hidden px-5 py-3 bg-gradient-to-b from-black z-10">

            <img className="w-44 font-bold" src={netflixLogo} alt="netflix logo" />

            {myUser && <div className="flex">

                <select className='px-[10px] h-[39px] mt-[17px] mr-[24px] bg-gray-900 text-white' onChange={handleChangeLanguage}>
                    {/* 1) value should be same as inside language constants */}
                    {/* <option value={"en"}>English</option>
                    <option value={"hindi"}>हिंदी</option>
                    <option value={"spanish"}>española</option> */}

                    {/* 2) getting the values from constants file */}
                    {SUPPORTED_LANGUAGES.map((lang) => {
                        return <option key={lang.identifier} value={lang.identifier}>{lang.name}</option>
                    })}

                </select>

                <button className='text-white bg-purple-800 h-[38px] pl-[12px] pr-[12px] pb-[2px] mt-[18px] mr-[22px] rounded-sm' onClick={handleGptSearchClick}>{!myGpt ? language[myLang].gptSearch : language[myLang].home}</button>

                <img className="h-[37px] mt-[17px] pr-[10px]" src={myUser.photoURL} alt="user icon" />

                <button onClick={handleSignOut} className="font-bold text-gray-300 cursor-pointer">{language[myLang].signOut}</button>
            </div>}
        </div>
    )
}

export default Header