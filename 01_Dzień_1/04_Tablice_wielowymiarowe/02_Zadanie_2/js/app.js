function print2DArray(array) {
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array[i].length; j++) {
            console.log(array[i][j]);
        }
    }
}

const twoDArray = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

print2DArray(twoDArray)


const print2DArray = (arr) => {
    // arr.flat().forEach((el) => {
    //     console.log(el);
    // })

    // arr.forEach((subArr) => {
    //     subArr.forEach((el) => {
    //         console.log(el);
    //     })
    // })

    for (const items of arr) {
        for (const item of items){
            console.log(item);
        }
    }
}

print2DArray([[1, 2], [3, 4]])