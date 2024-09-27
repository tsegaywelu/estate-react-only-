import React from "react";

export const Signin = () => {
  return (
    <div className="flex justify-center">
      <form
        action=""
        className="flex flex-col md:w-1/3 bg-slate-500 p-7 gap-8 justify-center align-middle mt-7"
      >
        <h1 className=" text-center">Sign in here!</h1>
        <input
          type="email"
          placeholder="email"
          className=" p-3 rounded-lg border"
        />
        <input
          type="password"
          placeholder="password"
          className=" p-3 rounded-lg border"
        />
        <button className="bg-white rounded-lg p-3">signin</button>
        Have an no account?
        <a href="">Sign up</a>
      </form>
    </div>
  );
};
