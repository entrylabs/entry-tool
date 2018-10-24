export const api = {
    base: 'http://local.playentry.org',
};

export const WRITE_BOX = {
    FONTS: [{
        'name': '바탕체',
        'family': 'KoPub Batang',
        'url': '/css/kopubbatang.css',
        '$$hashKey': 'object:135',
    }, {
        'name': '명조체',
        'family': 'Nanum Myeongjo',
        'url': '/css/nanummyeongjo.css',
        '$$hashKey': 'object:136',
    }, {
        'name': '고딕체',
        'family': 'Nanum Gothic',
        'url': '/css/nanumgothic.css',
        '$$hashKey': 'object:137',
    }, {
        'name': '필기체',
        'family': 'Nanum Pen Script',
        'url': '/css/nanumpenscript.css',
        '$$hashKey': 'object:138',
    }, {
        'name': '한라산체',
        'family': 'Jeju Hallasan',
        'url': '/css/jejuhallasan.css',
        '$$hashKey': 'object:139',
    }, {
        'name': '코딩고딕체',
        'family': 'Nanum Gothic Coding',
        'url': '/css/nanumgothiccoding.css',
        '$$hashKey': 'object:140',
    }],
    EFFECTS: {
        bold: {
            text: '굵게',
            apply: false,
            css:{
                "fontWeight":"bold"
            }
        },
        underLine: {
            text: '밑줄',
            apply: false,
            css:{
                "textDecorationLine":"underline"
            }
        },
        italic: {
            text: '기울임',
            apply: false,
            css:{
                "fontStyle":"italic"
            }
        },
        through: {
            text: '취소선',
            apply: false,
            css:{
                "textDecorationLine":"line-through"
            }
        },
        color: {
            text: '글자색',
            apply: false,
            css:{
                "color":"#FF0000"
            }
        },
        paint: {
            text: '배경색',
            apply: false,
            css:{
                "backgroundColor":"#d1d1d1"
            }
        },
    },
};

export const POPUP_TYPE = {
    sprite: {
        navigations: {
            select: {
                name: '오브젝트 선택',
            },
            upload: {
                name: '파일 올리기',
            },
            draw: {
                name: '그리기',
            },
            write: {
                name: '글 상자',
            },
        },
        sidebar: {
            entrybot_friends: {
                name: '엔트리 봇',
                sub: {
                    all: { name: '전체' },
                },
            },
            people: {
                name: '사람',
                sub: {
                    all: { name: '전체' },
                },
            },
            animal: {
                name: '동물',
                sub: {
                    all: { name: '전체' },
                    animal_flying: { name: '하늘' },
                    animal_land: { name: '땅' },
                    animal_water: { name: '물' },
                    animal_others: { name: '기타' },
                },
            },
            plant: {
                name: '식물',
                sub: {
                    all: { name: '전체' },
                    plant_flower: { name: '꽃' },
                    plant_grass: { name: '풀' },
                    plant_tree: { name: '나무' },
                    plant_others: { name: '기타' },
                },
            },
            vehicles: {
                name: '탈것',
                sub: {
                    all: { name: '전체' },
                    vehicles_flying: { name: '하늘' },
                    vehicles_land: { name: '땅' },
                    vehicles_water: { name: '물' },
                    vehicles_others: { name: '기타' },
                },
            },
            architect: {
                name: "건물",
                sub: {
                    all: { name: '전체' },
                    architect_building: { name: '건축물' },
                    architect_monument: { name: '기념물' },
                    architect_others: { name: '기타' },
                }
            },
            food: {
                name: "음식",
                sub: {
                    all: { name: '전체' },
                    food_vegetables: { name: '과일/채소' },
                    food_meat: { name: '고기' },
                    food_drink: { name: '음료' },
                    food_others: { name: '기타' },
                }
            },
            environment: {
                name: "환경",
                sub: {
                    all: { name: '전체' },
                    environment_nature: { name: '자연' },
                    environment_space: { name: '우주' },
                    environment_others: { name: '기타' },
                }
            },
            stuff: {
                name: "물건",
                sub: {
                    all: { name: '전체' },
                    stuff_living: { name: '생활' },
                    stuff_hobby: { name: '취미' },
                    stuff_others: { name: '기타' },
                }
            },
            fantasy: {
                name: "판타지",
                sub: {
                    all: { name: '전체' },
                }
            },
            interface: {
                name: "인터페이스",
                sub: {
                    all: { name: '전체' },
                }
            },
            background: {
                name: "배경",
                sub: {
                    all: { name: '전체' },
                    background_outdoor: { name: '실외' },
                    background_indoor: { name: '실내' },
                    background_nature: { name: '자연' },
                    background_others: { name: '기타' },
                }
            }
        },
    },
    sound: {
        navigations: {
            select: {
                name: '소리 선택',
            },
            upload: {
                name: '파일 올리기',
            },
        },
        sidebar: {
            사람: {
                name: '사람',
                sub: {
                    all: { name: '전체' },
                    "일상생활": {name: "일상생활"}
                },
            },
            자연: {
                name: '자연',
                sub: {
                    all: { name: '전체' },
                    "동물": {name: "동물/곤충"}
                },
            },
            사물: {
                name: '사물',
                sub: {
                    all: { name: '전체' },
                    "이동수단": {name: "이동수단" },
                    "기타" : {name: "기타"}
                },
            },
            판타지: {
                name: '판타지',
                sub: {
                    all: { name: '전체' },
                },
            },
            악기: {
                name: '악기',
                sub: {
                    all: { name: '전체' },
                    "피아노" : {name: "피아노"},
                    "마림바" : {name: "마림바"},
                    "드럼" : {name: "드럼"},
                    "장구" : {name: "장구"},
                    "효과음" : {name: "효과음"},
                    "기타타악기" : {name: "기타타악기"}
                },
            },
        },
    },
    expansion: {
        navigations: {
            expansion: {
                name: '확장 블록',
            },
        },
        data: [
            {
                name: 'translate',
                imageName: 'papago.png',
                description: "weatehr",
                title: {
                    'ko': '번역',
                    'en': 'translate',
                },
            },
            {
                name: 'festival',
                imageName: 'festival.png',
                description: "weatehr",
                title: {
                    'ko': '행사',
                    'en': 'festival',
                },
            },
            {
                name: 'weather',
                imageName: 'weather.png',
                description: "weatehr",
                title: {
                    "ko": "날씨",
                    "en": "weather"
                }
            }
        ],
    },
};

