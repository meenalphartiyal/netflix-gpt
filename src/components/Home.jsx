import React, { useState } from "react";
import Header from "./Header.jsx";
import Field from "../assets/ui/Field.jsx";
import Button from "../assets/ui/Button.jsx";

const Home = () => {
  const [email, setEmail] = useState('');
  const [error, setError] = useState();
  const handleChange = (event) => {
    setError(false);
    setEmail(event.target.value);
  }
  const handleClick = () => {
    if(email === '')
      setError(true)
    else{
      setError(false)
      console.log(email);
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
        <div className="z-10 m-4 text-lg font-semibold mb-8">
          Starts at ₹149. Cancel at any time.
        </div>
        <div className="z-10 mb-4">
          Ready to watch? Enter your email to create or restart your membership.
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
        {error && (<div className="w-full px-5 my-1 text-xs text-netflix-red text-left">&#x2BBE; Please Enter an email to proceed.</div>)}
      </div>
    </div>
  );
};

export default Home;
