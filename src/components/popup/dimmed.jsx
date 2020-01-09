import React from 'react';
import Theme from '@utils/Theme';

export default () => {
    const theme = Theme.getStyle('popup');
    return (
        <div className={theme.dimmed}>
            <div className={theme.more_popup}>
                <strong className={theme.more_sjt}>
                    한국국제교류재단 한국음식정보
                </strong>
                <ul className={theme.more_info}>
                    <li>
                        제공처 : 한국국제교류재단 문화예술사업부
                    </li>
                    <li>
                        수정일 : 2019-12-31
                    </li>
                </ul>
                <p className={theme.more_dsc}>
                    한국국제교류재단은 한국인의 매일 먹는 밥, 반찬, 찌개, 국부터 전통음힉에 이르기까지 800여 가지가 넘는 한식의 보다 정확한 정보를 스마트폰으로 쉽게 찾고, 듣고, 공유할 수 있도록 ‘Korean Food Guide 800’ 앱으로 출시하였다. 이에 800여가지의 한식을 재료별(곡물, 콩, 채소, 고기 등) 조리법별(밥, 국, 찌개, 구이 등)로 분류한 엑셀데이터를 공공데이터로 공개한다. 분류한 엑셀데이터를 공공데이터로 공개한다.
                    한국국제교류재단은 한국인의 매일 먹는 밥, 반찬, 찌개, 국부터 전통음힉에 이르기까지 800여 가지가 넘는 한식의 보다 정확한 정보를 스마트폰으로 쉽게 찾고, 듣고, 공유할 수 있도록 ‘Korean Food Guide 800’ 앱으로 출시하였다. 이에 800여가지의 한식을 재료별(곡물, 콩, 채소, 고기 등) 조리법별(밥, 국, 찌개, 구이 등)로 분류한 엑셀데이터를 공공데이터로 공개한다. 분류한 엑셀데이터를 공공데이터로 공개한다.
                </p>
                <a href="#" className={theme.link_close}>
                    <span className={theme.blind}>닫기</span>
                </a>
            </div>
        </div>
    );
}
