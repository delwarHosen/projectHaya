import React, { createContext, useEffect, useState } from 'react';
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { app } from '../../firebase/firebase.config';

export const AuthContext = createContext(null)

const auth = getAuth(app);
const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(null)
    const googleProvider = new GoogleAuthProvider();

    const createUser = (email, password) => {
        setLoading(false)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const signIn = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    const googleSignIn = ()=>{
        setLoading(true)
        return signInWithPopup(auth,googleProvider);
    }

    const logOut = () => {
        setLoading(true)
        return signOut(auth)
    }

    const userUpdateProfile = (name) => {
        return updateProfile(auth.currentUser, {
            displayName: name,
        })
    }


    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser)
            console.log('Current user is a: ', currentUser);
            setLoading(false)
        })
        return () => {
            return unSubscribe()
        }
    }, [])

    const userInfo = {
        user,
        loading,
        createUser,
        signIn,
        googleSignIn,
        logOut,
        userUpdateProfile
    }
    return (
        <AuthContext.Provider value={userInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;