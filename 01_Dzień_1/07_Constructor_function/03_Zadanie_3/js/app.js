function Calculator() {
    this.history = [];
}

Calculator.prototype.add = function(num1, num2) {
    const result = num1 + num2;
    this.history.push(`added ${num1} to ${num2} got ${result}`);
    return result;
}

Calculator.prototype.multiply = function(num1, num2) {
    const result = num1 * num2;
    this.history.push(`multiply ${num1} to ${num2} got ${result}`);
    return result;
}

Calculator.prototype.subtract = function(num1, num2) {
    const result = num1 - num2;
    this.history.push(`subtract ${num1} to ${num2} got ${result}`);
    return result;
}

Calculator.prototype.divide = function(num1, num2) {
    const result = num1 / num2;
    this.history.push(`divide ${num1} to ${num2} got ${result}`);
    return result;
}

Calculator.prototype.printOperations = function () {
    console.log(this.history)
}

Calculator.prototype.clearOperations = function () {
    this.history = [];
}

const calc = new Calculator();
console.log(calc.add(5, 3));
console.log(calc.multiply(10, 20));
console.log(calc.multiply(10, 20));
console.log(calc.history);