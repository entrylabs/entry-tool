import { useCallback } from 'react';
import { CommonUtils } from '@utils/Common';
import { connect } from 'react-redux';
import { triggerEvent } from '@actions/index';
import { EMIT_TYPES as Types } from '@constants';
import { playSound, stopSound } from '@actions/sound';

const SoundSelectItem = ({ theme, item, play, stop, playable, playInfo, setPlaying }) => {
    const { name } = CommonUtils.getImageSummary(item);
    const { instance: prevInstance, playing } = playInfo;
    const handleClick = useCallback(
        (e) => {
            if (!playable) {
                return;
            }

            e.stopPropagation();

            const { id } = item;
            if (!playing) {
                play({
                    callback: ({ instance, status }) => setPlaying({ id, instance, status }),
                    ...item,
                });
            } else {
                stop({
                    instance: prevInstance,
                    callback: ({ status }) => setPlaying({ id, status }),
                    ...item,
                });
            }
        },
        [playing]
    );

    return (
        <>
            <div className={theme.thmb}>
                <div
                    className={CommonUtils.toggleClass(
                        playable && playing,
                        theme.type_sound,
                        theme.type_play
                    )}
                    onClick={handleClick}
                    style={{ zIndex: 11 }}
                >
                    {playable && playing ? (
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
    playInfo: state.soundReducer.playIdMap[props.item.id] || {},
});

const mapDispatchToProps = (dispatch) => ({
    play: ({ id, callback, filename, path }) =>
        dispatch(triggerEvent(Types.play, { id, callback, filename, path }, false)),
    stop: ({ id, instance, callback, filename, path }) =>
        dispatch(triggerEvent(Types.stop, { id, instance, callback, filename, path }, false)),
    setPlaying: ({ id, instance, status }) => {
        if (status) {
            dispatch(playSound(id, instance));
        } else {
            dispatch(stopSound(id));
        }
    },
});

export default connect(mapStateToProps, mapDispatchToProps)(SoundSelectItem);
