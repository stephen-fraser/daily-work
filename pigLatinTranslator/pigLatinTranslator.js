const pigLatin = (string) => {
  let addOn = string.charAt(0).concat("ay");

  return string.slice(1).concat(addOn);
};

process.argv.slice(2).forEach((arg) => {
  console.log(pigLatin(arg));
});
