console.log("Sort number array without using pre define function eg: sort function");


const arrayVal = [102, 34, 1, 333, 67, 9, 90]; // want to sort by asc



for(let i=0; i< arrayVal.length; i++){
    
    for(let j=0; j< arrayVal.length; j++){
        
        
        if(arrayVal[i] < arrayVal[j]) {
            
        
        let tempArraVal = arrayVal[i];
        arrayVal[i] = arrayVal[j];
        arrayVal[j] = tempArraVal;
            
        }
        

        
    }
    
}

console.log(arrayVal)


