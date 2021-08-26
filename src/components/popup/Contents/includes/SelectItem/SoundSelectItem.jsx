import React, { useCallback, useState } from 'react';
import { CommonUtils } from '@utils/Common';
import { connect } from 'react-redux';
import { triggerEvent } from '@actions/index';
import { EMIT_TYPES as Types } from '@constants';

const SoundSelectItem = ({ theme, item, play, stop, playable }) => {
    const [playing, setPlaying] = useState(false);
    const { name } = CommonUtils.getImageSummary(item);
    const handleClick = useCallback(
        (e) => {
            if (!playable) {
                return;
            }

            e.stopPropagation();

            if (playing) {
                stop({ id: item.id, setPlaying: (status) => setPlaying(status) });
            } else {
                play({ id: item.id, setPlaying: (status) => setPlaying(status) });
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

const mapDispatchToProps = (dispatch) => ({
    play: ({ id, setPlaying }) => dispatch(triggerEvent(Types.play, { id, setPlaying }, false)),
    stop: ({ id, setPlaying }) => dispatch(triggerEvent(Types.stop, { id, setPlaying }, false)),
});

export default connect(null, mapDispatchToProps)(SoundSelectItem);
