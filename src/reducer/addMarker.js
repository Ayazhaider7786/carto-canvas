// initial state
const initialState = {
  markers: [
    {
      lat: undefined,
      lng: undefined,
      name: undefined,
      description: undefined,
    },
  ],
  markerArray: [],
  isMarkerAllow: false,
  btnClearMarker: false,
};

export default function addMarker(state = initialState, action) {
  switch (action.type) {
    case "ADD_MARKER":
      const newMarker = {
        lat: action.payload.lat,
        lng: action.payload.lng,
        name: action.payload.name,
        description: action.payload.description,
      };
      return {
        ...state,
        markers: [newMarker, ...state.markers.slice(1)],
        markerArray: [...state.markerArray, newMarker],
      };
    case "CLEAR_MARKERS":
      return {
        ...state,
        markerArray: [],
      };
    case "ALLOW_DROP_MARKERS":
      return {
        ...state,
        isMarkerAllow: action.payload.isMarkerAllow,
      };
    case "BTN_CLEAR_MARKERS":
      return {
        ...state,
        btnClearMarker: action.payload.btnClearMarker,
      };
    default:
      return state;
  }
}
