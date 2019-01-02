#FOR PYGAME TO WORK MUST INPUT "PYTHONW"
#import pygame
#we downloaded this using pip, so it can be imported
import pygame 
from Hero import Hero
from BadGuy import BadGuy
from Arrow import Arrow 
#get group and groupcollide from the sprite module
from pygame.sprite import Group, groupcollide
from Button import Start_Button 

#initialize pygame--must perform this step
pygame.init()

#make a screen. must be tuple (cannot be changed
screen_size = (512,480)
pygame_screen = pygame.display.set_mode(screen_size)
#set the title of the window that opens
pygame.display.set_caption('Robin Hood')

theHero = Hero() #hero object
badGuy = BadGuy() #bad guy object

badGuys = Group()

heroes = Group()

heroes.add(theHero)
badGuys.add(badGuy)

#make a start button
start_button = Start_Button(pygame_screen) 

# arrows = [] #list to hold arrows 
arrows = Group() #group is a special pygame "list" for Sprites

#===========VARIABLES FOR GAME=========================

background_image = pygame.image.load("background.png") 
goblin_image = pygame.image.load("goblin.png") 
hero_image = pygame.image.load("hero.png") 
monster_image = pygame.image.load("monster.png")
tick = 0
# arrow_image = pygame.image.load("Arrow-copy.png")
# heroLoc = {
#     "x": 0,
#     "y": 0
# }


#===========MAIN GAME LOOP============================

game_on = True
game_start = False 
#loop will run as long as boolean is true
while game_on:
    tick += 1
    if (tick % 90 == 0):
        badGuys.add(BadGuy())
    #in the game loop
    #listen for event and quit if the user closes window
    #========EVENT CHECKER=============================
    for event in pygame.event.get():
        if event.type == pygame.QUIT:
            #the user closed the window (red dot, 'x', et al)
            game_on = False 
        elif event.type == pygame.KEYDOWN:
            #the user pressed a key 
            print(event.key) 
            if event.key == 275: #right arrow/ alt k_ method
                #the user pressed the right arrow, move character right
                theHero.shouldMove("right")
            elif event.key == 276: #left arrow
                theHero.shouldMove("left")
            if event.key == 273: #up arrow
                theHero.shouldMove("up")
            elif event.key == 274: #down arrow
                theHero.shouldMove("down")
            elif event.key == 32: #space bar
                new_arrow = Arrow(theHero)
                arrows.add(new_arrow) #for group need to use add NOT append 
        
        elif event.type == pygame.KEYUP:
            print(event.key) 
            if event.key == 275: 
                theHero.shouldMove("right", False)
            elif event.key == 276: #left arrow
                theHero.shouldMove("left", False)
            if event.key == 273: #up arrow
                theHero.shouldMove("up", False)
            elif event.key == 274: #down arrow
                theHero.shouldMove("down", False)    

        elif event.type == pygame.MOUSEBUTTONDOWN:
            mouse_x, mouse_y = pygame.mouse.get_pos()
            # print mouse_x,mouse_y
            if start_button.rect.collidepoint(mouse_x, mouse_y):
                game_start = True
                bg_music = pygame.mixer.Sound('faf.wav')
                bg_music.play()    

    #=========DRAW STUFF==============================
    #we use blit to draw on the screen. blit = block image transfer
    #blit method takes 2 args:
    #--what to draw
    #--where to draw
    #in the docs... SURFACE = pygame_screen
    pygame_screen.blit(background_image,[0,0])

    if game_start == True:
    
        theHero.draw_me(512,480) 
        pygame_screen.blit(hero_image,[theHero.x, theHero.y])
        
        for arrow in arrows:
            arrow.update_me()
            pygame_screen.blit(arrow.img,[arrow.x, arrow.y])
        
        #draw bad guys
        for badGuy in badGuys:
            badGuy.update_me(theHero)
            pygame_screen.blit(monster_image, [badGuy.x, badGuy.y])
        
        arrow_hit = groupcollide(arrows, badGuys, False, True)

        # print arrow_hit 
        if arrow_hit:
            badGuys.add(BadGuy())

    if game_start == False:
        start_button.setup_message()
        start_button.draw_button() 

    pygame.display.flip() 
    #need to force python3.7==call python3.7 whenever pygame runs 

