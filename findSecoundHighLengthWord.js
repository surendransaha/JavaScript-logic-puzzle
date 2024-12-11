console.log("Find seound high length word from given string")

let stringWord = "Hi i am a good programmmer" // good is 2nd high length

let stringWordSplit = stringWord.split(" ");

//console.log(stringWordSplit)

stringWordSplit.sort((a,b)=>{ return b.length - a.length})

console.log(stringWordSplit[1])