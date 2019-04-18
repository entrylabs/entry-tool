import React, { useState, useEffect, forwardRef } from 'react';
import _debounce from 'lodash/debounce';
import Styles from '../../assets/scss/customScroll.scss';

function getScaleNumber(num, inMin, inMax, outMin, outMax) {
    return ((num - inMin) * (outMax - outMin)) / (inMax - inMin) + outMin;
}

const PADDING_HEIGHT = 8;
const MIN_HEIGHT = 40;

const CustomScroll = (props, ref) => {
    const { children, onScroll, style } = props;
    const [top, setTop] = useState(0);
    const [height, setHeight] = useState(0);
    const [indicatorShow, setIndicatorShow] = useState(false);
    const [scrolled, setScrolled] = useState(false);

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

    let indicatorClassName = Styles.indicator;
    if (scrolled) {
        indicatorClassName = `${Styles.indicator} ${indicatorShow ? Styles.show : Styles.hide}`;
    }
    return (
        <>
            <div
                className={Styles.customScroll}
                style={style}
                ref={(dom) => {
                    if (dom) {
                        if (ref && ref instanceof Function) {
                            ref(dom);
                        }
                        const { clientHeight, scrollHeight } = dom;
                        const height = Math.max(
                            Math.round((clientHeight / scrollHeight) * clientHeight),
                            MIN_HEIGHT
                        );
                        if (!isNaN(height)) {
                            setHeight(height);
                        }
                    }
                }}
                onScroll={(e) => {
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
                style={{ height, transform: `translate3d(0, ${top + PADDING_HEIGHT / 2}px, 0)` }}
            />
        </>
    );
};

export default forwardRef(CustomScroll);
