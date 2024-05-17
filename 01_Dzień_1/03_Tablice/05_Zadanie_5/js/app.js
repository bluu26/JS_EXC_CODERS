function multiply(array){
    return array.reduce((acc, val) => acc * val, 1);
}

const numbers = [2, 3, 4]
console.log(multiply(numbers));
