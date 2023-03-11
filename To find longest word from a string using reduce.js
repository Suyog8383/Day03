function findLongestWord(str) {
  var longestWord = str.split(" ").reduce((a, b) => {
    return b.length > a.length ? b : a;
  }, "");
  return longestWord;
}
console.log(
  "@SN ",
  findLongestWord("The quick brown fox jumped over the lazy dog")
);
