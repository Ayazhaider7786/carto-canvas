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
};

export default function addMarker(state = initialState, action) {
  switch (action.type) {
    case "ADD_MARKER":
      return {
        ...state,
        // below code is to add new vlaues like making array of markers
        // markers: [...state.markers, action.payload],
        // below code is the over ride lat and lng values
        markers: [
          {
            lat: action.payload.lat,
            lng: action.payload.lng,
            name: action.payload.name,
            description: action.payload.description,
          },
          ...state.markers.slice(1),
        ],
      };
    default:
      return state;
  }
}
