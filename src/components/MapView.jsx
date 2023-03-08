import React from "react";
import SidebarMenu from "./map/SidebarMenu";
import Map from "./map/Map";

const MapView = () => {
  return (
    <div className="AppContainer">
      <div className="App">
        <div className="sidebar-maps">
          <SidebarMenu />
        </div>
        <div className="map-div">
          <Map />
        </div>
      </div>
    </div>
  );
};

export default MapView;
