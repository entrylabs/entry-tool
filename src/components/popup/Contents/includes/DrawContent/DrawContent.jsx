import { CommonUtils } from '@utils/Common';
import Styles from '@assets/entry/scss/popup.scss';

const copyrightLinkUrl =
    'https://www.copyright.or.kr/education/educlass/learning/infringement-case/index.do';

export default ({ theme, goDraw, HeaderButtonPortal }) => (
    <>
        <p className={theme.drawing_dsc}>
            {CommonUtils.getLang('Menus.draw_new_ques_1')}
            <br />
            {CommonUtils.getLang('Menus.draw_new_ques_2')}
        </p>
        <div className={theme.pop_btn_box}>
            <div className={theme.active} onClick={CommonUtils.handleClick(goDraw)}>
                {CommonUtils.getLang('Buttons.move')}
            </div>
        </div>
        <div className={Styles.caution_box}>
            <p className={`${Styles.caution} ${Styles.imico_pop_caution}`}>
                <strong>{CommonUtils.getLang('Menus.file_upload_warn_title_image')}</strong>
                <br />
                <span className={Styles.sub_dsc}>
                    {CommonUtils.getLang('Menus.file_upload_warn_desc_image')}
                </span>
                <a target="_blank" href={copyrightLinkUrl}>
                    [{CommonUtils.getLang('Menus.file_upload_warn_link')}]
                </a>
            </p>
        </div>
        <HeaderButtonPortal>
            <a className={theme.btn} role="button" onClick={CommonUtils.handleClick(goDraw)}>
                {CommonUtils.getLang('Buttons.add2')}
            </a>
        </HeaderButtonPortal>
    </>
);
