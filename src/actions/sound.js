export const PLAY_SOUND = 'PLAY_SOUND';
export const STOP_SOUND = 'STOP_SOUND';
export const STOP_ALL_SOUNDS = 'STOP_ALL_SOUNDS';

export const playSound = (id, instance) => (dispatch) => {
    dispatch({ type: PLAY_SOUND, data: { id, instance } });
};

export const stopSound = (id) => (dispatch) => {
    dispatch({ type: STOP_SOUND, data: { id } });
};

export const stopAllSounds = () => (dispatch) => {
    dispatch({ type: STOP_ALL_SOUNDS });
};
