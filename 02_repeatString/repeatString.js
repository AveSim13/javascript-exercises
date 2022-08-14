const repeatString = function(str, num) {
    var heyString = '';
    while (num > 0) {
        heyString += str;
        num--;
    }
    if (num < 0) {
        heyString = 'ERROR';
    }
    return heyString;
};

// Do not edit below this line
module.exports = repeatString;
