import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile,updateEmail, sendPasswordResetEmail, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import app from "./firebase.config";


export const UserContext = createContext(); 
const auth = getAuth(app);
const UserProvider = ({children}) => {
    const [loading, setLoading] = useState(true)
    const [user, setUser] = useState(null);

    const[email, setEmail] = useState(null);

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

    // console.log("provider" , user)
    const updateDetails =(name, image)=>{
        setLoading(true)
        return updateProfile(auth.currentUser, {
            displayName:name , photoURL: image
          }).finally(()=>{
            setLoading(false)

          }) 

    }

    // Login
    const loginUser = (email, password)=>{
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
        .finally(()=>{
            setLoading(false)

          }) 
    }

    // Sign Out
    const signOutUser =()=>{
        setLoading(true)
        return signOut(auth);
    }

    // resetPassword
    const resetPassword = (email)=>{
        return sendPasswordResetEmail(auth, email);
    }

    // Sign In Google
    const provider = new GoogleAuthProvider();
    const loginGoogle = ()=>{
        return signInWithPopup(auth,provider);
    }

    const userInfo ={
        user,
        setUser,
        registerNewAccount,
        updateDetails,
        loginUser,
        signOutUser,
        loading,
        setLoading,
        resetPassword,
        loginGoogle,
        setEmail,
        email

    }

    return (
        <UserContext.Provider value={userInfo}>{children}</UserContext.Provider>
    );
};

export default UserProvider;