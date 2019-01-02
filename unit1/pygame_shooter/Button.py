import pygame.font 
import pygame 

class Start_Button(object):
    def __init__(self, screen):
        # print "Start Button"
        #get screen
        self.screen = screen 
        #how big is screen? need rect
        self.screen_rect = screen.get_rect()

        #set width of button image
        self.width = 80
        #set height of button
        self.height = 40
        #set color
        self.button_color = 146,82,165 
        self.text_color = 255, 255, 255
        #get font from pygame
        self.font = pygame.font.Font(None, 52)
        #set rectangle of button
        self.rect = pygame.Rect(0, 0, self.width, self.height)
        #set location
        self.rect.center = self.screen_rect.center 

        #create message 
    def setup_message(self):
        self.image_message = self.font.render("Play", True, self.text_color) 
        self.image_message_rect = self.image_message.get_rect() 
        self.image_message_rect.center = self.rect.center 

    def draw_button(self):
        #fill in the button
        self.screen.fill(self.button_color, self.rect) 
        #draw the button
        self.screen.blit(self.image_message, self.image_message_rect)