import { TOGGLE_COLOR_THEME }  from '../actionTypes'; 

export const toogleTheme = (statusColorTheme) => ({
    type: TOGGLE_COLOR_THEME,
    text: 'Theme coloe variant(day or night)',
    statusColorTheme,
})