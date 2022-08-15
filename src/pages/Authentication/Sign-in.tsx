import { signInWithGooglePopup, createUserDocumentFromAuth } from "../../utils/firebase";

const SignIn = () => {

  const getGoogleAuth = async () => {
    const response = await signInWithGooglePopup();
    console.log('response', response);
    await createUserDocumentFromAuth(response);
  }

  return(
    <div>
      Sign In
      <button onClick={getGoogleAuth}>Sing in with google</button>
    </div>
  )
}

export default SignIn;