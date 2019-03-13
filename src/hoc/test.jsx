import a from './withTest';

class b {
    constructor() {
        console.log('b');
    }
}

export default a()(b);
