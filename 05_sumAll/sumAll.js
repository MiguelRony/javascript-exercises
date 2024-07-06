const sumAll = function(start, end) {
    if(start < 0 || end < 0) return 'ERROR';
    if(typeof(start) != 'number' || typeof(end) != 'number') return 'ERROR';
    let result = 0;
    let beginning = start;
    let finish = end;
    if(end < start){
        beginning = end;
        finish = start;
    }
    for( let i = beginning; i <= finish; i++){
        result += i;
    }
    return result;
};

// Do not edit below this line
module.exports = sumAll;
