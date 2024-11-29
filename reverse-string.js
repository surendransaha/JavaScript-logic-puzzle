const reverseString = (str) => {
    const arrayStrings = str.split("");
    const reverseArray = arrayStrings.reverse();
    const joinArray = reverseArray.join("");
    return joinArray;
}
 
const string = 'Hello Moto';
const result = reverseString(string);
console.log(result);