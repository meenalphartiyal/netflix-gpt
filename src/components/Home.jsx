import React, { useState } from "react";
import Header from "./Header.jsx";
import Field from "../utils/ui/Field.jsx";
import Button from "../utils/ui/Button.jsx";
import { useNavigate } from "react-router-dom";
import { validateEmail } from "../utils/validate.js";
import ErrorMessage from "../utils/ui/ErrorMessage.jsx";
import { SIGN_UP_EMAIL } from "../utils/constants.js";

const Home = () => {
  const [email, setEmail] = useState('');
  const [error, setError] = useState(false);
  const navigate = useNavigate();
  const handleChange = (event) => {
    const value = event.target.value;
    setEmail(value);
    if (validateEmail(value)) {
      setError(false);
    } else {
      setError(true);
    }
  }
  const handleClick = () => {
    if(email === '')
      setError(true)
    else{
      setError(false)
      navigate('/signup', {state: {email: email}})
    }
  }
  return (
    <div>
      <Header btn={true} />
      <div className="text-white flex flex-col items-center justify-center text-center w-[600px] h-auto absolute bottom-1/2 left-1/2 -translate-x-1/2 translate-y-1/2">
        <div className="z-10 text-6xl font-extrabold">
          <div className="mb-2">Unlimited movies,</div>
          <div>TV shows and more</div>
        </div>
        <div className="z-10 mt-4 text-lg font-semibold">
          Ready to watch?
        </div>
        <div className="z-10 mb-4">
          Enter your email to create your account.
        </div>
        <div className="z-10 flex flex-row">
          <Field
            label="Email address"
            type='email'
            value={email}
            onChange={handleChange}
            theme={{
              width: "370px",
              height: "56px",
              margin: "0 4px",
              ">input": { width: "350px" },
            }}
          />
          <Button
            name="Get Started"
            onClick={handleClick}
            theme={{
              width: "200px",
              height: "56px",
              fontSize: "20px",
            }}
          />
        </div>
        {error && (<ErrorMessage message={SIGN_UP_EMAIL} theme={{marginLeft: "30px"}}/>)}
      </div>
    </div>
  );
};

export default Home;
