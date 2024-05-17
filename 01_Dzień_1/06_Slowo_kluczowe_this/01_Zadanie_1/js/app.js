const Car = {
    brand: 'Tipo',
    color: 'pink',
    numberOfKilometers: 0,
    inspections: [],
    printCarInfo(){
        console.log(`${this.brand}, ${this.color}, ${this.numberOfKilometers}km`)
    },
    drive(km){
        this.numberOfKilometers += km;
    },
    addInspection: function (inspection) {
      this.inspections.push(inspection);
    },
    showInspections: function () {
        return this.inspections;
    }
}
Car.printCarInfo();
Car.drive(200);
Car.addInspection('2000');
Car.addInspection('2001');
Car.addInspection('2002');
console.log(Car.showInspections());
Car.printCarInfo();




// /this jest referencja do tworzenia obiektu ( cos jak self w klasie w pythonie)
