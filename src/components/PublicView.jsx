import React from "react";

import Menu from "./initial/Menu";
import Home from "./initial/home";
import Register from "./authentication/Register";
import { Route, Routes } from "react-router-dom";
import Login from "./authentication/Login";

const PublicView = () => {
  return (
    <>
      <Menu />
      <Routes>
        <Route path="/*" element={<Home />} />
        <Route path="login/*" element={<Login />} />
        <Route path="register/*" element={<Register />} />
        {/* <Route exact path="/testinstruction" element={<TestIntro />} /> */}
      </Routes>
    </>
  );
};

export default PublicView;
