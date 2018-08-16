const initState = {
    visibility: true,
};
export default (state = initState, action) => {
    switch (action.type) {
        case 'VISIBILITY':
            return Object.assign({}, { ...state, visibility: action.data });
        default:
            return state;
    }
};
