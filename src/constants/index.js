export const EMIT_TYPES = {
    submit: 'submit',
    load: 'load',
    search: 'search',
    fetch: 'fetch',
    close: 'close',
    write: 'write',
    draw: 'draw',
    select: 'select'

};

const SPRITE_SIDEBAR = {
    entrybot_friends: {
        name: 'Category.entrybot_friends',
            sub: {
            all: { name: 'Menus.all' },
        },
    },
    people: {
        name: 'Category.people',
            sub: {
            all: { name: 'Menus.all' },
        },
    },
    animal: {
        name: 'Category.animal',
            sub: {
            all: { name: 'Menus.all' },
            animal_flying: { name: 'Category.animal_flying' },
            animal_land: { name: 'Category.animal_land' },
            animal_water: { name: 'Category.animal_water' },
            animal_others: { name: 'Category.animal_others' },
        },
    },
    plant: {
        name: 'Category.plant',
            sub: {
            all: { name: 'Menus.all' },
            plant_flower: { name: 'Category.plant_flower' },
            plant_grass: { name: 'Category.plant_grass' },
            plant_tree: { name: 'Category.plant_tree' },
            plant_others: { name: 'Category.plant_others' },
        },
    },
    vehicles: {
        name: 'Category.vehicles',
            sub: {
            all: { name: 'Menus.all' },
            vehicles_flying: { name: 'Category.vehicles_flying' },
            vehicles_land: { name: 'Category.vehicles_land' },
            vehicles_water: { name: 'Category.vehicles_water' },
            vehicles_others: { name: 'Category.vehicles_others' },
        },
    },
    architect: {
        name: 'Category.architect',
            sub: {
            all: { name: 'Menus.all' },
            architect_building: { name: 'Category.architect_building' },
            architect_monument: { name: 'Category.architect_monument' },
            architect_others: { name: 'Category.architect_others' },
        },
    },
    food: {
        name: 'Category.food',
            sub: {
            all: { name: 'Menus.all' },
            food_vegetables: { name: 'Category.food_vegetables' },
            food_meat: { name: 'Category.food_meat' },
            food_drink: { name: 'Category.food_drink' },
            food_others: { name: 'Category.food_others' },
        },
    },
    environment: {
        name: 'Category.environment',
            sub: {
            all: { name: 'Menus.all' },
            environment_nature: { name: 'Category.environment_nature' },
            environment_space: { name: 'Category.environment_space' },
            environment_others: { name: 'Category.environment_others' },
        },
    },
    stuff: {
        name: 'Category.stuff',
            sub: {
            all: { name: 'Menus.all' },
            stuff_living: { name: 'Category.stuff_living' },
            stuff_hobby: { name: 'Category.stuff_hobby' },
            stuff_others: { name: 'Category.stuff_others' },
        },
    },
    fantasy: {
        name: 'Category.fantasy',
            sub: {
            all: { name: 'Menus.all' },
        },
    },
    interface: {
        name: 'Category.interface',
            sub: {
            all: { name: 'Menus.all' },
        },
    },
    background: {
        name: 'Category.background',
            sub: {
            all: { name: 'Menus.all' },
            background_outdoor: { name: 'Category.background_outdoor' },
            background_indoor: { name: 'Category.background_indoor' },
            background_nature: { name: 'Category.background_nature' },
            background_others: { name: 'Category.background_others' },
        },
    },
};

export const DEFAULT_OPTIONS = {
    WRITE_BOX: {
        FONTS: [
            {
                name: '바탕체',
                family: 'KoPub Batang',
                url: '/css/kopubbatang.css',
                $$hashKey: 'object:135',
            },
            {
                name: '명조체',
                family: 'Nanum Myeongjo',
                url: '/css/nanummyeongjo.css',
                $$hashKey: 'object:136',
            },
            {
                name: '고딕체',
                family: 'Nanum Gothic',
                url: '/css/nanumgothic.css',
                $$hashKey: 'object:137',
            },
            {
                name: '필기체',
                family: 'Nanum Pen Script',
                url: '/css/nanumpenscript.css',
                $$hashKey: 'object:138',
            },
            {
                name: '한라산체',
                family: 'Jeju Hallasan',
                url: '/css/jejuhallasan.css',
                $$hashKey: 'object:139',
            },
            {
                name: '코딩고딕체',
                family: 'Nanum Gothic Coding',
                url: '/css/nanumgothiccoding.css',
                $$hashKey: 'object:140',
            },
        ],
        EFFECTS: {
            bold: {
                text: '굵게',
                apply: false,
                css: {
                    fontWeight: 'bold',
                },
            },
            underLine: {
                text: '밑줄',
                apply: false,
                css: {
                    textDecorationLine: 'underline',
                },
            },
            italic: {
                text: '기울임',
                apply: false,
                css: {
                    fontStyle: 'italic',
                },
            },
            through: {
                text: '취소선',
                apply: false,
                css: {
                    textDecorationLine: 'line-through',
                },
            },
            color: {
                text: '글자색',
                apply: false,
                css: {
                    color: '#000000',
                },
            },
            backgroundColor: {
                text: '배경색',
                apply: false,
                css: {
                    backgroundColor: '#ffffff',
                },
            },
        },
    },
    POPUP_TYPE: {
        sprite: {
            title: 'Workspace.add_object',
            mainType: 'sprite',
            navigations: {
                select: {
                    name: 'Workspace.select_library',
                },
                upload: {
                    name: 'Workspace.upload',
                },
                draw: {
                    name: 'Workspace.draw_new',
                },
                write: {
                    name: 'Workspace.textbox'
                }
            },
            opt : {
              search : {query: true},
              multiSelect: true,
              uploadAllowed: {
                  image: true,
                  object: true,
                  sound: false
              },
              uploadNotAllowedExt: ["gif"]
            },
            sidebar: SPRITE_SIDEBAR
        },
        shape: {
            title: 'Workspace.add_picture',
            mainType: 'sprite',
            navigations: {
                select: {
                    name: 'Workspace.select_library',
                },
                upload: {
                    name: 'Workspace.upload',
                },
                draw: {
                    name: 'Workspace.draw_new',
                },
            },
            opt : {
                search : {query: true},
                multiSelect: true,
                uploadAllowed: {
                    image: true,
                    object: false,
                    sound: false
                },
                uploadNotAllowedExt: ["gif"]
            },
            sidebar: SPRITE_SIDEBAR
        },
        getShape: {
            title: 'Menus.picture_import',
            mainType: 'sprite',
            navigations: {
                select: {
                    name: 'Workspace.select_library',
                },
                upload: {
                    name: 'Workspace.upload',
                },
            },
            opt : {
                multiSelect: false,
                uploadAllowed: {
                    image: true,
                    object: false,
                    sound: false
                },
                uploadNotAllowedExt: ["gif", "eo"]
            },
            sidebar: SPRITE_SIDEBAR
        },
        sound: {
            title: 'Workspace.sound_add',
            mainType: 'sound',
            navigations: {
                select: {
                    name: 'Workspace.select_sound',
                },
                upload: {
                    name: 'Workspace.upload',
                },
            },
            opt : {
                search : {query: true},
                multiSelect: true,
                uploadAllowed: {
                    image: false,
                    object: false,
                    sound: true
                }
            },
            sidebar: {
                사람: {
                    name: 'Menus.people',
                    sub: {
                        all: { name: 'Menus.all' },
                        일상생활: { name: 'Menus.life' },
                    },
                },
                자연: {
                    name: 'Menus.nature',
                    sub: {
                        all: { name: 'Menus.all' },
                        동물: { name: 'Menus.animal_insect' },
                    },
                },
                사물: {
                    name: 'Menus.things',
                    sub: {
                        all: { name: 'Menus.all' },
                        이동수단: { name: 'Menus.vehicles' },
                        기타: { name: 'Menus.others' },
                    },
                },
                판타지: {
                    name: 'Menus.fantasy',
                    sub: {
                        all: { name: 'Menus.all' },
                    },
                },
                악기: {
                    name: 'Menus.instrument',
                    sub: {
                        all: { name: 'Menus.all' },
                        피아노: { name: 'Menus.piano' },
                        마림바: { name: 'Menus.marimba' },
                        드럼: { name: 'Menus.drum' },
                        장구: { name: 'Menus.janggu' },
                        효과음: { name: 'Menus.sound_effect' },
                        기타타악기: { name: 'Menus.others_instrument' },
                    },
                },
            },
        },
        expansion: {
            title: 'Workspace.load_exapnsion_block',
            mainType: 'expansion',
        },
        projects: {
            title: 'Menus.my_project',
            navigations: {
                projects: {
                    name: 'Menus.my_project',
                },
                favorites: {
                    name: 'Menus.marked_project',
                },
            }
        }
    },
};
