export const CommonUtils = {
    toggleClass : (isActive, className) => {
        if(isActive) {
            return className;
        }
        return "";
    },
    createImageUrl : (id) => {
        return `http://playentry.org/uploads/${id.substring(0, 2)}/${id.substring(2, 4)}/thumb/${id}.png`;
    },
    remove : (array, callback) => {
        const arr = [...array];
        const index = arr.findIndex(callback);
        if(index >= 0){
            arr.splice(index, 1);
        }
        return arr;
    },
    generateHash : () => {
        return ('0000' + (Math.random()*Math.pow(36,4) << 0).toString(36)).substr(-4);
    }
}