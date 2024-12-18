
// Find top longest word from string
const funcLongestWord = (val) => {

    let splitVal = val.split(" ");

    let wordCount = "";

    for(let data of splitVal){

        if(data.length > wordCount.length){
            wordCount = data
        }

    }

    return wordCount;
}

let text = "find a longest longestlongestword from string";
const result = funcLongestWord(text);
console.log( "RESULT --> ", result)