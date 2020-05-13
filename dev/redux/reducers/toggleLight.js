const initialState = {
  statusColorTheme: true,
}

const toggleLight = (state = initialState, action) => {
  switch (action.type){
    case 'TOGGLE_COLOR_THEME': 
      return { ...state, statusColorTheme: !state.statusColorTheme };
    default:
      return state;
  }
}

export default toggleLight;