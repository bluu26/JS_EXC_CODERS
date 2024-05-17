const calculator = {
  save: function (newA, newB) {
    this.a = newA;
    this.b = newB;
  },
  validateFields: function () {
    if (this.a === undefined || this.b === undefined) {
      throw new Error('invalid fields');
    }
  },
  sum: function () {
    this.validateFields();
    return this.a + this.b;
  },
  multiply: function () {
    return this.a * this.b;
  }
};

// calculator.save(2, 3);
console.log(calculator.sum());
console.log(calculator.multiply());
