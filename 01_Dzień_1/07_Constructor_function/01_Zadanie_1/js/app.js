const user = {
    }




function user1(name){
    return {
        name,
        score: 0,
        updateScore(amount){
        this.score += amount;
        }
    }
}
//funckja konstruktora, wszystkie wartosci dopisywane do this


function User(name){            //taki dunder init jak w pythonie
    this.name = name;
    this.score = 0;
}

User.prototype.updateScore = function (amount){
    this.score += amount;
}

class User2 {
    constructor(name) {
        this.name = name;
        this.score = 0;
    }

    updateScore(amount) {
        this.score += amount;
    }
}

const u2 = new User2('jacek');




// const u = new User('jaro');
// const u2 = new User('janusz');
// u2.updateScore(42);
// console.log(u);
// console.log(u2);


// zaimplementuj swojego mapa do tablicy

Array.prototype.myMap = function (cb) {
    const res = [];

    for (let i = 0; i < this.length; i++) {
        const newItem = cb(this[i], i, this);
        res.push(newItem);
    }

    return res;
}


// napisz myFilter

Array.prototype.myFilter = function (predicate) {
    const res = [];

    for (let i =0; i < this.length; i++) {
        if (predicate(this[i], i, this)){
            res.push(this[i]);
        }
    }

    return res;
}

//myReduce


const data = [1,2,3,4];

const result = data.map((item, idx, arr) => item * 2);
const result2 = data.myMap((item, idx, arr) => item * 2);

console.log(result2)



// zaimplementuj capitalize do string

String.prototype.capitalize = function() {
    return this[0].toUpperCase() + this.slice(1).toLowerCase();
}

console.log('ala'.capitalize())




function Basket() {
    this.products = []
    this.sum = 0;
}

Basket.prototype.addProduct = function(name, price) {
    this.sum += price;
    this.products.push({name, price});
}

Basket.prototype.showBasket = function() {
    console.log(this.products, `Total: ${this.sum}`)
}


const aliceBasket = new Basket();

aliceBasket.addProduct("pomidor",10);

aliceBasket.addProduct("arbuz",40);

aliceBasket.showBasket();


const bruceBasket = new Basket();

bruceBasket.addProduct("rice", 10);

bruceBasket.addProduct("grzyby mun",50);

bruceBasket.addProduct("tofu",20);

bruceBasket.showBasket();

