import React, { useState } from 'react';
import Theme from '@utils/Theme';
import Dropdown from '@components/widget/dropdown';
import classname from 'classnames';
import { CommonUtils } from '@utils/Common';

export default ({ options = [], onSelect, setDropdown, isOpenDefault, staticName }) => {
    const theme = Theme.getStyle('popup');
    const [isOpen, setOpenStatus] = useState(false);
    const [selected, select] = useState(options && options[0]);
    const dropdownClass = classname(
        theme.select_link,
        { [theme.imico_pop_select_arr_down]: !isOpen },
        { [theme.imico_pop_select_arr_up]: isOpen }
    );

    const closeDropDown = () => {
        setOpenStatus(false);
        setDropdown(null);
    };
    const openDropDown = async (e) => {
        e.preventDefault();
        setOpenStatus(true);
        if (isOpenDefault) {
            setDropdown(null);
            return;
        }
        setDropdown(
            <Dropdown
                items={options}
                positionDom={e.target}
                outsideExcludeDom={[e.target]}
                autoWidth={400}
                onOutsideClick={closeDropDown}
                onSelectDropdown={async (value) => {
                    select(value);
                    onSelect && onSelect(value);
                    closeDropDown();
                }}
            />
        );
    };
    const text = staticName || (selected && selected[0]) || CommonUtils.getLang('Blocks.no_target');
    return (
        <>
            <div className={theme.pop_selectbox} onClick={openDropDown}>
                <div className={dropdownClass}>
                    <div className={theme.text}>{text}</div>
                </div>
            </div>
        </>
    );
};
