let arrayValue = [1, 3, 5, 1, 1, 2, 5, 6, 3, 2, 1];
arrayValue = [...new Set(arrayValue)];
console.log("Output Value ==> ", arrayValue);