from random import randint

class Alien(object):
    #every class has
    def __init__(self, name, health):
        randomLuckyNumber = randint(1,100)
        self.name = name
        self.health = health
        self.experience = 0
        self.luckyNumber = randomLuckyNumber
    def cheer_alien(self):
        print "Welcome, brave %s" % (self.name)
    def take_damage(self, ammount_of_damage):
        self.health -= ammount_of_damage 
    def is_alive(self):
        return self.health > 0
    def appear(self):
        return """

               \    \                       
               /)   /)               
              /)   /)                
             ( )__( )               
             =    =  \             
            (.)_ (.) |                  
            ( .V.    )            
             \ =='  /               
              |/__\|         
          ____/\ 0 /\_____
        /        .         \\
       /         |          \\
      /    '.  _..._  .'     \\
     |       .'     '.       |
     |  '-. /         \ .-'  |
     | _ _  ; L I F E ;  _ _ | 
     |      \         /      |
     |   .-' '._   _.' '-.   |
      \     .   ```   .     /
       \   '     |     '   /
        \___     '    ___/
          |____________|
          XXXXXX#XXXXXXX 
          |            \       
          |             |      
          |    _____    |    
          |      |      |      
          |______|______|         
           |    | |    |               
           |    | |    |
           |    | |    |
           |    | |    |
            ( ) {  ( ) {
           |    | |    |
           |    | |    |
           |____| |____|
           |    | |    |  
      ,=.__|_   | .=.__|
      \______ ___(___)_] 
  
                                """

