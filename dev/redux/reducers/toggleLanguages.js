import {TOGGLE_LANGUAGE} from '../actionTypes';

const initialState = {
	statusLanguage: 'ru'
}

const toggleLanguages = (state = initialState, action) => {
	switch (action.type){
		case TOGGLE_LANGUAGE:
			return {
					...state,
					statusLanguage: action.statusLanguage
			};
		default:
			return state;
	}
}

export default toggleLanguages;
