import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { isDropMarkerAllow } from "../../../acion/index";
import { clearMarkerBtnClicked } from "../../../acion/index";

const MarkerMenu = ({
  lat,
  lng,
  markerName,
  markerDescription,
  handleLatChange,
  handleLngChange,
  handleNamechange,
  handleDescritpionChange,
  handleLagLngChanges,
}) => {
  const dispatch = useDispatch();
  const [btnColor, setBtnColor] = useState("btn-primary"); // btn-primary
  const [deleteMarkerButtonText, setDeleteMarkerButtonText] =
    useState("Enable Drop Marker");

  function changeButtonColor(e) {
    e.preventDefault();
    if (btnColor === "btn-primary") {
      setBtnColor("btn-danger");
      setDeleteMarkerButtonText("Disable Drop Marker");
      dispatch(isDropMarkerAllow(true));
    } else {
      setBtnColor("btn-primary");
      setDeleteMarkerButtonText("Enable Drop Marker");
      dispatch(isDropMarkerAllow(false));
    }
  }

  function handleBtnClickedClearMarkerArray(e) {
    e.preventDefault();
    dispatch(clearMarkerBtnClicked(true));
  }

  return (
    <>
      <h5>Add Markers</h5>
      <form>
        <div className="form-group">
          <label>Latitude </label>
          <input
            type="number"
            className="form-control"
            value={lat}
            onChange={handleLatChange}
          />
        </div>
        <div className="form-group">
          <label>Longitude</label>
          <input
            type="number"
            className="form-control"
            value={lng}
            onChange={handleLngChange}
          />
        </div>
        <div className="form-group">
          <label>Marker Name</label>
          <input
            type="text"
            className="form-control"
            value={markerName}
            onChange={handleNamechange}
          />
        </div>
        <div className="form-group">
          <label>Description</label>
          <textarea
            className="form-control"
            maxLength="90"
            rows="3"
            value={markerDescription}
            onChange={handleDescritpionChange}
          ></textarea>
        </div>

        <div className="mt-2 overflow-auto">
          <div className="float-left">
            <button
              className="btn btn-danger"
              onClick={handleBtnClickedClearMarkerArray}
            >
              Clear All
            </button>
          </div>

          <div className="float-right">
            <button className="btn btn-success" onClick={handleLagLngChanges}>
              Add
            </button>
          </div>
        </div>

        <div className="overflow-auto mt-3">
          <button className={`btn ${btnColor}`} onClick={changeButtonColor}>
            {deleteMarkerButtonText}
          </button>
        </div>
      </form>
    </>
  );
};
export default MarkerMenu;
