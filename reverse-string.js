const string = 'Hello Moto'; // Reverse this string

const reverseStringFunc=(val)=> {

    let valSplit =  val.split("").reverse();
    //valSplit.reverse();
    console.log(valSplit.join(""))

}

reverseStringFunc(string)