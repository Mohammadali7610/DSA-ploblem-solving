
function findLongestWord(str) {
  let words = str.split(" ");
  let longestWord = "";

  for (let i = 0; i < words.length; i++) {
    let word = words[i].replace(/[^a-zA-Z]/g, "");

    if (word.length > longestWord.length) {
      longestWord = word;
    }
  }

  return longestWord;
}

let sentence = "My name is ankit jain & i'm from morena";
console.log("Longest word:", findLongestWord(sentence));


