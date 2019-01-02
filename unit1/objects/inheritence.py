class Car(object): #super class
    def __init__(self, make, model, mpg):
        self.make = make
        self.model = model
        self.mpg = mpg 
    def startCar(self):
        print "%s %s goes Vrooom" % (self.make, self.model)
myCar = Car("Ford", "Focus", 40)

class ElectricCar(Car): #sub-super class #sub-super can only call on it's immediate super class 
    def __init__(self, make, model, batteryLife):
        super(ElectricCar, self).__init__(make, model, None)
        self.batteryLife = batteryLife
    #sub-super can overwrite a super method
    def startCar(self):
        print "%s %s goes ...." % (car2.make, car2.model)


car1 = Car("Toyota", "Camry", "35")

car2 = ElectricCar("Tesla", "S", "100kh")

# myCar.startCar()

print car1.model 
print car2.batteryLife
print car2.mpg
car2.startCar()