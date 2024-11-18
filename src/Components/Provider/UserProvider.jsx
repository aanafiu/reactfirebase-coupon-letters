import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from "firebase/auth";
import app from "./firebase.config";

export const UserContext = createContext(); 
const auth = getAuth(app);
const UserProvider = ({children}) => {
    const [loading, setLoading] = useState(true)
    const [user, setUser] = useState(null);

    const registerNewAccount =(email, password)=>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    } 

    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
            setLoading(false)
        })

        return ()=> unsubscribe();
    }
    ,[])

    console.log("provider" , user)
    const updateDetails =(name, image)=>{
        setLoading(true)
        return updateProfile(auth.currentUser, {
            displayName: name, photoURL: image
          })

    }


    // Login
    const loginUser = (email, password)=>{
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password);
    }

    // Sign Out
    const signOutUser =()=>{
        setLoading(true)
        return signOut(auth);
    }

    const userInfo ={
        user,
        setUser,
        registerNewAccount,
        updateDetails,
        loginUser,
        signOutUser,
        loading,
        setLoading
    }

    return (
        <UserContext.Provider value={userInfo}>{children}</UserContext.Provider>
    );
};

export default UserProvider;