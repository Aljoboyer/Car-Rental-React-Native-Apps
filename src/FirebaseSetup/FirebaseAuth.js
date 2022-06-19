import {useEffect, useState} from 'react';
import {onAuthStateChanged,signInWithEmailAndPassword ,getAuth, createUserWithEmailAndPassword, signOut } from "firebase/auth";
import FirebaseInitialiazation from './FirebaseInit';
 
FirebaseInitialiazation()

const useFirebase = () => { 
    const [user , setUser] = useState(null)
    const [loading, setLoading] = useState(true)
    const auth = getAuth();
    
    //Register User
    const RegisterUser = (email, password, navigation) => {
        createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            // ...
            setUser(user)
        })
        .catch((error) => {
            console.log(error.message)
        });
    }

    //Login with password and email
    const LoginUser = (email, password, navigation) => {
        signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            const user = userCredential.user;
            setUser(user)
        })
        .catch((error) => {
            console.log(error.message)
        });
    }

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
              const uid = user.uid;
              // ...
              setUser(user)
              setLoading(false)
            } else {
                setUser(null)
            }
          });
    },[]);

    const LogOut = () => {
        signOut(auth).then(() => {
            // Sign-out successful
            setUser(null)
            console.log('Sign-out successfully')
          }).catch((error) => {
            // An error happened.
          });
    }
    return {
      user,
      RegisterUser,
      LoginUser,
      LogOut,
      setUser,
      loading
    }
}

export default useFirebase;