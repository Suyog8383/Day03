let str = 101;
function checkPalindromeOrNot(str) {
  let data2 = str.toString();
  let data = data2.split("").reverse().join("");
  if (data2 === data) {
    return "palindrome";
  }
  return "not palindrome";
}
console.log("@SN ", checkPalindromeOrNot(str));
