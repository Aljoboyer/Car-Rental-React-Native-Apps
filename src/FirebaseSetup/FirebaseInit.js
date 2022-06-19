import { initializeApp } from "firebase/app";
import firebaseConfig from "./Firebase.Config";

const FirebaseInitialiazation = () => {
    return initializeApp(firebaseConfig);
}

export default FirebaseInitialiazation;