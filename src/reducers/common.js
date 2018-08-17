const initState = {
    visible: true,
};
export default (state = initState, action) => {
    switch (action.type) {
        case 'VISIBLE':
            return Object.assign({}, { ...state, visible: action.data });
        default:
            return state;
    }
};
