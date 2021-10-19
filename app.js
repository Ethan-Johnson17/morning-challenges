// let str = "This is the longest word in the entire sentence, maybe even in the whole world."
function findLongestWord(string) {
    let str = string.split(" ")
    let longest = 0
    let word = null
    for (let i = 0; i < str.length - 1; i++) {
        if (longest < str[i].length) {
            longest = str[i].length;
            word = str[i];
        }
    }
    return word
}

console.log(findLongestWord("This is the longest word in the entire sentence, maybe even in the whole world."))


