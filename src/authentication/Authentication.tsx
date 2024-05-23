import React, { act, useState } from "react";
import "./Authentication";
import Login from "./Login";
import Signup from "./Signup";

function Authentication() {
  const [active, setActive] = useState("signup");

  const handleChange = () => {
    setActive(active === "login" ? "signup" : "login");
  };

  return (
    <div className="flex flex-row items-center my-[0px] mx-[50px]">
      <div className="flex-[0.5] text-center">
        <img
          className="w-[400px] mt-[50px]"
          src="https://i.imgur.com/P3Vm1Kq.png"
          alt=""
        />
      </div>
      <div className="flex-[0.5]">
        {active == "login" ? <Login /> : <Signup />}
        <div className="border border-gray-500 p-[20px] mr-[30px] ml-[30px] text-center mt-[15px]">
          <span className="font-medium text-sm">
            {active === "login" ? (
              <>
                Don't have an account?
                <button
                  onClick={handleChange}
                  className="bg-0 text-blue-500 font-black border-0 hover:cursor-pointer"
                >
                  Sign Up
                </button>
              </>
            ) : (
              <>
                Have an account?
                <button
                  onClick={handleChange}
                  className="bg-0 text-blue-500 font-black border-0 hover:cursor-pointer"
                >
                  Log in
                </button>
              </>
            )}
          </span>
        </div>
      </div>
    </div>
  );
}

export default Authentication;
