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

// console.log(findLongestWord("This is the longest word in the entire aibohphobia , maybe even in the whole world."), longest)

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

// console.log('The most common letter is', getMax('supercalifragilisticexpealadocious'))

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

// console.log(`the factors of ${num} are: `)

for (let i = 1; i <= num; i++) {
    if (num % i == 0) {
        console.log(i)
        factors.push(i)
        // console.log(factors)
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
    // if (min >= 60) {
    let hours = Math.floor(min / 60)
    let minutes = min % 60
    return hours + ':' + minutes
    // } else if (min < 60) {
    //     let hours = 0
    //     console.log(hours, ":", min)
    // }
    // return Math.floor(min / 60) + ':' + min % 60
}

// console.log(timeConvert(45))


//battle for middle earth
// function battle(good, evil) {
//     let goodScores = [1, 2, 3, 3, 4, 10]
//     let evilScores = [1, 2, 2, 2, 3, 5, 10]
//     let goodSoldiers = good.Split(' ').map(num => parseInt(num))
//     let evilSoldiers = evil.Split(' ').map(num => parseInt(num))

//     let goodTotal = 0
//     for (let i = 0; i < goodSoldiers.length; i++) {
//         let goodSoldier = goodSoldiers[i]
//         let goodScore = goodScores[i]
//         goodTotal = goodScore * goodSoldier
//     }
//     let evilTotal = 0
//     for (let i = 0; i < evilSoldiers.length; i++) {
//         let evilSoldier = evilSoldiers[i]
//         let evilScore = evilScores[i]
//         evilTotal = evilScore * evilSoldier
//     }
//     if (goodTotal === evilTotal)
// }
// let a = 10
// let b = 2
// let c = 2
// function triangleCheck(a, b, c) {
//     if (a + b < c || a + c < b || b + c < a) {
//         return 'Not a triangle'
//     } else return 'Triangle successful built'
// }

// console.log(triangleCheck(1, 10, 2))

// console.log('Is it a triangle?', (a + b < c || a + c < b || b + c < a) ? 'No' : 'Yes')

function isTriangle(...angles) {
    if (angles.length > 3) return 'Not a triangle'
    let sorted = angles.sort((a, b) => a - b)
    console.log(sorted)
    return sorted[2] < sorted[1] + sorted[0]
}

// console.log(isTriangle(10, 20, 31))

function isTriangle2(a, b, c) {
    const large = Math.max(...arguments)
    return large < (a + b + c) - large
}

// console.log('Triangle', isTriangle2(29, 20, 10))


//codebreaker
let data = `eedadn
drvtee
eandsr
raavrd
atevrs
tsrnev
sdttsa
rasrtv
nssdts
ntnada
svetve
tesnvt
vntsnd
vrdear
dvrsen
enarar`.split('\n')

//input string[]
function repeaterCode(arr) {
    let out = ''
    for (let col = 0; col < arr[0].length; col++) {
        //itterate over the first character in each string
        const seen = {}
        let greatest = ''
        let greatestCount = 0
        for (let row = 0; row < arr.length; row++) {
            const char = arr[row][0]
            //most common letter
            seen[char] = seen[char] || 0
            seen[char]++
            if (seen[char] > greatestCount) {
                greatestCount = seen[char]
                greatest = char
            }
        }
        out += greatest
    }
    return out
}
//output string


