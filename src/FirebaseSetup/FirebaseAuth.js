import {useEffect, useState} from 'react';
import {onAuthStateChanged,signInWithEmailAndPassword ,getAuth, createUserWithEmailAndPassword, signOut } from "firebase/auth";
import FirebaseInitialiazation from './FirebaseInit';
 
FirebaseInitialiazation()

const useFirebase = () => {
    const [user , setUser] = useState(null)
    const [loading, setLoading] = useState(true)
    const auth = getAuth();
    // const [AddUser] = useMutation(ADD_USER)
    
    //Register User
    const RegisterUser = (email, password, userData) => {
       return createUserWithEmailAndPassword(auth, email, password, userData)
    }

    //Login with password and email
    const LoginUser = (email, password) => {
        signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            const user = userCredential.user;
            setUser(user)
            console.log('Sign in successfully'); 
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
                setLoading(false)
            }
          });
    },[]);

    const LogOut = () => {
        signOut(auth).then(() => {
            // Sign-out successful
            setUser(null)
            setLoading(false)
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