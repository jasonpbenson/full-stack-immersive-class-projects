# print "I'm thinking of a number between 1 and 10";
# secretNumber = 3;
# number = int(raw_input("What's the number? "));
# if number == secretNumber:
#     print "Yes! You win!"
# else:
#     print "Nope, try again"

# print "I'm thinking of a number between 1 and 10";
# secretNumber = 5;
# guessNumber = int(raw_input("what's the number? "));
# if guessNumber != secretNumber:
#     print "Nope, try again"
# else:
#     print "Yes! You win"

# print "I'm thinking of a number between 1 and 10";
# secretNumber = 3;
# number = int(raw_input("What's the number? "));
# if number == secretNumber:
#     print "Yes! You win!"
# elif number < secretNumber:
#     print str(number) + " is too low."
# elif number > secretNumber:
#     print str(number) + " is too high."
# else:
#     print "Nope, try again."

#     print "I'm thinking of a number between 1 and 10";
# secretNumber = randomNumber;
# number = int(raw_input("What's the number? "));
# if number == secretNumber:
#     print "Yes! You win!"
# elif number < secretNumber:
#     print str(number) + " is too low."
# elif number > secretNumber:
#     print str(number) + " is too high."
# else:
#     print "Nope, try again."

# secretNumber = str(5)
# gameOn = True
# while(gameOn):
#     userGuess = raw_input("Guess a number between 1 and 10 ")
#     if (userGuess == secretNumber):
#         gameOn = False
#         print "You win!"
#     else:
#         gameOne = True
#         print "Nope, try again"

# secretNumber = str(5)
# gameOn = True
# while(gameOn):
#     userGuess = raw_input("Guess a number between 1 and 10 ")
#     if (userGuess == secretNumber):
#         gameOn = False
#         print "You win!"
#     elif (userGuess < secretNumber):
#         gameOn = True
#         print "Nope, " + str(userGuess) + " is too low."
#     elif (userGuess > secretNumber):
#         gameOn = True
#         print "Nope, " + str(userGuess) + " is too high"
#     else:
#         gameOn = True
#         print "Please refer back to prompt"

#random int
# import random 
# secretNumber = random.randint(1,10)
# print secretNumber
# gameOn = True
# allowedGuesses = 5
# userGuesses = 0
# while(gameOn):
#     userGuesses += 1
#     userGuess = int(raw_input("Guess a number between 1 and 10 "))
#     if (userGuess == secretNumber):
#         gameOn = False
#         print "You win!"
#     elif (userGuesses == allowedGuesses):
#             gameOn = False
#             print "Game Over. The number was %i" % (secretNumber)
#     elif (userGuess < secretNumber):
#         gameOn = True
#         print "Nope, %i is too low." % int(userGuess)
#     elif (userGuess > secretNumber):
#         gameOn = True
#         print "Nope, %i is too high" % int(userGuess)
#     else:
#         gameOn = False
#         print "Game Over."

#play again
# import random 
# secretNumber = random.randint(1,10)
# print secretNumber
# gameOn = True
# allowedGuesses = 5
# userGuesses = 0
# keepPlaying = True 
# while(keepPlaying):    
#     while(gameOn):
#         userGuesses += 1
#         userGuess = int(raw_input("Guess a number between 1 and 10 "))
#         if (userGuess == secretNumber):
#             gameOn = False
#             print "You win!"
#         elif (userGuesses == allowedGuesses):
#             gameOn = False
#             print "Game Over. The number was %i" % (secretNumber)
#         elif (userGuess < secretNumber):
#             gameOn = True
#             print "Nope, %i is too low." % int(userGuess)
#         elif (userGuess > secretNumber):
#             gameOn = True
#             print "Nope, %i is too high" % int(userGuess)
#         else:
#             gameOn = False
#             print "Game Over."
#     playAgain = raw_input("Would you like to play again? (Y or N)")
#     if playAgain == ("n"):
#         keepPlaying = False
#         print "Thanks for playing"
#     else: 
#         secretNumber = random.randint(1,10)
#         print secretNumber
#         gameOn = True
#         userGuesses = 0

#alt error
import random 
secretNumber = random.randint(1,10)
print secretNumber
gameOn = True
allowedGuesses = 5
userGuesses = 0
keepPlaying = True 
while(keepPlaying):    
    while(gameOn):
        userGuesses += 1
        userGuess = int(raw_input("Guess a number between 1 and 10 "))
        if (userGuess == secretNumber):
            gameOn = False
            print "You win!"  
        elif (userGuesses == allowedGuesses):
            gameOn = False
            print "Game Over. The number was %i" % (secretNumber)
        elif (userGuess < secretNumber):
            gameOn = True
            print "Nope, %i is too low." % int(userGuess)
        elif (userGuess > secretNumber):
            gameOn = True
            print "Nope, %i is too high" % int(userGuess)
        elif (userGuess < 1 or userGuess > 10):
            gameOn = True
            print "Invalid character, refer back to prompt"
        else:
            gameOn = False
            print "Game Over."
    playAgain = raw_input("Would you like to play again? (Y or N)")
    if playAgain == ("n"):
        keepPlaying = False
        print "Thanks for playing"
    else: 
        secretNumber = random.randint(1,10)
        print secretNumber
        gameOn = True
        userGuesses = 0
