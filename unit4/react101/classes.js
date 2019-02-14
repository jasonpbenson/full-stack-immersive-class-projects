
class Car{
    constructor(make, model, mpg, tankSize){
        this.make = make;
        this.model = model;
        this.mpg = mpg;
        this.tankSize = tankSize
    }
    updateModel(newModel){
        this.model = newModel
    }
    distanceToEmpty(){
        console.log(this.mpg * this.tankSize + " miles left");
    }
    turnOn(){
        console.log("car is on");
    }
}

let gregsCar = new Car("Toyota", "Camry", 36, 15);
gregsCar.distanceToEmpty();

// 'extends' establishes sub class
class ElectricCar extends Car{
    constructor(make, model, batterLife){
        // super calls constructor elements, functions etc from parent
        super(make, model, null, null);
        this.batteryLife = batterLife;
    }
    distanceToEmpty(){
        console.log(this.batteryLife * 10);
    }
}

let davidCummingsCar = new ElectricCar("Tesla", "X", 100);
davidCummingsCar.distanceToEmpty();
davidCummingsCar.turnOn();