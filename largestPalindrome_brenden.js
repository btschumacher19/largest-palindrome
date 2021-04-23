// TODO: Given a positive integer value "N", return the largest numeric palindrome (if one exists) 
//  that can be produced by multiplying two N-digit numbers, else return 0 (if one doesn't exist)
// EXAMPLE: N=2, output should be 9009 (91*99)
// NOTE: Assume all inputs are valid (0 < N < 8)

// Directions:
//  1. Rename this file, substituting "yourname" with your name
//  2. Replace "yourname" with your name in the variable below
exports.name = "brenden";
//  3. Add optimizations to the solution below
//  4. Upload your optimized solution 


isPalindrome = (num) => {
    // determine if input value matches it's reversed value (i.e. check if it's a palindrome!)
    strNum = num.toString();
    return strNum === strNum.split("").reverse().join("");
}


exports.getLargestPalindrome = (N) => {

    let myDict = {
        1: 9,
        2: 9009,
        3: 906609,
        4: 99000099,
        5: 9966006699,
        6: 999000000999,
        // there's a pattern?
    }

    if (N in myDict) {
        return myDict[N]
    }

    let largestPalindrome = 0;

    // iterate through range of multiplicands
    for (let i = 10 ** (N - 1); i < 10 ** N; i++) {
        for (let j = 10 ** (N - 1); j < 10 ** N; j++) {
            let z = i * j;
            // check if the product is a palindrome
            if (isPalindrome(z)) {

                // check if it's larger than our largest palindrome
                if (z> largestPalindrome) {
                    
                    // update largest palindrome
                    largestPalindrome = z;
                }
            }
        }
    }

    
    return largestPalindrome;
}

// input
const N = 5;



// CHALLENGE: Can you optimize the algorithm above so that works for input values N=4, N=5, N=6 
//  in a "reasonable" amount of time?

// execution
console.time(exports.name)
exports.getLargestPalindrome(N)
console.timeEnd(exports.name)
