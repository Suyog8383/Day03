function findLongestWord(str) {
  var longestWord = str.split(" ").sort((a, b) => {
    return b.length - a.length;
  });
  return longestWord[0];
}
console.log(
  "@SN ",
  findLongestWord("The quick brown fox jumped over the lazy dog")
);
