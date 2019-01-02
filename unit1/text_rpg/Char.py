class Char(object): #this is super class aka parent class #all subsequent character classes will inherit from this 
    def __init__(self, name, health, power):
        self.name = name
        self.health = health
        self.power = power 
    
def is_alive(self):
    myBool = self.health > 0
    return myBool
def take_damage(self, ammount_of_damage):
    self.health -= ammount_of_damage 
