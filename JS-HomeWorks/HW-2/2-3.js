function findLongestWord(string = "") {
    // Write code under this line
    let word = string.split(" ");
    let longestWord = word[0];
    for (let i = 0; i < word.length; i += 1) {
        if (longestWord.length < word[i].length) {
            longestWord = word[i];
        }
    }
    return longestWord;
}
console.log(findLongestWord("The quick brown fox jumped over the lazy dog"));
("jumped");

console.log(findLongestWord("Google do a roll"));
("Google");

console.log(findLongestWord("May the force be with you"));
("force");