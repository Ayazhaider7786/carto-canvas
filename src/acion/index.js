export const addMarker = (lat, lng, name, description) => {
  return {
    type: "ADD_MARKER",
    payload: { lat, lng, name, description },
  };
};

export const isDropMarkerAllow = (isMarkerAllow) => {
  return {
    type: "ALLOW_DROP_MARKERS",
    payload: { isMarkerAllow },
  };
};

export const clearMarkerArray = () => {
  return {
    type: "CLEAR_MARKERS",
  };
};

export const clearMarkerBtnClicked = (btnClearMarker) => {
  return {
    type: "BTN_CLEAR_MARKERS",
    payload: { btnClearMarker },
  };
};
