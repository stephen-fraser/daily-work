const pigLatin = (string) => {
  if (string.length > 1) {
    return string.slice(1) + string[0] + "ay";
  }
  return string + "ay";
};

const main = () => {
  args = process.argv.slice(2);

  const pigLatinWords = args.map(pigLatin);

  const pigLatinSentence = pigLatinWords.join(" ");

  console.log(pigLatinSentence);
};

main();
