import Theme from '@utils/Theme';
import { CommonUtils } from '@utils/Common';

const EmptyContents = () => {
    const theme = Theme.getStyle('popup');
    return (
        <div className={theme.chart_box}>
            <div className={theme.inner}>
                <div className={theme.chart_no_result}>
                    <p className={theme.dsc}>
                        {CommonUtils.getLang('DataAnalytics.please_add_table')}
                    </p>
                </div>
            </div>
        </div>
    );
};

export default EmptyContents;
