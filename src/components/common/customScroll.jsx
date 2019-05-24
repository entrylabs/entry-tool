import React, { useState, useEffect, forwardRef } from 'react';
import _debounce from 'lodash/debounce';
import EntryEvent from '@entrylabs/event';
import Styles from '@assets/entry/scss/customScroll.scss';

function getScaleNumber(num, inMin, inMax, outMin, outMax) {
    return ((num - inMin) * (outMax - outMin)) / (inMax - inMin) + outMin;
}

const PADDING_HEIGHT = 8;
const MIN_HEIGHT = 40;

const CustomScroll = (props, ref) => {
    const { children, onScroll, style } = props;
    const [top, setTop] = useState(0);
    const [isScrolling, setScrolling] = useState(0);
    const [scrollTimeout, setTimeoutId] = useState(0);
    const [height, setHeight] = useState(0);
    const [indicatorShow, setIndicatorShow] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [customScroll, setCustomScroll] = useState(null);

    const setThrottleShow = _debounce(
        () => {
            setIndicatorShow(true);
        },
        500,
        {
            leading: true,
            trailing: false,
        }
    );
    const setDebounceHide = _debounce(() => {
        setIndicatorShow(false);
    }, 500);

    useEffect(() => {
        if (top) {
            setThrottleShow();
            setDebounceHide();
        } else {
            setDebounceHide();
        }
    }, [top]);

    useEffect(() => {
        const { onScrollState } = props;
        if (isScrolling !== 0 && onScrollState) {
            onScrollState(isScrolling);
        }
    }, [isScrolling]);

    useEffect(() => {
        if (customScroll) {
            const scroll = new EntryEvent(customScroll);

            let lastY = 0;
            scroll.on('touchstart.customScroll', (event) => {
                lastY = event.touches[0].clientY;
            });
            scroll.on('touchmove.customScroll', (event) => {
                const top = event.touches[0].clientY;

                const scrollTop = customScroll.scrollTop;
                const direction = lastY - top < 0 ? 'up' : 'down';

                // FIX IT!
                if (scrollTop == 0 && direction == 'up') {
                    event.preventDefault();
                } else if (
                    scrollTop >= customScroll.scrollHeight - customScroll.clientHeight &&
                    direction == 'down'
                ) {
                    event.preventDefault();
                }

                lastY = top;
            });

            return () => {
                scroll.off('customScroll');
            };
        }
    }, [customScroll]);

    let indicatorClassName = Styles.indicator;
    if (scrolled) {
        indicatorClassName = `${Styles.indicator} ${indicatorShow ? Styles.show : Styles.hide}`;
    }
    return (
        <div className={Styles.customScrollWrapper}>
            <div
                className={Styles.customScroll}
                style={style}
                ref={(dom) => {
                    if (dom) {
                        if (dom !== customScroll) {
                            setCustomScroll(dom);
                        }
                        if (ref && ref instanceof Function) {
                            ref(dom);
                        }
                        const { clientHeight, scrollHeight } = dom;
                        const newHeight = Math.max(
                            Math.round((clientHeight / scrollHeight) * clientHeight),
                            MIN_HEIGHT
                        );
                        if (!isNaN(newHeight) && height !== newHeight) {
                            setHeight(newHeight);
                        }
                    }
                }}
                onScroll={(e) => {
                    if (!isScrolling) {
                        setScrolling(true);
                    }
                    clearTimeout(scrollTimeout);
                    setTimeoutId(
                        setTimeout(() => {
                            setScrolling(false);
                        }, 500)
                    );
                    const { target } = e;
                    const { clientHeight, scrollHeight, scrollTop } = target;
                    const scrollSize = scrollHeight - clientHeight;
                    setTop(
                        getScaleNumber(
                            scrollTop,
                            0,
                            scrollSize,
                            0,
                            clientHeight - height - PADDING_HEIGHT
                        )
                    );
                    setScrolled(true);
                    if (onScroll) {
                        onScroll(e);
                    }
                }}
            >
                {children}
            </div>
            <div
                className={indicatorClassName}
                style={{
                    height,
                    transform: `translate3d(0, ${top + PADDING_HEIGHT / 2}px, 0)`,
                }}
            />
        </div>
    );
};

export default forwardRef(CustomScroll);
