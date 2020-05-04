import {TOGGLE_LIGHT} from '../actionTypes'; 

export const toggleLight = (status) => ({
    type: TOGGLE_LIGHT,
    status
})