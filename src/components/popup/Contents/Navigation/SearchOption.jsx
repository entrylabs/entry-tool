import React, { useState } from 'react';
import Theme from '@utils/Theme';
import Dropdown from '@components/widget/dropdown';
import classname from 'classnames';

export default ({ options, onSelect, setDropdown, isOpenDefault }) => {
    const theme = Theme.getStyle('popup');
    const [isOpen, setOpenStatus] = useState(false);
    const [selected, select] = useState(options[0]);
    const dropdownClass = classname(
        theme.select_link,
        { [theme.imico_pop_select_arr_down]: !isOpen },
        { [theme.imico_pop_select_arr_up]: isOpen },
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
                onOutsideClick={closeDropDown}
                onSelectDropdown={async (value) => {
                    select(value);
                    onSelect && onSelect(value);
                    closeDropDown();
                }}
            />
        );
    };
    return (
        <>
            <div className={theme.pop_selectbox} onClick={openDropDown}>
                <div className={dropdownClass}>{selected[0]}</div>
            </div>
        </>
    );
};
