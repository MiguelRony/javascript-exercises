const fibonacci = function(position) {
    // Get the to the fibonacci number in position required
    position = +position
    if (position === 1 || position === 2) return 1
    if (position === 0) return 0
    if (position < 0) return "OOPS"
    let prev = 1
    let current = 1
    for (let i = 2; i < position; i ++){
        let aux = prev + current
        prev = current
        current = aux
    }
    return current;
};

// Do not edit below this line
module.exports = fibonacci;
