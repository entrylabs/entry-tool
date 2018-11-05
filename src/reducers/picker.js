const initState = {
    color: '#ff0000',
};
export default (state = initState, action) => {
    switch (action.type) {
        case 'COLOR_PICK':
            return Object.assign({}, { ...state, color: action.data });
        default:
            return state;
    }
};
