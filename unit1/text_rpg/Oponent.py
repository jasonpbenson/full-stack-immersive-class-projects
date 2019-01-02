from random import randint  

class Oponent(object):
    def __init__(self, name, experience):
        randomLuckyNumber = randint(1,100)
        self.name = name
        self.health = 30
        self.experience = experience
        self.luckyNumber = randomLuckyNumber

    def take_damage(self, ammount_of_damage):
        self.health -= ammount_of_damage
    def is_alive(self):
        return self.health > 0
    def appear(self):
        return """ 
     ,--.     .--.
    /    \. ./    \\
   /  /\ / " \ /\  \\
  / _/  {~~v~~}  \_ \\
 /     {   |   }     \\
;   /\{    |    }/\   \\
| _/  {    |    }  \_  :
|     {    |    }      |
|    /{    |    }\     |
|   / {    |    } \    |
|  /  {    |    }  \   |
|  \  \    |    /  /   |
|   \  \   |   /  /    |
\    \  \  |  /  /     /
 \   /   ~~~~~   \    /"""
    
cockroach1 = Oponent("Pawn", 10)
cockroach2 = Oponent("Rook", 10)
cockroach3 = Oponent("knight", 10)
cockroach4 = Oponent("Bishop", 10)
cockroach5 = Oponent("Queen", 60)
