// function sortArray(array){
//     return array.sort((a, b) => a - b); sortuje rosnaco
//     return array.sort((a, b) => a - b); sortuje malejaco
// }


// console.log(sortArray([145,11,3,64,4,6,10]))


const sortArray = (array) =>
    array.sort((a, b) => a.split(' ').at(-1) < b.split(' ').at(-1) ? -1 : 1);

console.log(sortArray(['aaa bbb', 'cccc ddd', 'fff ggg']))


// POPRAWICC!!!