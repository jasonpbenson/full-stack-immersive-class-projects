import pygame
from pygame.sprite import Sprite
from Settings import *

class Player(Sprite):
    def __init__(self, self_image, fr_image, bk_image, r_image, l_image):
        pygame.sprite.Sprite.__init__(self)
        self.x = 64
        self.y = 64
        self.speed = 5
        self.should_move_down = False
        self.should_move_up = False
        self.should_move_left = False
        self.should_move_right = False
        self.rect = pygame.Rect(0,0,32,32)
        self.rect.centerx = self.x 
        self.rect.top = self.y 
        self.self_image = self_image
        self.fr_image = fr_image
        self.bk_image = bk_image
        self.r_image = r_image
        self.l_image = l_image 
    
    def shouldMove(self, direction, start = True):
        if direction == "right":
            self.should_move_right = start 
        if direction == "left":
            self.should_move_left = start 
        if direction == "up":
            self.should_move_up = start
        if direction == "down":
            self.should_move_down = start  
    
    # def collide_with_wall(self, x, y, speed):
    #     for wall in self.rect:
    #         if wall.rect == self.rect: 
    #             return self.collide_with_wall = True
    #         else:
    #             self.collide_with_wall = False

    def draw_me(self,w,h):
        if(self.should_move_right):
            if(self.x <= WIDTH - 28):
                self.x += self.speed
        elif(self.should_move_left):
            if(self.x >= 5):
                self.x -= self.speed
        if(self.should_move_down):
            if(self.y <= HEIGHT - 28):
                self.y += self.speed
        elif self.should_move_up:
            if(self.y >= 5):
                self.y -= self.speed    
                
    def image_selector(self, screen, image):
        screen.blit(image, [self.x, self.y]) 
            
class Walls(Sprite):
    def __init__(self, x1, y1, x2, y2):
        pygame.sprite.Sprite.__init__(self)
        self.x1 = x1
        self.y1 = y1 
        self.x2 = x2
        self.y2 = y2
        self.rect = pygame.Rect
        self.walls = []





    
    
