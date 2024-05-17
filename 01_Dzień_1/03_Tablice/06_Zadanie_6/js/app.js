// function getEvenAverage(array){
//     const evenN = array.filter(items => items % 2 === 0)
//     return evenN
// }


const getEvenAverage = (array) => {
    const even = array.filter(items => items % 2 === 0);

    if (even.length === 0) return null;

    const result = even.reduce((acc, digit) => acc + digit) / even.length

    return result.toFixed(3)
}

console.log(getEvenAverage([1, 2, 3, 4, 5, 6, 7]));