
class Battleground(object):
    def __init__(self, name):
        self.name = name    

    def get_info(self):
        return self.name, self.hemisphere 

    def __repr__(self):
        return "%s" % (self.name, self.hemisphere)
    


hamsterdam = Battleground("Hamsterdam")
moleTown = Battleground("Mole Town")
kingdomOfCheese = Battleground("Kingdom of Cheese")
drainLand = Battleground("Drain Land")
potatoSpring = Battleground("Potato Spring")

