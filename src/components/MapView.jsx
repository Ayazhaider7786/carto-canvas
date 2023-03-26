import React from "react";
import SidebarMenu from "./map/SidebarMenu";
import Map from "./map/Map";
import MyAppBar from "./map/MyAppBar";

const MapView = () => {
  return (
    <div className="AppContainer">
      {/* <div className="markerAppBar p-1">
        <MyAppBar />
      </div> */}
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
