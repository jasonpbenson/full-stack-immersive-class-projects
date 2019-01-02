from random import randint  

class Goblin(object):
    def __init__(self,):
        randomPower = randint(2,5)
        randomHealth = randint(10,15)
        self.name = "Goblin"
        self.health = randomHealth
        self.power = randomPower 
    def take_damage(self, ammount_of_damage):
        self.health -= ammount_of_damage
    def is_alive(self):
        return self.health > 0
    def appear(self):
        return """ 
                    / _ \\
                  \_\(_)/_/
                   _//o\\\_ 
                    /   \  
                            """
    
