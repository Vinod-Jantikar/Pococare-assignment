import React from "react";
import { Route, Routes } from "react-router-dom";
import Register from "./components/register/Register";
import Login from "./components/login/Login";
import About from "./pages/About";

const Routers = () => {
  return (
    <Routes>
      <Route path="/register" element={<Register />} />
      <Route path="/login" element={<Login />} />
      <Route path="/about" element={<About />} />
    </Routes>
  );
};

export default Routers;
