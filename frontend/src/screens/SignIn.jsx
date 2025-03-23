import React from "react";
import InputField from "../components/InputField";
import Button from "../components/Button";

const SignIn = () => {
  return (
    <>
      <div className="h-[100vh] w-[100vw]  flex justify-center">
        <div className="flex flex-col h-full border border-gray-300 p-4 min-w-80 max-w-80 bg-[#F7F8F9]">
          <h1 className="text-2xl font-medium max-w-[60%] mt-4">
            Signin to your PopX account
          </h1>
          <p className='text-[rgba(29,34,38,0.6)] max-w-[80%]'>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>

          <div>
            <InputField title="Email address" />
            <InputField title="Password" />
          </div>

          <div className="mt-4">
            <Button name="Login" color="#CBCBCB" fontcolor="#FFFFFF" navigateTo="/settings" />
          </div>
        </div>
      </div>
    </>
  );
};

export default SignIn;
