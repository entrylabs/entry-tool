import { CommonUtils } from '@utils/Common';
import Theme from '@utils/Theme';
import SearchBox from './SearchBox';
import classname from 'classnames';

const preventDefault = (e) => e.preventDefault();
const Index = (props) => {
    const { onClicked, navigations = {}, searchOption, projectNavOptions, selected } = props;
    const theme = Theme.getStyle('popup');
    return (
        <div className={theme.section_navi}>
            <ul className={theme.list}>
                {Object.keys(navigations).map((item, index) => {
                    const isSelected = selected === item || (!selected && index === 0);
                    return (
                        <li
                            key={item}
                            className={classname({ [theme.on]: isSelected })}
                            onClick={() => {
                                onClicked && onClicked(item);
                            }}
                        >
                            <a onClick={preventDefault}>
                                {CommonUtils.getLang(navigations[item].name)}
                            </a>
                        </li>
                    );
                })}
            </ul>
            {searchOption && (
                <SearchBox
                    searchOption={searchOption}
                    projectNavOptions={projectNavOptions}
                    type={selected}
                />
            )}
        </div>
    );
};

export default Index;
