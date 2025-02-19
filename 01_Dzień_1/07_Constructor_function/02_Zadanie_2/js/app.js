const Robot = function (name) {
  this.name = name;
  this.isFunctional = false;
};

Robot.prototype.sayHi = function (toWho) {
  if (this.isFunctional === true) {
    console.log("Robot " + this.name + " greets " + toWho);
  } else {
    console.log("Robot " + this.name + " is broken");
  }
};

Robot.prototype.changeName = function (newname) {
  console.log("Robot " + this.name + " changes name to " + newname);
  name = newname;
};

Robot.prototype.fixIt = function () {
  this.isFunctional = true;
  console.log("Robot " + this.name + " was fixed");
};


const r2d2 = new Robot('r2d2')
r2d2.sayHi('Sophia');
r2d2.changeName('chatgpt')
r2d2.fixIt();
r2d2.sayHi('Sophia')