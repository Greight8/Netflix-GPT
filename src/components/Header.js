import React from 'react'
import { useEffect } from 'react'
import { onAuthStateChanged, signOut } from "firebase/auth";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { auth } from '../utils/firebase'
import { addUser, removeUser } from '../utils/userSlice'
import { netflixLogo } from '../utils/constants';

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

    return (
        <div className="absolute flex justify-between w-screen px-5 py-3 bg-gradient-to-b from-black z-10">

            <img className="w-44 font-bold" src={netflixLogo} alt="netflix logo" />

            {myUser && <div className="flex">
                <img className="h-[37px] mt-[17px] pr-[10px]" src={myUser.photoURL} alt="user icon" />

                <button onClick={handleSignOut} className="font-bold text-gray-300 cursor-pointer">Sign out</button>
            </div>}
        </div>
    )
}

export default Header