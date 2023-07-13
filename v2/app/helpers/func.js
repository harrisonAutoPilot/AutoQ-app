
export const sentenceCase = (str) => {

    if (str) {
        return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase()
    }

};

export const commafy = (num) => {
    if (num && num !== undefined) {
        var str = num.toString().split('.');
        if (str[0].length >= 4) {
            str[0] = str[0].replace(/(\d)(?=(\d{3})+$)/g, '$1,');
        }
        return str.join('.');
    }
};