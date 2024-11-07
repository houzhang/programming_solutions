function shortestSubstring1(s, charSet) {
  let charMap = new Map();
  charSet.forEach((char) => {
    charMap.set(char, 0);
  });
  let left = 0;
  let right = 0;
  let subStringLength = 0;
  let minSubString = '';

  while (right < s.length) {
    if (charSet.has(s[right])) {
      charMap.set(s[right], charMap.get(s[right]) + 1);
    }

    while (Array.from(charMap.values()).every((value) => value >= 1)) {
      subStringLength = right - left + 1;

      minSubString = s.substring(left, right + 1);

      if (charSet.has(s[left]) && charMap.get(s[left]) >= 1) {
        charMap.set(s[left], charMap.get(s[left]) - 1);
      }
      left++;
    }

    right++;
  }
  return minSubString.length == 0 ? null : minSubString;
}

// Example usage:
const s = 'figehaeci';
const set = new Set(['a', 'e', 'i']);
console.log(shortestSubstring1(s, set)); // Output: "aeci"

console.log(
  shortestSubstring1('thishasallnecessarycharacters', new Set(['a', 'e', 's']))
);

console.log(
  shortestSubstring1('programmingisfun', new Set(['r', 'a', 'g', 'm']))
);

console.log(shortestSubstring1('hello', new Set(['h', 'r'])));

console.log(shortestSubstring1('abkjweuirpweoirwe', new Set(['a', 'b'])));
