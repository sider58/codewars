function persistence(num) {
        
    const multiply = (digit) => {

        let count = 0;

        while(digit >= 10) {
            count++;

            const arrayOfNumber = digit.toString().split('').map(Number);
            digit = arrayOfNumber.reduce((acc, val) => acc * val, 1);
        }

        return count;
    } 

    return multiply(num)
}

persistence(39);
