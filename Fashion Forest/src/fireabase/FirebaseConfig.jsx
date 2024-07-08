import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCj86V1csx-_CJo9oXEtqi-1yh-FUAvjxI",
  authDomain: "e-bharat1-2eb76.firebaseapp.com",
  projectId: "e-bharat1-2eb76",
  storageBucket: "e-bharat1-2eb76.appspot.com",
  messagingSenderId: "65024601063",
  appId: "1:65024601063:web:fbdecff950dd0ce1092b42",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Access Firebase services using the initialized app
const fireDB = getFirestore(app);
const auth = getAuth(app);

// Function to handle Google sign-in
const continueWithGoogle = async () => {
    try {
        const provider = new GoogleAuthProvider(); // Create a new instance of GoogleAuthProvider
        const result = await signInWithPopup(auth, provider); // Sign in with Google popup
        // You can handle the sign-in result here (e.g., update UI, save user data)
    } catch (error) {
        console.log(error);
        // Handle errors here
    }
};

export { fireDB, auth, continueWithGoogle };