// function addArrays(a, b){
//     const max = Math.max(a.length, b.length);
//     const result = []
//
//
// }


const addArrays = (a, b) => {
    const maxL = Math.max(a.length, b.length);
    const result = [];

    for (let i = 0; i < maxL; i++) {
        result.push((a[i] ?? 0) + (b[i] ?? 0));
    }
    return result
}

console.log(addArrays([4,0,1,3,4], [1,9,6,7,8,17]))