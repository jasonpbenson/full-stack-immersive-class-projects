from random import randint  

class Hero(object):
    #every class has
    def __init__(self, name):
        randomPower = randint(5,8)
        randomHealth = randint(10,20)
        self.name = name
        self.power = randomPower
        self.health = randomHealth
    def cheer_hero(self):
        print "Welcome, brave %s" % (self.name)
    def take_damage(self, ammount_of_damage):
        self.health -= ammount_of_damage 
    def is_alive(self):
        return self.health > 0
    def appear(self):
        return """
            /)   /)
           /)   /)
          ( )__( )
           =\ /=  |
          (o) (o)  }
         |  /_.   )
          \(===) /             
       ____}/__\{_____            
      /xxx  0  oooo xxx\      
      xxxx  0  oooo/xxxxx     
      xxxx  0  oooo x  xxx   
      xxxx  0  oooo |   xxx  
      xxxx  0  oooo |    xxx
       xxx  0  oooo/      xxx
      |mmmmmmmmmmmm|       xxx   
      |            |        xxx 
      |     ___    |            /|  _________________
      |      |     |         O|===|* _______________/
      |______|_____|             \|      
       |   |  |   |              
       |   |  |   |
       ( ) {  ( ) |
       |   |  |   |
       |   /  |   /
  ,=.__|_ /  .=._|
  \______]  (___)]
                    """
