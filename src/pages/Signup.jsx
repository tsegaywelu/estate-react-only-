import React from "react";
import { useState } from "react";

const Signup = () => {
  const [formdata, setformdate] = useState({});
  const handleinput = (e) => {};
  return (
    <div className="flex justify-center">
      <form
        action=""
        className="flex flex-col md:w-1/3 bg-slate-500 p-7 gap-8 justify-center align-middle mt-7"
      >
        <h1 className=" text-center">Sign Up here!</h1>
        <input
          type="text"
          placeholder="username"
          id="username"
          className="p-3 rounded-lg border"
          onChange={handleinput}
        />
        <input
          type="email"
          placeholder="email"
          className=" p-3 rounded-lg border"
          onChange={handleinput}
        />
        <input
          type="password"
          placeholder="password"
          className=" p-3 rounded-lg border"
          onChange={handleinput}
        />
        <button className="bg-white rounded-lg p-3">sign Up</button>
        <div>have an account ? log in here</div>
      </form>
    </div>
  );
};

export default Signup;
