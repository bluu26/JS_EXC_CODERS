const fruits = ['apple', 'banana', 'cherry'];

console.log(fruits[0])
console.log(fruits[fruits.length - 1])
console.log(fruits.at(-1));

fruits.forEach((fruit, id, ar) => {
    console.log(fruit)
})
