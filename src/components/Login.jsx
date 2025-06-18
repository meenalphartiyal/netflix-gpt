import Header from "./Header";
import Field from '../utils/ui/Field';
import Button from "../utils/ui/Button";
import { Link } from "react-router-dom";
import { useState } from "react";
import ErrorMessage from "../utils/ui/ErrorMessage";
import { validateEmail, validatePassword } from "../utils/validate";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from '../utils/firebase';
import { FIREBASE, SIGN_IN_UP } from "../utils/constants";
 
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [firebaseError, setFirebaseError] = useState(null);

  const handleEmailChange = (event) => {
    setFirebaseError("");
    const value = event.target.value;
    setEmail(value);
    if (validateEmail(value)) {
      setEmailError(false);
    } else {
      setEmailError(true);
    }
  };
  
  const handlePasswordChange = (event) => {
    setFirebaseError("");
    const value = event.target.value;
    setPassword(value);
    if (validatePassword(value)) {
      setPasswordError(false);
    } else {
      setPasswordError(true);
    }
  };

  const handleSubmit = () => {
    setFirebaseError("");
    if(!emailError && !passwordError){
      signInWithEmailAndPassword(auth, email, password)
      .then(() => {
        // Signed in 
      })
      .catch((error) => {
        const errorCode = error.code;
        if(errorCode == FIREBASE.SIGN_IN_ERROR_CODE)
          setFirebaseError(FIREBASE.SIGN_IN_ERROR)
        else
          setFirebaseError(FIREBASE.DEFAULT_ERROR);
      });
    }
  };

  return (
    <div className="login">
      <Header btn={false}/>
      <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white'>
        <div className="inset-0 bg-black/60 w-[450px] h-[500px] py-12 px-14">
          <h1 className="font-bold text-4xl mx-1 mb-8">Sign In</h1>
          <Field 
            label="Email or mobile number"
            type="email"
            value={email}
            onChange={handleEmailChange}
            theme={{ 
              width: "338px",
              '>input': {width: '322px'}
            }}
            />
          {emailError && <ErrorMessage message={SIGN_IN_UP.EMAIL}/>}
          <Field 
            label="Password"
            type="password"
            onChange={handlePasswordChange}
            value={password}
            theme={{ 
              width: "338px",
              marginTop: "20px",
              '>input': {width: '322px'}
            }}
            />
          {passwordError && <ErrorMessage message={SIGN_IN_UP.PASSWORD} />}
          <Button 
            name="Sign In"
            theme={{
              width: "338px",
              height: "40px",
              fontSize: "16px",
              margin: '30px 0'
            }}
            onClick={handleSubmit}
            />
          {firebaseError && (<ErrorMessage message={firebaseError} theme={{fontWeight: "600", marginBottom: "20px"}} />)}
          <div>New to MovieGPT? <span className="text-movie-red"><Link to='/'>Sign up now.</Link></span></div>
        </div>
      </div>
    </div>
  );
};
export default Login;