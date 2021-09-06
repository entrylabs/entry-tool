import { PLAY_SOUND, STOP_ALL_SOUNDS, STOP_SOUND } from '@actions/sound';

const INITIAL_STATE = {
    playIdMap: {},
};

export default function soundReducer(state = INITIAL_STATE, action) {
    switch (action.type) {
        case PLAY_SOUND:
            return {
                ...state,
                playIdMap: {
                    ...state.playIdMap,
                    [action.data.id]: {
                        instance: action.data.instance,
                        playing: true,
                    },
                },
            };
        case STOP_SOUND:
            return {
                ...state,
                playIdMap: {
                    ...state.playIdMap,
                    [action.data.id]: {
                        instance: action.data.instance,
                        playing: false,
                    },
                },
            };
        case STOP_ALL_SOUNDS:
            return {
                ...state,
                playIdMap: {},
            };
        default:
            return state;
    }
}
