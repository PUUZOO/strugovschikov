export const toggleLight = (state = '', action) => {
    return action.type === 'TOGGLE_LIGHT' ? ((action.status) ? false : true) : state
} 