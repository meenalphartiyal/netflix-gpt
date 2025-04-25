import Header from "./Header";
import Field from '../assets/ui/Field';
import Button from "../assets/ui/Button";
import { Link } from "react-router-dom";
 
const Login = () => {
  return (
    <div className="login">
      <Header btn={false}/>
      <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white'>
        <div className="inset-0 bg-black/60 w-[450px] h-[500px] py-12 px-14">
          <h1 className="font-bold text-4xl mx-1 mb-8">Sign In</h1>
          <Field 
            label="Email or mobile number"
            type="email"
            theme={{ 
              width: "338px",
              marginBottom: "16px",
              '>input': {width: '322px'}
            }}
          />
          <Field 
            label="Password"
            type="password"
            theme={{ 
              width: "338px",
              marginBottom: "16px",
              '>input': {width: '322px'}
            }}
          />
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