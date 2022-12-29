import { CHART_CATEGORY, CHART_CATEGORY_SUB } from '@constants/dataAnalytics';
import { CommonUtils } from '@utils/Common';
import Theme from '@utils/Theme';
import cx from 'classnames';

const SelectChartDropdown = (props) => {
    const theme = Theme.getStyle('popup');
    const { onClick = () => {} } = props;

    const handleAClick = (event) => {
        event.preventDefault();
    };

    return (
        <div className={theme.tooltip_graph_box} style={{ display: 'block' }}>
            <ul className={theme.graph_list}>
                {CHART_CATEGORY.map((item, index) => (
                    <li key={`chart_list_${index}`} className={theme[item]} onClick={onClick(item)}>
                        <a onClick={handleAClick} role="button">
                            {CommonUtils.getLang(`DataAnalytics.${item}`)}
                            <span className={cx({ [theme.blind]: !CHART_CATEGORY_SUB[index] })}>
                                {CommonUtils.getLang(`DataAnalytics.${CHART_CATEGORY_SUB[index]}`)}
                            </span>
                        </a>
                    </li>
                ))}
            </ul>
            <span className={`${theme.arr}`}>
                <i />
            </span>
        </div>
    );
};

export default SelectChartDropdown;
