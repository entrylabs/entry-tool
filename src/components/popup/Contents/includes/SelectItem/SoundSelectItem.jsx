import React, { useCallback } from 'react';
import { CommonUtils } from '@utils/Common';
import { connect } from 'react-redux';
import { triggerEvent } from '@actions/index';
import { EMIT_TYPES as Types } from '@constants';
import { playSound, stopSound } from '@actions/sound';

const SoundSelectItem = ({ theme, item, play, stop, playable, isPlaying, setPlaying }) => {
    const { name } = CommonUtils.getImageSummary(item);
    const handleClick = useCallback(
        (e) => {
            if (!playable) {
                return;
            }

            e.stopPropagation();

            const { id } = item;
            if (isPlaying) {
                stop({ id, setPlaying: (status) => setPlaying({ id, status }) });
            } else {
                play({ id, setPlaying: (status) => setPlaying({ id, status }) });
            }
        },
        [isPlaying]
    );

    return (
        <>
            <div className={theme.thmb}>
                <div
                    className={CommonUtils.toggleClass(
                        playable && isPlaying,
                        theme.type_sound,
                        theme.type_play
                    )}
                    onClick={handleClick}
                    style={{ zIndex: 11 }}
                >
                    {playable && isPlaying ? (
                        <div className={theme.bar}>
                            <span />
                            <span />
                            <span />
                            <span />
                        </div>
                    ) : (
                        <span className={theme.play} />
                    )}
                </div>
            </div>
            <em className={theme.sjt}>{name}</em>
        </>
    );
};

const mapStateToProps = (state, props) => ({
    isPlaying: state.soundReducer.playIdMap[props.item.id],
});

const mapDispatchToProps = (dispatch) => ({
    play: ({ id, setPlaying }) => dispatch(triggerEvent(Types.play, { id, setPlaying }, false)),
    stop: ({ id, setPlaying }) => dispatch(triggerEvent(Types.stop, { id, setPlaying }, false)),
    setPlaying: ({ id, status }) => {
        if (status) {
            dispatch(playSound(id));
        } else {
            dispatch(stopSound(id));
        }
    },
});

export default connect(mapStateToProps, mapDispatchToProps)(SoundSelectItem);
