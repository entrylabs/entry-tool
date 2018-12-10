import { createSelector } from 'reselect';
// selector
const getSelected = (state) => state.popupReducer.selected;
// reselect function
export const makeFindSelectedByName = (name) => {
    return createSelector(
        [getSelected],
        (selected) => {
            return selected.findIndex((item) => item.name === name);
        }
    );
};

export const makeFindSelectedById = (id) => {
    return createSelector(
        [getSelected],
        (selected) => {
            return selected.findIndex((item) => item._id === id);
        }
    );
};
