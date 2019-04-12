export const SELECT_DROPDOWN = 'SELECT_DROPDOWN';
export const CHANGED_ANGLE = 'CHANGED_ANGLE';
export const CHANGE_SORTABLE_LIST = 'CHANGE_SORTABLE_LIST';
export const CHANGE_DRAG_TYPE = 'CHANGE_DRAG_TYPE';
export const CHANGE_DRAGGING = 'CHANGE_DRAGGING';
export const CHANGE_DRAG_DATA = 'CHANGE_DRAG_DATA';

export const onSelectDropdown = (item) => (dispatch) => {
    dispatch({
        type: SELECT_DROPDOWN,
        data: item,
    });
};

export const onChangeAngle = (value) => (dispatch) => {
    dispatch({
        type: CHANGED_ANGLE,
        data: value,
    });
};

export const onChangeSortableList = (newIndex, oldIndex) => (dispatch) => {
    dispatch({
        type: CHANGE_SORTABLE_LIST,
        data: [newIndex, oldIndex],
    });
};

export const onChangeDragType = (type) => (dispatch) => {
    dispatch({
        type: CHANGE_DRAG_TYPE,
        data: type,
    });
};

export const onDragActionChange = (isDragging) => (dispatch) => {
    dispatch({
        type: CHANGE_DRAGGING,
        data: isDragging,
    });
};

export const onDragData = (data) => (dispatch) => {
    dispatch({
        type: CHANGE_DRAG_DATA,
        data,
    });
};
