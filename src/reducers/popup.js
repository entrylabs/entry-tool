export default (state = {}, action) => {
    switch (action.type) {
        case 'CLOSE':
            return {
                result: action.payload,
            };
        default:
            return state;
    }
};
