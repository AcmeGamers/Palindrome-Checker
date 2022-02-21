function palindrome(str) {
  var str = str.toLowerCase().replace(/[^a-zA-Z0-9]/g, "");
  var str2 = str.split("").reverse().join("");
  if (str === str2) {
    return true;
  } else {
    return false;
  }
}

palindrome("eye");
console.log(palindrome("eye"));
