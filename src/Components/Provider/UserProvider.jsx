import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from "firebase/auth";
import app from "./firebase.config";

export const UserContext = createContext(); 
const auth = getAuth(app);
const UserProvider = ({children}) => {

    const [user, setUser] = useState(null);

    const registerNewAccount =(email, password)=>{
        return createUserWithEmailAndPassword(auth, email, password)
    } 

    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
        })

        return ()=> unsubscribe();
    }
    ,[])

    console.log("provider" , user)
    const updateDetails =(name, image)=>{
        return updateProfile(auth.currentUser, {
            displayName: name, photoURL: image
          })

    }


    // Login
    const loginUser = (email, password)=>{
        return signInWithEmailAndPassword(auth, email, password);
    }

    // Sign Out
    const signOutUser =()=>{
        return signOut(auth);
    }

    const userInfo ={
        user,
        registerNewAccount,
        updateDetails,
        loginUser,
        signOutUser
    }

    return (
        <UserContext.Provider value={userInfo}>{children}</UserContext.Provider>
    );
};

export default UserProvider;