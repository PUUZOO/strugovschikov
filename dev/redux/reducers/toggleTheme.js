import { TOGGLE_COLOR_THEME } from '../actionTypes';

const initialState = {
  statusColorTheme: 'light',
}

const toggleTheme = (state = initialState, action) => {
  switch (action.type){
    case TOGGLE_COLOR_THEME: 
      return { 
        ...state, 
        statusColorTheme: action.statusColorTheme,
      }
    default:
      return state;
  }
}

export default toggleTheme;