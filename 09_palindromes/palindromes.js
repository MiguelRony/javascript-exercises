const palindromes = function (stringToCheck) {
    let stringArray = stringToCheck.split("")
                    .filter(c => c.charCodeAt(0) > 64 && c.charCodeAt(0) < 123 || c.charCodeAt(0) > 47 && c.charCodeAt(0) < 58);

    let normal = stringArray.map(a => a.toLowerCase()).join("")
    let reversed = stringArray.reverse().map(a => a.toLowerCase()).join("")
    
    return normal === reversed
};

// Do not edit below this line
module.exports = palindromes;
