import { initializeApp } from "firebase/app";
import { getAuth, signInWithRedirect, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
import { getFirestore, doc, getDoc, setDoc, } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyDsctkg2dHvwjrVV6ar8g04808uCmFe5iM",
  authDomain: "ecom-crwn-4b437.firebaseapp.com",
  projectId: "ecom-crwn-4b437",
  storageBucket: "ecom-crwn-4b437.appspot.com",
  messagingSenderId: "330842019917",
  appId: "1:330842019917:web:06fde5afaf56d263a1a404"
};

initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
  prompt : 'select_account'
})

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuthObj) => {
    const userDocReference = doc(db, 'users', userAuthObj.user.uid);

    const userSnapshot = await getDoc(userDocReference);
    console.log('userSnapshot', userSnapshot);
    console.log('userSnapshot.exists()', userSnapshot.exists());

    if(!userSnapshot.exists()){
      const { user : {displayName, email }} = userAuthObj;
      const createdAt = new Date();

      try{
        await setDoc(userDocReference, {
          displayName,
          email,
          createdAt
        })
      }
      catch(e){
        console.log('error occured while creating doc');
      }
    }

    return userDocReference;
}