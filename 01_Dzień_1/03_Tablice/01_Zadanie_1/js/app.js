function distFromAverange(array){
    if (array.length === 0 ){
        throw new Error('something happens')
    }
    const sum = array.reduce((acc, ce) => acc + ce) / array.length;
    return array.map((element)  => Math.abs(element - sum));

}

console.log(distFromAverange([1,2,3,4,5,6,7]))
