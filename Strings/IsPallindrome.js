function Pallindrome(str) {
  let start = 0;
  let end = str.length - 1;
  for (let i = 0; i < str.length; i++) {
    if (str[start] === str[end]) {
      start++;
      end--;
      if (start > end) {
        return true;
      }
    }
  }
  return false;
}
