

function abc(arr, callback){

   callback(arr)

    console.log(arr)


}

let arr = [1,2,3,4];

abc(arr, function(arr){

    arr.push(5);

}); // here i added callback function

