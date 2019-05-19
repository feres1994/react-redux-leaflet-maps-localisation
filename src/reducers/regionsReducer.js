const initialState = [
  { region: "tunisia", lat: 33.692352, lng: 8.762471 },
  { region: "canada", lat: 65.930794, lng: -99.49995 }
];

function regionReducer(state = initialState, action) {
  if (action.type === "ADD_REGION_LOCALISATION") {
    return [...state, action.payload];
  }
  return state;
}

export default regionReducer;
