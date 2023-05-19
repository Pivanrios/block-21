//1.- Write a constructor function that creates a new object with
//the make, model and year properties
class Car{
    constructor(make, model, year){
        this.make = make;
        this.model = model;
        this.year = year;
    }
}//test constructor
const car1 = new Car("Ford", "Mustang", 1996)
//console.log("New object:", car1)

//2.- add a method to show the description of the car
Car.prototype.getDescription = function(){
    console.log(`This is a ${this.year} ${this.make} ${this.model}.`)
}

//3.- Define a subclass for ElectricCar 
//that includes a new range property
class ElectricCar extends Car{
    constructor(make, model, year, range){
        super(make, model, year);
        this.range = range;
    }
}//test subclass
const car2 = new ElectricCar("Tesla", "Model S", 2020, 300)
//console.log("Electric car:", car2);

//4.- Have the ElectricCar prototype override the getDescription method
ElectricCar.prototype.getDescription = function(){
    console.log(`This is a ${this.year} ${this.make} ${this.model} that lasts ${this.range} miles per charge.`)
}

//5.- Test methods of the 2 classes
car1.getDescription();
car2.getDescription();