import { useEffect, useState, useRef } from 'react';
import { pure } from 'recompose';
import bb, { bar, line, scatter, pie, area, bubble, step } from 'billboard.js';
import Theme from '@utils/Theme';
import { CommonUtils } from '@utils/Common';
import cn from 'classnames';

const getBillBoardType = (type) => {
    if (type === 'line') {
        return line();
    } else if (type === 'bar') {
        return bar();
    } else if (type === 'scatter') {
        return scatter();
    } else if (type === 'pie') {
        return pie();
    } else if (type === 'area') {
        return area();
    } else if (type === 'bubble') {
        return bubble();
    } else if (type === 'step') {
        return step();
    }
};

const BillBoard = (props) => {
    const theme = Theme.getStyle('popup');
    const { source = {}, onClose, togglePause, stop, isIframe, title, description } = props;
    const { data, options, targets, load } = source;
    const chartRef = useRef(null);
    const [isPaused, setPause] = useState(false);

    const el = document.getElementsByTagName('body');
    const wsPath = window.location.pathname.indexOf('/ws');
    if (wsPath === -1) {
        el[0].style.overflow = 'hidden';
    }
    const closeAction = () => {
        if (wsPath === -1 && el[0] && el[0].style && el[0].style.overflow === 'hidden') {
            el[0].removeAttribute('style');
        }

        onClose();
    };

    useEffect(() => {
        if (!data.url && !data.json && !data.rows && !data.columns) {
            return;
        }
        drawChart();
    }, [data, options, targets]);
    const newTableData = {
        ...data,
    };
    if (data.type) {
        newTableData.type = data.type;
        // newTableData.type = getBillBoardType(data.type);
    }
    if (data.types) {
        Object.keys(data.types).forEach((key) => {
            newTableData.types[key] = data.types[key];
            // newTableData.types[key] = getBillBoardType(data.types[key]);
        });
    }

    const drawChart = () => {
        try {
            const chart = bb.generate({
                data: newTableData,
                ...options,
                bindto: chartRef.current,
            });
            if (load) {
                chart.load(load);
            }
        } catch (e) {
            console.log('load chart error', e);
        }
    };

    return (
        <div className={theme.dimmed}>
            <div className={isIframe ? theme.center_chart : theme.center}>
                <div className={theme.modal}>
                    <div className={theme.head}>
                        <div className={theme.text}>{title}</div>
                        <div
                            className={theme.close}
                            id="chart_btn"
                            onClick={() => {
                                closeAction();
                            }}
                        />
                    </div>
                    <div className={theme.body}>
                        <div
                            className={cn(theme.content, theme.billboard)}
                            style={{ minHeight: '300px' }}
                        >
                            <div
                                className={theme.description}
                                dangerouslySetInnerHTML={{ __html: description }}
                            />
                            <div className={theme.graph_box} ref={chartRef} />
                        </div>
                    </div>
                    <div className={theme.footer}>
                        <div className={theme.content}>
                            <div
                                className={cn(theme.chart_button, theme.stop)}
                                onClick={() => {
                                    stop();
                                    closeAction();
                                }}
                            >
                                {CommonUtils.getLang('DataAnalytics.stop')}
                            </div>
                            <div
                                className={cn(
                                    theme.chart_button,
                                    { [theme.pause]: !isPaused },
                                    { [theme.start]: isPaused }
                                )}
                                onClick={() => {
                                    setPause(!isPaused);
                                    togglePause();
                                }}
                            >
                                {CommonUtils.getLang(
                                    isPaused ? 'DataAnalytics.restart' : 'DataAnalytics.pause'
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default pure(BillBoard);
