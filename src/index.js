module.exports = function check(str, bracketsConfig) {
    str = str.split('');
    for (let i = 0; i < str.length; i++) {
        for (let n = 0; n < bracketsConfig.length; n++) {
            if (str[i] === bracketsConfig[n][0] && str[i + 1] === bracketsConfig[n][1]) {
                str.splice(i, 2);
                i = -1;
            }
        }
    }
    return str.length === 0? true : false;
};
