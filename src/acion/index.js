// action creators
// export const addMarker = (lat, lng, name, description) => {
//   return {
//     type: "ADD_MARKER",
//     payload: { lat, lng, name, description },
//   };
// };

export const addMarker = (lat, lng, name, description) => {
  return {
    type: "ADD_MARKER",
    payload: { lat, lng, name, description },
  };
};
