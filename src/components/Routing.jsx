import React from "react";
import { Route, Routes } from "react-router-dom";
import PublicView from "./PublicView";
import MapView from "./MapView";

const Routing = () => {
  return (
    <>
      <Routes>
        <Route path="*" element={<PublicView />} />
        <Route path="/map" element={<MapView />} />
      </Routes>
    </>
  );
};
export default Routing;
