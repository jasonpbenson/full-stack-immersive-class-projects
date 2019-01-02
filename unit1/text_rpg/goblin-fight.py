#this is a procedural aproach to a text based rpg game
#the hero is fighting the goblin
#the hero has the option to:
# 1. Fight
# 2. Dance
# 3. Flee

#go get os module from python

import os
import random

#os.system() will take any linux command
#and if python can run it, it will

#command + d = hightligh every instance of hightlighted word and replace every instance of the selected word (edit -> find -> replace)
#get hero name from player
hero_name = raw_input("What is thy name, brave adventurer? ")


def fight():
    print "Welcome, %s. Thou art brave!" % hero_name #this variable is accessible ANYWHERE 
    #declare variables
    #these variables are in the function scope (only accessible in the function [tabbed over])
    #ie Scope =
    #Global
        #-all the way to the left
        #-anyone can see/access
    #Local
        #-tabbed
        #-belongs to function
    hero_health = random.randint(0,10)
    hero_power = random.randint(0,10)
    goblin_health = random.randint(0,10)
    goblin_power = random.randint(0,10)
    
    #print "Fight the goblin"
    #run the game as long as both characters have health > 0 
    while hero_health > 0 and goblin_health > 0:
        print """You have %d health and %d power.
        The goblin has %d health and %d power. 
        What do you want to do?
        1. Fight goblin
        2. Dance!
        3. Flee
        > """ % (hero_health, hero_power, goblin_health, goblin_power)
        
        #alt method for grabbing variables using % in a formatted string:
        # message """You have %d health and %d power.
        # The goblin has %d health and %d power. 
        # What do you want to do?
        # 1. fight goblin
        # 2. do dance
        # 3. flee
        # > """ 
        # print message% (hero_health, hero_power, goblin_health, goblin_power)
        
        #get user's input
        user_input = raw_input()

        if user_input == "1":
            # the hero has decided to attack
            # subtract goblin's health by hero power     
            goblin_health -= hero_power
            print "You have done %d damage to the goblin" % hero_power
        elif user_input == "2":
            goblin_health += 5
            print """You embarrassed yourself!
            You also increased the goblin's health!
            SAD!"""
            print "Your health is now %d" % hero_health
        elif user_input == "3":
            print "Goodbye, %s, you shameful creature!" % hero_name
            #the break statement will end the loop immediately
            break 
        else: 
            #user input invalid
            print "You have stumbled. Try to follow the instruction next time.."
        #not it's the goblin's turn
        #unless he's dead
        if goblin_health > 0: 
            hero_health -= goblin_power
            print "The goblin hits you for %d damage" % goblin_power
            if hero_health <= 0:
                print """Thou hast been slain. 
                Prepare to meet your unmaker
                            ,-.                               
       ___,---.__          /'|`\          __,---,___          
    ,-'    \`    `-.____,-'  |  `-.____,-'    //    `-.       
  ,'        |           ~'\     /`~           |        `.      
 /      ___//              `. ,'          ,  , \___      \    
|    ,-'   `-.__   _         |        ,    __,-'   `-.    |    
|   /          /\_  `   .    |    ,      _/\          \   |   
\  |           \ \`-.___ \   |   / ___,-'/ /           |  /  
 \  \           | `._   `\\  |  //'   _,' |           /  /      
  `-.\         /'  _ `---'' , . ``---' _  `\         /,-'     
     ``       /     \    ,='/ \`=.    /     \       ''          
             |__   /|\_,--.,-.--,--._/|\   __|                  
             /  `./  \\`\ |  |  | /,//' \,'  \                  
            /   /     ||--+--|--+-/-|     \   \                 
           |   |     /'\_\_\ | /_/_/`\     |   |                
            \   \__, \_     `~'     _/ .__/   /            
             `-._,-'   `-._______,-'   `-._,-')"""
        
        #clean up game space after each turn 
        raw_input("Hit enter to continue")
        os.system("clear")


#anytime you have () you're calling a function
fight()
#note
