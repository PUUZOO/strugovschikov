import {TOGGLE_LANGUAGE} from '../actionTypes';

export const toggleLanguages = (statusLanguage) => ({
    type: TOGGLE_LANGUAGE,
    text: 'Toggle localization this project',
    statusLanguage,
})
