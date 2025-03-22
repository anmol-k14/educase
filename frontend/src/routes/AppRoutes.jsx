import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Welcome from "../screens/Welcome";
import CreateAccount from "../screens/CreateAccount";
import SignIn from "../screens/SignIn";
import Settings from "../screens/Settings";

function AppRoutes() {
  return (
    <>
      <BrowserRouter>
        <Routes>
            <Route path="/" element={<Welcome/>} ></Route>
            <Route path="/register" element={<CreateAccount/>} ></Route>
            <Route path="/signin" element={<SignIn/>} ></Route>
            <Route path="/settings" element={<Settings/>} ></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default AppRoutes;
