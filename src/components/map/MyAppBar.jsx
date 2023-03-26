import { Button } from "bootstrap";
import React, { useState } from "react";
import "../../App.css";
const MyAppBar = () => {
  const [selectedOption, setSelectedOption] = useState("");
  return (
    <>
      <div className="MyAppContainer">
        <div className="verticalSelect">
          <select
            defaultValue=""
            className="form-control "
            onChange={(e) => setSelectedOption(e.target.value)}
          >
            <option value="" disabled>
              -- select an option --
            </option>
            <option value="addMarker">Add Marker</option>
            <option value="drawCircle">Draw Circle</option>
            <option value="drawPolygon">Draw Polygon</option>
          </select>
        </div>
        <div>
          {selectedOption === "addMarker" && (
            <div className="markerOptions">
              <button className="btn btn-primary mr-2">Draw Marker</button>
              <button className="btn btn-danger mr-2">Allow Drop Marker</button>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default MyAppBar;
