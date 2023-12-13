// caesar.js

const encrypt = function (plaintext, key) {
  let lowerCase = plaintext.toLowerCase();
  let splitText = lowerCase.split("");

  let results = splitText.map((char) => {
    if (char === " ") {
      return char;
    }

    let charCode = char.charCodeAt(0);
    let offset = charCode - "a".charCodeAt(0);
    let shifted = (offset + key + 26) % 26;
    return String.fromCharCode(shifted + "a".charCodeAt(0));
  });
  return results.join("");
};

console.log(encrypt("hello world", 2));
