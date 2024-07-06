const removeFromArray = function(array, args) {
    let updatedArray = array
    for(let i = 1; i < arguments.length; i++){
        updatedArray = updatedArray.filter((arrayElement) => !(arrayElement === arguments[i]));
    }
    return updatedArray
};

// Do not edit below this line
module.exports = removeFromArray;
