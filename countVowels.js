// example: input : "Hello World"  o/p: { e: 1, o: 2} , use vowels logic

const findVowelsFunc = (val) => {
  vowelsArray = ["a", "e", "i", "o", "u"];
  valSplit = val.split("");
  let outputObj = {};

  valSplit.forEach((element) => {
    const isFind = vowelsArray.includes(element.toLowerCase());

    if (isFind) {
      outputObj[element.toLowerCase()] = outputObj[element.toLowerCase()]
        ? outputObj[element.toLowerCase()] + 1
        : 1;
    }
  });

  return outputObj;
};

let input = "Hello World";
const output = findVowelsFunc(input);
console.log(output);
