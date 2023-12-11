const reverse = (string) => {
  let reversedWord = "";

  for (let i = string.length - 1; i >= 0; i--) {
    reversedWord += string[i];
  }
  return reversedWord;
};

process.argv.slice(2).forEach((arg) => {
  console.log(reverse(arg));
});
