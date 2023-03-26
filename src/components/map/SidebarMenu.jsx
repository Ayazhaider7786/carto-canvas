// backup code

import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addMarker } from "../../acion/index";
import MarkerMenu from "./sidebarItems/MarkerMenu";

const SidebarMenu = () => {
  const dispatch = useDispatch();

  const [selectedOption, setSelectedOption] = useState("");
  const [lat, setLat] = useState(0);
  const [lng, setLng] = useState(0);
  const [markerName, setMarkerName] = useState(0);
  const [markerDescription, setMarkerDescription] = useState(0);

  const handleLatChange = (event) => {
    setLat(event.target.value);
  };

  const handleLngChange = (event) => {
    setLng(event.target.value);
  };

  const handleNamechange = (event) => {
    setMarkerName(event.target.value);
  };
  const handleDescritpionChange = (event) => {
    setMarkerDescription(event.target.value);
  };

  const handleLagLngChanges = (event) => {
    event.preventDefault();
    dispatch(addMarker(lat, lng, markerName, markerDescription));
  };
  return (
    <>
      {/* select box  */}
      {/* <h5>
        <label className="form-label">Add Items</label>
      </h5> */}

      <select
        defaultValue=""
        className="form-control"
        onChange={(e) => setSelectedOption(e.target.value)}
      >
        <option value="" disabled>
          -- select an option --
        </option>
        <option value="addMarker">Add Marker</option>
        <option value="drawCircle">Draw Circle</option>
        <option value="drawPolygon">Draw Polygon</option>
      </select>
      {/* Draw Marker  */}
      {selectedOption === "addMarker" && (
        <div className="addMarkerContainer">
          <MarkerMenu
            lat={lat}
            lng={lng}
            markerName={markerName}
            markerDescription={markerDescription}
            handleLatChange={handleLatChange}
            handleLngChange={handleLngChange}
            handleNamechange={handleNamechange}
            handleDescritpionChange={handleDescritpionChange}
            handleLagLngChanges={handleLagLngChanges}
          />
        </div>
      )}
      {/* Draw Cricle  */}
      {selectedOption === "drawCircle" && (
        <div className="addMarkerContainer">
          <h5>Draw Circle</h5>
          <form>
            <div className="form-group">
              <label>Latitude </label>
              <input type="number" className="form-control" />
            </div>
            <div className="form-group">
              <label>Longitude</label>
              <input type="number" className="form-control" />
            </div>
            <div className="form-group">
              <label>Radius</label>
              <input type="number" className="form-control" />
            </div>
            <div className="form-group">
              <label>Name</label>
              <input type="text" className="form-control" />
            </div>
            <div className="form-group">
              <label>Description</label>
              <textarea
                className="form-control"
                maxlength="90"
                rows="3"
              ></textarea>
            </div>
            <button className="btn btn-success mt-2 justify-content-end">
              Add
            </button>
          </form>
        </div>
      )}
    </>
  );
};

export default SidebarMenu;
