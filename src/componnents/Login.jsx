import React from "react";

const Login = () => {
  return (
    <div className="flex  justify-center">
      <div className="bg-slate-700 text-white  flex  flex-col gap-11">
        <label htmlFor="">what is your name ?</label>
        <input
          type="text"
          placeholder="username"
          className="p-2 text-xl bg-slate-500"
        />
      </div>
    </div>
  );
};

export default Login;
