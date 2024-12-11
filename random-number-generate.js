

const randomNumberFunction = (min, max) => {

    let randomNumber = Math.random();

    let randomNumberResult = Math.floor(randomNumber * (max-min)+1)

    console.log(randomNumberResult)



}

randomNumberFunction(100, 999)