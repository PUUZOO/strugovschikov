const initialState = {
  statusColorTheme: 'light',
}

const toggleLight = (state = initialState, action) => {
  switch (action.type){
    case 'TOGGLE_COLOR_THEME': 
      return { 
        ...state, 
        statusColorTheme: state.statusColorTheme == 'light' ? 'dark' : 'light' };
    default:
      return state;
  }
}

export default toggleLight;