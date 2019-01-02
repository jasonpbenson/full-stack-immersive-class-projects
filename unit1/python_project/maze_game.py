

import pygame
import pytmx
from pygame.sprite import Group, groupcollide
from Settings import *
from Sprites import Player
from Sprites import Walls  

pygame.init()

background_image = pygame.image.load("maze_game_map.bmp")
player_image = pygame.image.load("bunny_down_02.png")
fr_image = pygame.image.load("bunny_down_01.png")
bk_image = pygame.image.load("bunny_up_02.png")
r_image = pygame.image.load("bunny_right_01.png")
l_image = pygame.image.load("bunny_left_02.png")

player = Player(player_image, fr_image, bk_image, r_image, l_image)
walls = Walls(0,0,0,0)

maze = Group()
player_char = Group()

maze.add(walls)
player_char.add(player)

screen_size = (WIDTH,HEIGHT)
pygame_screen = pygame.display.set_mode(screen_size)
pygame.display.set_caption(TITLE)

game_on = True

while game_on: 
    for event in pygame.event.get():
        if event.type == pygame.QUIT:
            game_on = False 
        elif event.type == pygame.KEYDOWN:
            print(event.key) 
            if event.key == 275: 
                player.shouldMove("right")
                player_image = r_image
            if event.key == 276: 
                player.shouldMove("left")
                player_image = l_image
            if event.key == 273: 
                player.shouldMove("up")
                player_image = bk_image
            if event.key == 274: 
                player.shouldMove("down")
                player_image = fr_image  
    
        elif event.type == pygame.KEYUP:
            print(event.key) 
            if event.key == 275: 
                player.shouldMove("right", False)
                player_image = player_image
            elif event.key == 276: #left arrow
                player.shouldMove("left", False)
                player_image = player_image
            if event.key == 273: #up arrow
                player.shouldMove("up", False)
                player_image = player_image
            elif event.key == 274: #down arrow
                player.shouldMove("down", False) 
                player_image = player_image

    pygame_screen.blit(background_image, [0,0]) 
    
    rect1 = Walls(160, 0, 192, 64)
    maze.add(rect1) 
    rect2 = Walls(192, 32, 224, 96)
    maze.add(rect2)

    
    # wall_hit = groupcollide(maze, player_char, False, False)
    
    player.draw_me(480,480)
    pygame_screen.blit(player_image, [player.x, player.y])

    pygame.display.flip()  

