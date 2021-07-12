import React, { useEffect, useMemo } from 'react';
import Item from './Item';
import Foot from '../foot';
import { CommonUtils } from '@utils/Common';
import Theme from '@utils/Theme';
import classname from 'classnames';
import { applySelected } from '@actions/popup';
import { connect } from 'react-redux';

const Index = (props) => {
    const theme = Theme.getStyle('popup');
    const { data = [], imageBaseUrl, applySelected } = props;

    useEffect(() => {
        applySelected(data.filter((item) => item.active));
    }, []);

    const alertMsgKey = useMemo(() => {
        if (imageBaseUrl.includes('aiUtilize')) {
            return 'template.aiUtilize_block_descriptions';
        } else if (imageBaseUrl.includes('entry-js')) {
            return 'template.expansion_block_descriptions';
        } else {
            return 'template.hardware_lite_descriptions';
        }
    }, [imageBaseUrl]);

    return (
        <>
            <section className={classname(theme.extend_content, theme.pop_content)}>
                <div className={theme.section_cont}>
                    <h2 className={theme.blind}>BIG ICON LIST</h2>
                    <div className={theme.cont_box}>
                        <div className={theme.desc}>
                            <div className={theme.imico_exclamation_mark} />
                            <div className={theme.content}>{CommonUtils.getLang(alertMsgKey)}</div>
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

const mapDispatchToProps = (dispatch) => ({
    applySelected: (list) => dispatch(applySelected(list)),
});

export default connect(null, mapDispatchToProps)(Index);
