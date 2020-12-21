import React, { useContext } from 'react';
import ReactDOM from 'react-dom';
import Header from './Header';
import Summary from './summary/Summary';
import TableEditor from './TableEditor';
import ChartEditor from './chart/ChartEditor';
import SideTab from './SideTab';
import Tab from './Tab';
import Title from './Title';
import EmptyContents from './EmptyContents';
import { DataAnalyticsContext } from '@contexts/dataAnalytics';
import { SUMMARY, TABLE, CHART, TAB_ITEMS } from '@constants/dataAnalytics';
import Theme from '@utils/Theme';

const DataAnalyticsEditor = (props) => {
    const theme = Theme.getStyle('popup');
    const { dataAnalytics } = useContext(DataAnalyticsContext);
    const { tab, selected, onCloseButtonClick } = dataAnalytics;
    const handleButtonClick = (event) => {
        event.preventDefault();
        onCloseButtonClick();
    };

    let sectionCSS = theme.chart_content;
    let Contents = EmptyContents;

    switch (tab) {
        case TABLE:
            Contents = TableEditor;
            break;
        case CHART:
            Contents = ChartEditor;
            break;
        case SUMMARY:
            Contents = Summary;
            sectionCSS = theme.summary_content;
            break;
    }
    return (
        <div className={theme.popup_wrap}>
            <header className={theme.pop_header}>
                <h1>테이블 불러오기</h1>
                <button
                    onClick={handleButtonClick}
                    className={`${theme.btn_back} ${theme.imbtn_pop_close}`}
                >
                    <span className={theme.blind}>뒤로가기</span>
                </button>
            </header>
            <section className={`${theme.pop_content} ${sectionCSS}`}>
                {/* [D] 메뉴 카테고리 선택에 따라 텍스트 변경  */}
                {/* 창 조절하기 버튼을 누르면 fold 클래스 추가 */}
                <SideTab />
                <div className={theme.section_cont}>
                    <div className={theme.sheet_form_box}>
                        <Title key={`title_${selected ? selected.id : 'null'}`} />
                        <Tab />
                    </div>
                    <Contents />
                </div>
            </section>
        </div>
    );
};

export default DataAnalyticsEditor;

// const chart = (params) => {
//     return (
//         <div className={Styles.chart_box}>
//             <h2 className={Styles.blind}>차트</h2>
//             <div className={Styles.inner}>
//                 {/* 테이블 선택 */}
//                 <div className={Styles.chart_navi}>
//                     <a className={`${Styles.chart_link} ${Styles.bar} ${Styles.disabled}`}>
//                         <span className={Styles.blind}>막대형</span>
//                     </a>
//                     <a className={`${Styles.chart_link} ${Styles.line} ${Styles.disabled}`}>
//                         <span className={Styles.blind}>꺽은선형</span>
//                     </a>
//                     <a className={`${Styles.chart_link} ${Styles.pie} ${Styles.disabled}`}>
//                         <span className={Styles.blind}>원형</span>
//                     </a>
//                     <a className={`${Styles.chart_link} ${Styles.scatter} ${Styles.disabled}`}>
//                         <span className={Styles.blind}>방사형</span>
//                     </a>
//                     <div className={Styles.add_link_box}>
//                         <a className={Styles.add_link} role="button">
//                             <span className={Styles.blind}>추가하기</span>
//                         </a>
//                     </div>
//                 </div>
//                 {/* 테이블 차트 입력폼 */}
//                 <div className={Styles.chart_no_result}>
//                     <p className={Styles.dsc}>차트를 먼저 추가해 주세요.</p>
//                 </div>
//             </div>
//         </div>
//     );
// };

// const Portal = ({ children }) => {
//     const el = document.querySelector('body');
//     return ReactDOM.createPortal(children, el);
// };
// const DataAnalyticsEditor2 = () =
// {
//     const { dataAnalytics, dispatch } = useContext(DataAnalyticsContext);
//     const { tab, table, isFullScreen } = dataAnalytics;

//     const handleFullScreenClick = (event) => {
//         event.preventDefault();
//         dispatch({
//             type: 'TOGGLE_FULLSCREEN',
//             isFullScreen: !isFullScreen,
//         });
//     };

//     const header = (
//         <Header
//             selected={tab}
//             tabItems={TAB_ITEMS}
//             isFullScreen={isFullScreen}
//             onFullScreenClick={handleFullScreenClick}
//         />
//     );
//     let content = null;
//     if (table) {
//         switch (tab) {
//             case SUMMARY:
//                 content = <Summary />;
//                 break;
//             case TABLE:
//                 content = <TableEditor />;
//                 break;
//             case CHART:
//                 content = <ChartEditor />;
//                 break;
//             default:
//                 break;
//         }
//     }

//     return (
//         <Portal>
//             <div className={`${Styles.data_detail_wrap} ${Styles.full}`}>
//                 {header}
//                 {content}
//             </div>
//         </Portal>
//     );
// };
