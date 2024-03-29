import { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { visibleAction } from '../../actions/index';
import Styles from '../../assets/entry/scss/popup.scss';

class TableSummary extends Component {
    render() {
        // [D] ZoomIn : 마크업 확인용 / 스펙에 맞게 변경해주세요
        const { SummaryState, ZoomIn } = this.props;

        if (SummaryState == 'Total') {
            return (
                <Fragment>
                    <div className={Styles.popup_wrap}>
                        <header className={Styles.pop_header}>
                            <h1>테이블 불러오기</h1>
                            <button
                                onClick={this.close}
                                className={`${Styles.btn_back} ${Styles.imbtn_pop_close}`}
                            >
                                <span className={Styles.blind}>닫기</span>
                            </button>
                            <a href="/" className={Styles.btn} role="button">
                                적용하기
                            </a>
                        </header>
                        {/* [D] 크게 보기 버튼을 누르면 zoom_in 클래스 추가 */}
                        <div
                            className={`${Styles.section_container} ${Styles.summary_container} ${
                                ZoomIn ? `${Styles.zoom_in}` : ''
                            }`}
                        >
                            {/* [D] 메뉴 카테고리 선택에 따라 텍스트 변경  */}
                            {/* 창 조절하기 버튼을 누르면 fold 클래스 추가 */}
                            <section className={`${Styles.aside} ${Styles.fold}`}>
                                <h2 className={Styles.blind}>테이블 추가하기</h2>
                                <div className={Styles.add_btn_box}>
                                    <a href="/" role="button">
                                        테이블 추가하기
                                    </a>
                                </div>
                                <ul className={Styles.list}>
                                    <li>
                                        <span className={Styles.text}>
                                            새로운 테이블새로운 테이블새로운 테이블새로운
                                            테이블새로운 테이블새로운 테이블새로운 테이블새로운
                                            테이블
                                        </span>
                                        <a href="/" className={Styles.btn_close}>
                                            <span className={Styles.blind}>삭제</span>
                                        </a>
                                    </li>
                                    {/* 활성화 시 active 클래스 추가 */}
                                    <li>
                                        <span className={Styles.text}>새로운 테이블</span>
                                        <a href="/" className={Styles.btn_close}>
                                            <span className={Styles.blind}>삭제</span>
                                        </a>
                                        {/* active 클래스가 들어오면 노출 시켜 주세요 */}
                                        <div
                                            className={Styles.cell_layer}
                                            style={{
                                                display: 'none',
                                                width: 120,
                                                top: 20,
                                                right: 8,
                                            }}
                                        >
                                            <ul>
                                                <li>
                                                    <a href="/" className={Styles.link}>
                                                        복제
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="/" className={Styles.link}>
                                                        삭제
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="/" className={Styles.link}>
                                                        PC에 저장
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                    </li>
                                    <li>
                                        <span className={Styles.text}>새로운 테이블</span>
                                        <a href="/" className={Styles.btn_close}>
                                            <span className={Styles.blind}>삭제</span>
                                        </a>
                                    </li>
                                    <li>
                                        <span className={Styles.text}>새로운 테이블</span>
                                        <a href="/" className={Styles.btn_close}>
                                            <span className={Styles.blind}>삭제</span>
                                        </a>
                                    </li>
                                    <li>
                                        <span className={Styles.text}>새로운 테이블</span>
                                        <a href="/" className={Styles.btn_close}>
                                            <span className={Styles.blind}>삭제</span>
                                        </a>
                                    </li>
                                    <li>
                                        <span className={Styles.text}>새로운 테이블</span>
                                        <a href="/" className={Styles.btn_close}>
                                            <span className={Styles.blind}>삭제</span>
                                        </a>
                                    </li>
                                    <li>
                                        <span className={Styles.text}>새로운 테이블</span>
                                        <a href="/" className={Styles.btn_close}>
                                            <span className={Styles.blind}>삭제</span>
                                        </a>
                                    </li>
                                    <li>
                                        <span className={Styles.text}>새로운 테이블</span>
                                        <a href="/" className={Styles.btn_close}>
                                            <span className={Styles.blind}>삭제</span>
                                        </a>
                                    </li>
                                    <li>
                                        <span className={Styles.text}>새로운 테이블</span>
                                        <a href="/" className={Styles.btn_close}>
                                            <span className={Styles.blind}>삭제</span>
                                        </a>
                                    </li>
                                </ul>
                                <a href="/" role="button" className={Styles.split_bar}>
                                    <span className={Styles.blind}>창 조절하기</span>
                                </a>
                            </section>
                            <div className={Styles.container_inner}>
                                <div className={Styles.section_content}>
                                    <div className={Styles.sheet_form_box}>
                                        <input
                                            type="text"
                                            id="sheet_sjt"
                                            name="sheet_sjt"
                                            className={Styles.input}
                                        />
                                        <div className={Styles.btn_box}>
                                            {/* [D] 크게 보기 btn_zoom_in 클릭하면
                                                    - active 클래스 추가
                                                    - blind 텍스트 '작게 보기' 로 변경
                                                    - section_container 에 zoom_in 클래스 추가
                                            */}
                                            <a
                                                href="/"
                                                role="button"
                                                className={`${Styles.btn_zoom_in} ${
                                                    ZoomIn ? `${Styles.active}` : ''
                                                }`}
                                            >
                                                <span className={Styles.blind}>
                                                    {ZoomIn ? '작게 보기' : '크게 보기'}{' '}
                                                </span>
                                            </a>
                                            <div className={Styles.tab}>
                                                <a href="/" role="button">
                                                    테이블
                                                </a>
                                                <a href="/" role="button">
                                                    차트
                                                </a>
                                                <a href="/" role="button" className={Styles.active}>
                                                    정보
                                                </a>
                                            </div>
                                            <a href="/" role="button" className={Styles.btn_save}>
                                                저장하기
                                            </a>
                                        </div>
                                    </div>
                                    <div className={Styles.chart_box}>
                                        <h2 className={Styles.blind}>정보</h2>
                                        <div className={Styles.inner}>
                                            <div className={Styles.chart_wrap}>
                                                <div className={Styles.category_box}>
                                                    <div className={Styles.table_sjt}>
                                                        <strong>요약</strong>
                                                        <p className={Styles.title_dsc}>
                                                            우리나라의 연평균 기온과 계절별 평균
                                                            기온입니다.
                                                        </p>
                                                    </div>
                                                    <div className={Styles.table_sjt}>
                                                        <strong>제공처</strong>
                                                        <p className={Styles.title_dsc}>
                                                            Palmer Station Antarctica LTER
                                                        </p>
                                                    </div>
                                                    <div className={Styles.table_sjt}>
                                                        <strong>상세</strong>
                                                        <p className={Styles.title_dsc}>
                                                            남극의 파머 기지(Palmer Station)
                                                            근처에서 먹이를 찾는 333마리의 성체
                                                            펭귄에 대해 품종, 서식지, 부리 길이,
                                                            부리 깊이, 날개 길이, 몸무게, 성별을
                                                            정리한 데이터셋입니다. 이 데이터셋은
                                                            붓꽃 데이터의 대안으로 사용 됩니다.
                                                        </p>
                                                    </div>
                                                </div>
                                                <div className={Styles.category_box}>
                                                    <div className={Styles.table_sjt}>
                                                        <strong>통계량</strong>
                                                        <div className={Styles.q_box}>
                                                            <a href="#" className={Styles.ico_q}>
                                                                <span className={Styles.blind}>
                                                                    도움말
                                                                </span>
                                                            </a>
                                                            {/* 도움말을 클릭하면 display: block 처리 해주세요 */}
                                                            <div
                                                                className={Styles.tooltip_box}
                                                                style={{ display: 'none' }}
                                                            >
                                                                <div
                                                                    className={Styles.tooltip_inner}
                                                                >
                                                                    <strong className={Styles.sjt}>
                                                                        숫자가 아닌 값이 포함된
                                                                        속성은 개수만 확인할 수
                                                                        있습니다.
                                                                    </strong>
                                                                    <ul
                                                                        className={
                                                                            Styles.tooltip_list
                                                                        }
                                                                    >
                                                                        <li>
                                                                            <em
                                                                                className={
                                                                                    Styles.tit
                                                                                }
                                                                            >
                                                                                평균
                                                                            </em>
                                                                            <p
                                                                                className={
                                                                                    Styles.dsc
                                                                                }
                                                                            >
                                                                                해당 속성의 모든
                                                                                값을 더한 후 속성의
                                                                                개수 만큼 나눈 값
                                                                            </p>
                                                                        </li>
                                                                        <li>
                                                                            <em
                                                                                className={
                                                                                    Styles.tit
                                                                                }
                                                                            >
                                                                                표준 편차
                                                                            </em>
                                                                            <p
                                                                                className={
                                                                                    Styles.dsc
                                                                                }
                                                                            >
                                                                                데이터가평균을
                                                                                중심으로 얼마나
                                                                                퍼져있는지 알려주는
                                                                                값.
                                                                                <br />
                                                                                0에 가까울 수록
                                                                                값들이 평균 근처에
                                                                                집중되어 있다는 것을
                                                                                의미
                                                                            </p>
                                                                        </li>
                                                                        <li>
                                                                            <em
                                                                                className={
                                                                                    Styles.tit
                                                                                }
                                                                            >
                                                                                최댓값/최솟값
                                                                            </em>
                                                                            <p
                                                                                className={
                                                                                    Styles.dsc
                                                                                }
                                                                            >
                                                                                해당 속성의 가장 큰
                                                                                값과 가장 작은 값
                                                                            </p>
                                                                        </li>
                                                                        <li>
                                                                            <em
                                                                                className={
                                                                                    Styles.tit
                                                                                }
                                                                            >
                                                                                하위 25, 50, 75%
                                                                            </em>
                                                                            <p
                                                                                className={
                                                                                    Styles.dsc
                                                                                }
                                                                            >
                                                                                해당 속성의 최솟값을
                                                                                0%, 최댓값을
                                                                                <br />
                                                                                100%라고 치환했을 때
                                                                                각 크기에 해당하는
                                                                                값
                                                                            </p>
                                                                        </li>
                                                                        <li>
                                                                            <em
                                                                                className={
                                                                                    Styles.tit
                                                                                }
                                                                            >
                                                                                중간값
                                                                            </em>
                                                                            <p
                                                                                className={
                                                                                    Styles.dsc
                                                                                }
                                                                            >
                                                                                해당 속성의 모든
                                                                                값을 크기순으로
                                                                                배열했을 때<br />
                                                                                전체의 중앙에
                                                                                위치하는 값
                                                                            </p>
                                                                        </li>
                                                                    </ul>
                                                                </div>
                                                                <span
                                                                    className={`${Styles.arr} ${Styles.free}`}
                                                                    style={{ left: '40px' }}
                                                                >
                                                                    <i></i>
                                                                </span>
                                                            </div>
                                                        </div>
                                                        <p className={Styles.title_dsc}>
                                                            새로운 테이블에서 열을 기준으로 한 기초
                                                            통계량입니다.
                                                        </p>
                                                    </div>
                                                    <ul className={Styles.table_info}>
                                                        <li>
                                                            행 <strong>1,000</strong>개
                                                        </li>
                                                        <li>
                                                            열 <strong>3,000</strong>개
                                                        </li>
                                                        <li>
                                                            셀 <strong>100,000</strong>개
                                                        </li>
                                                    </ul>
                                                    <div className={Styles.table_box}>
                                                        {/* 셀의 갯수가 많을 경우 table의 총 너비를 계산해주세요. */}
                                                        <table className={Styles.table}>
                                                            <colgroup>
                                                                <col style={{ width: 140 }} />
                                                                {/* 셀의 갯수만큼 col의 갯수를 늘려주세요. */}
                                                                <col style={{ width: 150 }} />
                                                                <col style={{ width: 150 }} />
                                                                <col style={{ width: 150 }} />
                                                                <col style={{ width: 150 }} />
                                                                <col style={{ width: 150 }} />
                                                            </colgroup>
                                                            <thead>
                                                                <tr>
                                                                    <th scope="col">
                                                                        <div
                                                                            className={
                                                                                Styles.thead_tit
                                                                            }
                                                                        >
                                                                            &nbsp;
                                                                        </div>
                                                                    </th>
                                                                    <th scope="col">
                                                                        <div
                                                                            className={
                                                                                Styles.thead_tit
                                                                            }
                                                                        >
                                                                            평균
                                                                        </div>
                                                                    </th>
                                                                    <th scope="col">
                                                                        <div
                                                                            className={
                                                                                Styles.thead_tit
                                                                            }
                                                                        >
                                                                            표준편차
                                                                        </div>
                                                                    </th>
                                                                    <th scope="col">
                                                                        <div
                                                                            className={
                                                                                Styles.thead_tit
                                                                            }
                                                                        >
                                                                            최대값
                                                                        </div>
                                                                    </th>
                                                                    <th scope="col">
                                                                        <div
                                                                            className={
                                                                                Styles.thead_tit
                                                                            }
                                                                        >
                                                                            중간값
                                                                        </div>
                                                                    </th>
                                                                    <th scope="col">
                                                                        <div
                                                                            className={
                                                                                Styles.thead_tit
                                                                            }
                                                                        >
                                                                            최솟값
                                                                        </div>
                                                                    </th>
                                                                </tr>
                                                            </thead>
                                                            <tbody>
                                                                <tr>
                                                                    <th scope="row">
                                                                        <div
                                                                            className={
                                                                                Styles.thead_tit
                                                                            }
                                                                        >
                                                                            학교이름
                                                                        </div>
                                                                    </th>
                                                                    <td>11873</td>
                                                                    <td>-</td>
                                                                    <td>-</td>
                                                                    <td>-</td>
                                                                    <td>-</td>
                                                                </tr>
                                                                <tr>
                                                                    <th scope="row">
                                                                        <div
                                                                            className={
                                                                                Styles.thead_tit
                                                                            }
                                                                        >
                                                                            학교급
                                                                        </div>
                                                                    </th>
                                                                    <td>11873</td>
                                                                    <td>-</td>
                                                                    <td>-</td>
                                                                    <td>-</td>
                                                                    <td>-</td>
                                                                </tr>
                                                                <tr>
                                                                    <th scope="row">
                                                                        <div
                                                                            className={
                                                                                Styles.thead_tit
                                                                            }
                                                                        >
                                                                            지역
                                                                        </div>
                                                                    </th>
                                                                    <td>11873</td>
                                                                    <td>-</td>
                                                                    <td>-</td>
                                                                    <td>-</td>
                                                                    <td>-</td>
                                                                </tr>
                                                                <tr>
                                                                    <th scope="row">
                                                                        <div
                                                                            className={
                                                                                Styles.thead_tit
                                                                            }
                                                                        >
                                                                            위도
                                                                        </div>
                                                                    </th>
                                                                    <td>11873</td>
                                                                    <td>-</td>
                                                                    <td>-</td>
                                                                    <td>-</td>
                                                                    <td>-</td>
                                                                </tr>
                                                                <tr>
                                                                    <th scope="row">
                                                                        <div
                                                                            className={
                                                                                Styles.thead_tit
                                                                            }
                                                                        >
                                                                            경도
                                                                        </div>
                                                                    </th>
                                                                    <td>11873</td>
                                                                    <td>-</td>
                                                                    <td>-</td>
                                                                    <td>-</td>
                                                                    <td>-</td>
                                                                </tr>
                                                                <tr>
                                                                    <th scope="row">
                                                                        <div
                                                                            className={
                                                                                Styles.thead_tit
                                                                            }
                                                                        >
                                                                            기타
                                                                        </div>
                                                                    </th>
                                                                    <td>11873</td>
                                                                    <td>-</td>
                                                                    <td>-</td>
                                                                    <td>-</td>
                                                                    <td>-</td>
                                                                </tr>
                                                            </tbody>
                                                        </table>
                                                    </div>
                                                    <div className={Styles.table_sjt}>
                                                        <strong>속성 정보</strong>
                                                        <ul className={Styles.dsc_list}>
                                                            <li>
                                                                품종: 관측된 펭귄의 종류로
                                                                아델리(Adelie) 펭귄, 턱끈(Chinstrap)
                                                                펭귄, 젠투(Gentoo) 펭귄의
                                                                3종류입니다.
                                                            </li>
                                                            <li>
                                                                부리 깊이: 위 부리의 위쪽 표면부터
                                                                아래 부리의 아래쪽 표면까지의 길이를
                                                                말합니다. (mm)
                                                            </li>
                                                            <li>
                                                                몸무게: 펭귄의 몸무게(body
                                                                mass)입니다. (g)
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                                <div className={Styles.category_box}>
                                                    <div className={Styles.table_sjt}>
                                                        <strong>차트</strong>
                                                    </div>
                                                    <ul className={Styles.chart_list}>
                                                        <li>
                                                            <a
                                                                href="#"
                                                                className={`${Styles.chart_link} ${Styles.bar}`}
                                                            >
                                                                <strong className={Styles.title}>
                                                                    부리 깊이 막대 그래프
                                                                </strong>
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a
                                                                href="#"
                                                                className={`${Styles.chart_link} ${Styles.histogram}`}
                                                            >
                                                                <strong className={Styles.title}>
                                                                    부리 길이 히스토그램
                                                                </strong>
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a
                                                                href="#"
                                                                className={`${Styles.chart_link} ${Styles.scatter}`}
                                                            >
                                                                <strong className={Styles.title}>
                                                                    점 차트
                                                                </strong>
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a
                                                                href="#"
                                                                className={`${Styles.chart_link} ${Styles.scatter_matrix}`}
                                                            >
                                                                <strong className={Styles.title}>
                                                                    산점도 행렬
                                                                </strong>
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a
                                                                href="#"
                                                                className={`${Styles.chart_link} ${Styles.pie}`}
                                                            >
                                                                <strong className={Styles.title}>
                                                                    품종의 비율을 나타내는 파이차트
                                                                </strong>
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a
                                                                href="#"
                                                                className={`${Styles.chart_link} ${Styles.line}`}
                                                            >
                                                                <strong className={Styles.title}>
                                                                    선 그래프
                                                                </strong>
                                                            </a>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </Fragment>
            );
        } else {
            return (
                <Fragment>
                    <div className={Styles.popup_wrap}>
                        <header className={Styles.pop_header}>
                            <h1>테이블 불러오기</h1>
                            <button
                                onClick={this.close}
                                className={`${Styles.btn_back} ${Styles.imbtn_pop_close}`}
                            >
                                <span className={Styles.blind}>닫기</span>
                            </button>
                            <a href="/" className={Styles.btn} role="button">
                                적용하기
                            </a>
                        </header>
                        {/* [D] 크게 보기 버튼을 누르면 zoom_in 클래스 추가 */}
                        <div className={`${Styles.section_container} ${Styles.summary_container}`}>
                            {/* [D] 메뉴 카테고리 선택에 따라 텍스트 변경  */}
                            {/* 창 조절하기 버튼을 누르면 fold 클래스 추가 */}
                            <section className={`${Styles.aside}`}>
                                <h2 className={Styles.blind}>테이블 추가하기</h2>
                                <div className={Styles.add_btn_box}>
                                    <a href="/" role="button">
                                        테이블 추가하기
                                    </a>
                                </div>
                                <ul className={Styles.list}>
                                    <li>
                                        <span className={Styles.text}>
                                            새로운 테이블새로운 테이블새로운 테이블새로운
                                            테이블새로운 테이블새로운 테이블새로운 테이블새로운
                                            테이블
                                        </span>
                                        <a href="/" className={Styles.btn_close}>
                                            <span className={Styles.blind}>삭제</span>
                                        </a>
                                    </li>
                                    {/* 활성화 시 active 클래스 추가 */}
                                    <li>
                                        <span className={Styles.text}>새로운 테이블</span>
                                        <a href="/" className={Styles.btn_close}>
                                            <span className={Styles.blind}>삭제</span>
                                        </a>
                                        {/* active 클래스가 들어오면 노출 시켜 주세요 */}
                                        <div
                                            className={Styles.cell_layer}
                                            style={{
                                                display: 'none',
                                                width: 120,
                                                top: 20,
                                                right: 8,
                                            }}
                                        >
                                            <ul>
                                                <li>
                                                    <a href="/" className={Styles.link}>
                                                        복제
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="/" className={Styles.link}>
                                                        삭제
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="/" className={Styles.link}>
                                                        PC에 저장
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                    </li>
                                    <li>
                                        <span className={Styles.text}>새로운 테이블</span>
                                        <a href="/" className={Styles.btn_close}>
                                            <span className={Styles.blind}>삭제</span>
                                        </a>
                                    </li>
                                    <li>
                                        <span className={Styles.text}>새로운 테이블</span>
                                        <a href="/" className={Styles.btn_close}>
                                            <span className={Styles.blind}>삭제</span>
                                        </a>
                                    </li>
                                    <li>
                                        <span className={Styles.text}>새로운 테이블</span>
                                        <a href="/" className={Styles.btn_close}>
                                            <span className={Styles.blind}>삭제</span>
                                        </a>
                                    </li>
                                    <li>
                                        <span className={Styles.text}>새로운 테이블</span>
                                        <a href="/" className={Styles.btn_close}>
                                            <span className={Styles.blind}>삭제</span>
                                        </a>
                                    </li>
                                    <li>
                                        <span className={Styles.text}>새로운 테이블</span>
                                        <a href="/" className={Styles.btn_close}>
                                            <span className={Styles.blind}>삭제</span>
                                        </a>
                                    </li>
                                    <li>
                                        <span className={Styles.text}>새로운 테이블</span>
                                        <a href="/" className={Styles.btn_close}>
                                            <span className={Styles.blind}>삭제</span>
                                        </a>
                                    </li>
                                    <li>
                                        <span className={Styles.text}>새로운 테이블</span>
                                        <a href="/" className={Styles.btn_close}>
                                            <span className={Styles.blind}>삭제</span>
                                        </a>
                                    </li>
                                </ul>
                                <a href="/" role="button" className={Styles.split_bar}>
                                    <span className={Styles.blind}>창 조절하기</span>
                                </a>
                            </section>
                            <div className={Styles.container_inner}>
                                <div className={Styles.section_content}>
                                    <div className={Styles.sheet_form_box}>
                                        <input
                                            type="text"
                                            id="sheet_sjt"
                                            name="sheet_sjt"
                                            className={Styles.input}
                                        />
                                        <div className={Styles.btn_box}>
                                            {/* [D] 크게 보기 btn_zoom_in 클릭하면
                                                    - active 클래스 추가
                                                    - blind 텍스트 '작게 보기' 로 변경
                                                    - section_container 에 zoom_in 클래스 추가
                                            */}
                                            <a
                                                href="/"
                                                role="button"
                                                className={`${Styles.btn_zoom_in}`}
                                            >
                                                <span className={Styles.blind}>크게 보기</span>
                                            </a>
                                            <div className={Styles.tab}>
                                                <a href="/" role="button">
                                                    테이블
                                                </a>
                                                <a href="/" role="button">
                                                    차트
                                                </a>
                                                <a href="/" role="button" className={Styles.active}>
                                                    정보
                                                </a>
                                            </div>
                                            <a href="/" role="button" className={Styles.btn_save}>
                                                저장하기
                                            </a>
                                        </div>
                                    </div>
                                    <div className={Styles.chart_box}>
                                        <h2 className={Styles.blind}>정보</h2>
                                        <div className={Styles.inner}>
                                            <div className={Styles.chart_navi}>
                                                <a
                                                    href="#"
                                                    className={`${Styles.chart_link} ${Styles.bar} ${Styles.disabled}`}
                                                >
                                                    <span className={Styles.blind}>막대형</span>
                                                </a>
                                                <a
                                                    href="#"
                                                    className={`${Styles.chart_link} ${Styles.line} ${Styles.disabled}`}
                                                >
                                                    <span className={Styles.blind}>꺽은선형</span>
                                                </a>
                                                <a
                                                    href="#"
                                                    className={`${Styles.chart_link} ${Styles.pie} ${Styles.disabled}`}
                                                >
                                                    <span className={Styles.blind}>원형</span>
                                                </a>
                                                <a
                                                    href="#"
                                                    className={`${Styles.chart_link} ${Styles.scatter} ${Styles.disabled}`}
                                                >
                                                    <span className={Styles.blind}>방사형</span>
                                                </a>
                                                <a
                                                    href="#"
                                                    className={`${Styles.chart_link} ${Styles.histogram} ${Styles.disabled}`}
                                                >
                                                    <span className={Styles.blind}>히스토그램</span>
                                                </a>
                                                <a
                                                    href="#"
                                                    className={`${Styles.chart_link} ${Styles.scatter_matrix} ${Styles.disabled}`}
                                                >
                                                    <span className={Styles.blind}>
                                                        산점도 행렬
                                                    </span>
                                                </a>
                                                <div className={Styles.add_link_box}>
                                                    <a
                                                        href="#"
                                                        className={`${Styles.add_link} ${Styles.disabled}`}
                                                        role="button"
                                                    >
                                                        <span className={Styles.blind}>
                                                            추가하기
                                                        </span>
                                                    </a>
                                                    {/* 추가하기 링크가 클릭되면 display: block 처리 해주세요 */}
                                                    <div
                                                        className={Styles.tooltip_graph_box}
                                                        style={{ display: 'none' }}
                                                    >
                                                        <ul className={Styles.graph_list}>
                                                            <li className={Styles.bar}>
                                                                <a href="#" role="button">
                                                                    막대
                                                                    <span>바 그래프</span>
                                                                </a>
                                                            </li>
                                                            <li className={Styles.line}>
                                                                <a href="#" role="button">
                                                                    선<span>선 그래프</span>
                                                                </a>
                                                            </li>
                                                            <li className={Styles.pie}>
                                                                <a href="#" role="button">
                                                                    원<span>파이 차트</span>
                                                                </a>
                                                            </li>
                                                            <li className={Styles.scatter}>
                                                                <a href="#" role="button">
                                                                    점<span>산점도</span>
                                                                </a>
                                                            </li>
                                                            <li className={Styles.histogram}>
                                                                <a href="#" role="button">
                                                                    히스토그램
                                                                </a>
                                                            </li>
                                                            <li className={Styles.scatter_matrix}>
                                                                <a href="#" role="button">
                                                                    산점도 행렬
                                                                </a>
                                                            </li>
                                                        </ul>
                                                        <span className={Styles.arr}>
                                                            <i></i>
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className={Styles.chart_wrap}>
                                                <div className={Styles.category_box}>
                                                    <div className={Styles.table_sjt}>
                                                        <strong>통계량</strong>
                                                        <div className={Styles.q_box}>
                                                            <a href="#" className={Styles.ico_q}>
                                                                <span className={Styles.blind}>
                                                                    도움말
                                                                </span>
                                                            </a>
                                                            {/* 도움말을 클릭하면 display: block 처리 해주세요 */}
                                                            <div
                                                                className={Styles.tooltip_box}
                                                                style={{ display: 'none' }}
                                                            >
                                                                <div
                                                                    className={Styles.tooltip_inner}
                                                                >
                                                                    <strong className={Styles.sjt}>
                                                                        숫자가 아닌 값이 포함된
                                                                        속성은 개수만 확인할 수
                                                                        있습니다.
                                                                    </strong>
                                                                    <ul
                                                                        className={
                                                                            Styles.tooltip_list
                                                                        }
                                                                    >
                                                                        <li>
                                                                            <em
                                                                                className={
                                                                                    Styles.tit
                                                                                }
                                                                            >
                                                                                평균
                                                                            </em>
                                                                            <p
                                                                                className={
                                                                                    Styles.dsc
                                                                                }
                                                                            >
                                                                                해당 속성의 모든
                                                                                값을 더한 후 속성의
                                                                                개수 만큼 나눈 값
                                                                            </p>
                                                                        </li>
                                                                        <li>
                                                                            <em
                                                                                className={
                                                                                    Styles.tit
                                                                                }
                                                                            >
                                                                                표준 편차
                                                                            </em>
                                                                            <p
                                                                                className={
                                                                                    Styles.dsc
                                                                                }
                                                                            >
                                                                                데이터가평균을
                                                                                중심으로 얼마나
                                                                                퍼져있는지 알려주는
                                                                                값.
                                                                                <br />
                                                                                0에 가까울 수록
                                                                                값들이 평균 근처에
                                                                                집중되어 있다는 것을
                                                                                의미
                                                                            </p>
                                                                        </li>
                                                                        <li>
                                                                            <em
                                                                                className={
                                                                                    Styles.tit
                                                                                }
                                                                            >
                                                                                최댓값/최솟값
                                                                            </em>
                                                                            <p
                                                                                className={
                                                                                    Styles.dsc
                                                                                }
                                                                            >
                                                                                해당 속성의 가장 큰
                                                                                값과 가장 작은 값
                                                                            </p>
                                                                        </li>
                                                                        <li>
                                                                            <em
                                                                                className={
                                                                                    Styles.tit
                                                                                }
                                                                            >
                                                                                하위 25, 50, 75%
                                                                            </em>
                                                                            <p
                                                                                className={
                                                                                    Styles.dsc
                                                                                }
                                                                            >
                                                                                해당 속성의 최솟값을
                                                                                0%, 최댓값을
                                                                                <br />
                                                                                100%라고 치환했을 때
                                                                                각 크기에 해당하는
                                                                                값
                                                                            </p>
                                                                        </li>
                                                                        <li>
                                                                            <em
                                                                                className={
                                                                                    Styles.tit
                                                                                }
                                                                            >
                                                                                중간값
                                                                            </em>
                                                                            <p
                                                                                className={
                                                                                    Styles.dsc
                                                                                }
                                                                            >
                                                                                해당 속성의 모든
                                                                                값을 크기순으로
                                                                                배열했을 때<br />
                                                                                전체의 중앙에
                                                                                위치하는 값
                                                                            </p>
                                                                        </li>
                                                                    </ul>
                                                                </div>
                                                                <span
                                                                    className={`${Styles.arr} ${Styles.free}`}
                                                                    style={{ left: '40px' }}
                                                                >
                                                                    <i></i>
                                                                </span>
                                                            </div>
                                                        </div>
                                                        <p className={Styles.title_dsc}>
                                                            새로운 테이블에서 열을 기준으로 한 기초
                                                            통계량입니다.
                                                        </p>
                                                    </div>
                                                    <ul className={Styles.table_info}>
                                                        <li>
                                                            행 <strong>0</strong>개
                                                        </li>
                                                        <li>
                                                            열 <strong>0</strong>개
                                                        </li>
                                                        <li>
                                                            셀 <strong>0</strong>개
                                                        </li>
                                                    </ul>
                                                    <div className={Styles.table_box}>
                                                        {/* 셀의 갯수가 많을 경우 table의 총 너비를 계산해주세요. */}
                                                        <table className={Styles.table}>
                                                            <colgroup>
                                                                <col style={{ width: 140 }} />
                                                                {/* 셀의 갯수만큼 col의 갯수를 늘려주세요. */}
                                                                <col style={{ width: 150 }} />
                                                                <col style={{ width: 150 }} />
                                                                <col style={{ width: 150 }} />
                                                                <col style={{ width: 150 }} />
                                                                <col style={{ width: 150 }} />
                                                            </colgroup>
                                                            <thead>
                                                                <tr>
                                                                    <th scope="col">
                                                                        <div
                                                                            className={
                                                                                Styles.thead_tit
                                                                            }
                                                                        >
                                                                            &nbsp;
                                                                        </div>
                                                                    </th>
                                                                    <th scope="col">
                                                                        <div
                                                                            className={
                                                                                Styles.thead_tit
                                                                            }
                                                                        >
                                                                            평균
                                                                        </div>
                                                                    </th>
                                                                    <th scope="col">
                                                                        <div
                                                                            className={
                                                                                Styles.thead_tit
                                                                            }
                                                                        >
                                                                            표준편차
                                                                        </div>
                                                                    </th>
                                                                    <th scope="col">
                                                                        <div
                                                                            className={
                                                                                Styles.thead_tit
                                                                            }
                                                                        >
                                                                            최대값
                                                                        </div>
                                                                    </th>
                                                                    <th scope="col">
                                                                        <div
                                                                            className={
                                                                                Styles.thead_tit
                                                                            }
                                                                        >
                                                                            중간값
                                                                        </div>
                                                                    </th>
                                                                    <th scope="col">
                                                                        <div
                                                                            className={
                                                                                Styles.thead_tit
                                                                            }
                                                                        >
                                                                            최솟값
                                                                        </div>
                                                                    </th>
                                                                </tr>
                                                            </thead>
                                                            <tbody>
                                                                <tr>
                                                                    <th scope="row">
                                                                        <div
                                                                            className={
                                                                                Styles.thead_tit
                                                                            }
                                                                        >
                                                                            -
                                                                        </div>
                                                                    </th>
                                                                    <td>-</td>
                                                                    <td>-</td>
                                                                    <td>-</td>
                                                                    <td>-</td>
                                                                    <td>-</td>
                                                                </tr>
                                                            </tbody>
                                                        </table>
                                                    </div>
                                                </div>
                                                <div className={Styles.category_box}>
                                                    <div className={Styles.table_sjt}>
                                                        <strong>차트</strong>
                                                        <p className={Styles.title_dsc}>
                                                            추가한 차트가 없습니다.
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </Fragment>
            );
        }
    }
}
export default TableSummary;
