# # a classis a recipe
# #an object is a thing 
# #the recipe can be used and reused to create multiple objects

# class Car(object): #our recipe for making cars is called Car
#     #whenever we start making a new car __init__ will run
#     #we ALWAYS pass self first
#     def __init__(self):
#         #self is special
#         #self refers to this object 
#         self.make = "Honda"
#         self.model = "Accord"
#         self.year = 2007

# myCar = Car()
# print myCar.make
# print myCar.year 

# yourCar = Car()
# yourCar.make = "Toyota"
# print yourCar.make  

class Car(object):
    def __init__(self, make, model):
        self.make = make
        self.model = model
    def changeModel(self, newModel):
        self.model = newModel

zachsCar = Car("Ford", "F150")
chrisCar = Car("Chevy", "Silverado")
zachsCar.isCool = "Awesome"
print "Chris drives a " + chrisCar.make
print chrisCar.model
print zachsCar.make
print zachsCar.model
print zachsCar.isCool #lines 37 and 38 do the same thing, but 37 can be called multiple times 
# zachsCar.model = "Focus"
# print zachsCar.model
zachsCar.changeModel("Fiesta")
print zachsCar.model