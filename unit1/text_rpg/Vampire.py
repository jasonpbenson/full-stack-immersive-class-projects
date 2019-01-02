from random import randint  
#this is a sub-class of character 
from Char import Char

class Vampire(Char):
    def __init__(self):
        #call parent super
        super(Vampire, self).__init__("Vampire", 15, 4)
    def appear(self):
        return """ 
  ( \.---./ )         /`-.
   \/ e e \/        ,'     '-.
    \  ^  /  __  _,'         `._
     /-"-\.-'                   `.
   //.=|=.\\\                     '.
  // .=|=. \\\                      '.
 \\\ .=|=. //                       \\
  \\\(_=_)//                  ,-'''-,:
    (:| |:)                  '       '\       
     || ||\                  :
     () () \        ,-'''-, :
     || ||  \-.   .'       '\\
     || ||      \:
    ==' '=="""

        
