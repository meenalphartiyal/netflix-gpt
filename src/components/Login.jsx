import Header from "./Header";
import Field from '../assets/ui/Field';
import Button from "../assets/ui/Button";
import { Link } from "react-router-dom";
import { useState } from "react";
import { validateEmail, validatePassword } from "../utils/validate";
 
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);

  const handleEmailChange = (event) => {
    const value = event.target.value;
    setEmail(value);
    if (validateEmail(value)) {
      setEmailError(false);
    } else {
      setEmailError(true);
    }
  };
  
  const handlePasswordChange = (event) => {
    const value = event.target.value;
    setPassword(value);
    if (validatePassword(value)) {
      setPasswordError(false);
    } else {
      setPasswordError(true);
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
          {emailError && <div className="w-full mt-1 mb-4 text-xs text-netflix-red text-left">&#x2BBE; Please enter a valid email</div>}
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
          {passwordError && <div className="w-full my-1 text-xs text-netflix-red text-left">&#x2BBE; Please enter a valid password</div>}
          <Button 
            name="Sign In"
            theme={{
              width: "338px",
              height: "40px",
              fontSize: "16px",
              margin: '30px 0'
            }}
          />
          <div>New to Netflix? <span className="text-netflix-red"><Link to='/'>Sign up now.</Link></span></div>
        </div>
      </div>
    </div>
  );
};
export default Login;