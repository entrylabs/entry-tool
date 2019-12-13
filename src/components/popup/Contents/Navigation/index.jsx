import React from 'react';
import { CommonUtils } from '@utils/Common';
import Theme from '@utils/Theme';
import SearchBox from './SearchBox';
import classname from 'classnames';
import { connect } from 'react-redux';
import { toggleVector } from '@actions/popup';

const preventDefault = (e) => e.preventDefault();
const Index = (props) => {
    const { onClicked, navigations = {}, searchOption, projectNavOptions, isDrawVector } = props;
    const { selected, isVectorOnly, toggleVector } = props;
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
                            <a href="#NULL" onClick={preventDefault}>
                                {CommonUtils.getLang(navigations[item].name)}
                            </a>
                        </li>
                    );
                })}
            </ul>
            {searchOption && <SearchBox searchOption={searchOption} options={projectNavOptions} />}
            {isDrawVector && (
                <div
                    className={classname(theme.vector, { [theme.on]: isVectorOnly })}
                    onClick={toggleVector}
                >
                    <span>{CommonUtils.getLang('Buttons.show_only_vector')}</span>
                </div>
            )}
        </div>
    );
};

const mapStateToProps = (state) => ({
    isVectorOnly: state.popupReducer.isVectorOnly,
});

const mapDispatchToProps = (dispatch) => ({
    toggleVector: () => dispatch(toggleVector()),
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Index);
