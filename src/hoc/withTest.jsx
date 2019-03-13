const a = () => () => {
    return class {
        constructor() {
            console.log('constructor!!');
        }
    };
};

export default a;
