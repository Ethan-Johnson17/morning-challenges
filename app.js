let longest = 0
let word = null
// let str = "This is the longest word in the entire sentence, maybe even in the whole world."
function findLongestWord(string) {
    let str = string.split(" ")
    for (let i = 0; i < str.length - 1; i++) {
        if (longest < str[i].length) {
            longest = str[i].length;
            word = str[i];
        }
    }
    return word
}

console.log(findLongestWord("This is the longest word in the entire aibohphobia , maybe even in the whole world."), longest)

// Establish the facts first, then write the function

function isPalindrome(str) {
    // Method #1
    // let arrayValues = string.split('')
    // let reverseArray = arrayValues.reverse()
    // let reverseString = reverseArray.join('')

    // if (str == reverseString) {
    //     console.log('is a palindrome')
    // }
    // else { console.log('it is not a palindrome') }

    // Method #2
    // return str == str.split('').reverse().join('')

    // Method #3
    for (let i = 0; i < Math.floor(str.length / 2); i++) {
        let charStart = str[i]
        let charEnd = str[str.length - 1 - i]
        if (charStart !== charEnd) {
            return false
        }
    }
    return true
}


isPalindrome('racecar')

//common letter
function getMax(str) {
    let max = 0
    let maxChar = ''
    str.split('').forEach(function (char) {
        if (str.split(char).length > max) {
            max = str.split(char).length
            maxChar = char
        }
    });
    return maxChar
}

console.log('The most common letter is', getMax('supercalifragilisticexpealadocious'))

//input string
function mostCommonLetter(str) {
    let seen = {}
    let highestCount = 0
    let highestChar = ''
    //look at each letter
    for (let i = 0; i < str.length; i++) {
        let letter = str[i]
        //write it down if I haven't seen it before, tally.
        if (!seen[letter]) {
            seen[letter] = 1
        } else {
            seen[letter]++
            //if I have seen it before, increase tally
            //compare count of each character,
            if (highestCount < seen[letter]) {
                highestCount = seen[letter]
                highestChar = letter
                //update highest based on character counts
            }

        }
    }
    return highestChar
}

mostCommonLetter('hello')
//output string (character)

//Factors
let num = 72
let factors = []

console.log(`the factors of ${num} are: `)

for (let i = 1; i <= num; i++) {
    if (num % i == 0) {
        console.log(i)
        factors.push(i)
        console.log(factors)
    }
}



function factorize(n) {
    let factors = []
    for (let i = 1; i <= Math.floor(n / 2); i++) {
        if (n % i === 0) {
            factors.push(i)
        }
    }
    factors.push(n)
    return factors
}

// Convert min to hour

function timeConvert(min) {
    if (min >= 60) {
        let hours = Math.floor(min / 60)
        let minutes = min % 60
        console.log(hours, ":", minutes)
    } else if (min < 60) {
        let hours = 0
        console.log(hours, ":", min)
    }
}
