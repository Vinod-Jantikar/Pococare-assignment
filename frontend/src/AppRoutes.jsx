import React from "react";
import { Route, Routes } from "react-router-dom";
import Login from "./components/login/Login";
import About from "./pages/About";
import AppWrapper from "./AppWrapper";
import Register from "./components/register/Register";
import Contact from "./pages/Contact";
import Notes from "./pages/Notes";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<AppWrapper />}>
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/notes" element={<Notes />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
      </Route>
    </Routes>
  );
};

export default AppRoutes;
