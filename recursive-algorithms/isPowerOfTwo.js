var isPowerOfTwo = function(n) {

    //2**x = n;
    if (n % 2 !== 0) {
        return false;
    }

    if (n === 2) {
        return true;
    }
    
    return isPowerOfTwo(n / 2);
};

