from random import randint 

class Hero(object):
    #every class has
    def __init__(self, name):
        self.name = name
        self.health = randint(10,20)
        self.power = randint(5,8) 
    def cheer_hero(self):
        print "Welcome, brave %s" % (self.name)
    def take_damage(self, ammount_of_damage):
        self.health -= ammount_of_damage 
    def is_alive(self):
        return self.health > 0