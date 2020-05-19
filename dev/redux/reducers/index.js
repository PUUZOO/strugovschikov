import { combineReducers } from 'redux'
import toggleTheme from './toggleTheme';
import toggleLanguages from './toggleLanguages';

export const reducers = combineReducers({
    toggleTheme,
    toggleLanguages,
})

