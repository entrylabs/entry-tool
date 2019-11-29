import React from 'react';
import Item from './Item';
import Foot from '../foot';
import { CommonUtils } from '@utils/Common';
import Theme from '@utils/Theme';
import classname from 'classnames';

export default (props) => {
    const theme = Theme.getStyle('popup');
    const { data = [], imageBaseUrl } = props;
    return (
        <>
            <section className={classname(theme.extend_content, theme.pop_content)}>
                <div className={theme.section_cont}>
                    <h2 className={theme.blind}>BIG ICON LIST</h2>
                    <div className={theme.cont_box}>
                        <div className={theme.desc}>
                            <div className={theme.imico_exclamation_mark} />
                            <div className={theme.content}>
                                {CommonUtils.getLang('template.expansion_block_descriptions')}
                            </div>
                        </div>
                        <div className={theme.extend_block}>
                            <ul className={theme.list}>
                                {data.map((item) => (
                                    <Item key={item.name} item={item} imageBaseUrl={imageBaseUrl} />
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
            <Foot />
        </>
    );
};
