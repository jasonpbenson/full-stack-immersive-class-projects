# for i in range(1,11):
#     print i

# userStart = int(raw_input("Select a number to start on "))
# print "You selected %i" % userStart
# userEnd =int(raw_input("Select a number to end on "))
# print "You selected %i" % userEnd

# for i in range(userStart,userEnd):
#     print i

# for i in range (1,11):
#     print i

# startingPoint = False
# while (startingPoint == False):
#     try:
#         start = int(raw_input("Please give me a starting point: "))
#         if (type(start) == int):
#             startingPoint = True
#     except:
#         print "You entered an invalid character, please try again.."
# endingPoint = False
# while (endingPoint == False ):
#     try:
#         end = int(raw_input("Please give me a terminal point: "))+1
#         if (type(end) == int):
#             endingPoint = True
#     except:
#             print "You entered an invalid character, please try again.."

# if (start > end):
#     print "Your starting point is higher than your ending point, and the result is invalid."
# for i in range (start, end):
#     print i

# for i in range(1,10):
#     if i % 2 != 0:
#         print i 

# for i in range(1,6):
#     print "*" * 5

# square = int(raw_input("How large should the square be? "))
# for i in range(1, square):
#     print "*" * square


# userWidth = int(raw_input("Box width? "))
# userHeight = int(raw_input("Box height? "))
# for i in range(userWidth,userHeight):
#     print ("*") + str(userWidth - 2) + ("*")
#     print ("*") + str(userHeight - 2) + ("*")


# a = 0
# for i in listA:
#     if a == 0:
#         print("*"*10).center(20)
#     a += 1
#     if len(i) == 2:
#         print("*   " + i + "   *").center(20)
#     elif len(i) == 1:
#         print("*   " + i + "    *").center(20)
#     else:
#         print("* " + i + "  *").center(20)
    
# Print a triangle consisting of * characters like this:

#    *
#   ***
#  *****
# *******
   
# p = int(raw_input("How big is your triangle? "))
# p = p+1
# for i in range(1,p,2):
#     print (" "*p+i*"*")
#     p -= 1

p = int(raw_input("How big is your triangle? "))
p = p+1
for i in range(1,p,2):
    print ("-"*p+i*"*")
    p -= 1

# Given a number as the height, print a triangle as in "Print a Triangle" but with the given height.

h = int(raw_input("How tall is the triangle? "))
h = h+1
for i in range(1,h):
    print ("-"*h+i*"*")
    h -= 1




# Given a height and width, input by the user, print a box consisting of * characters as its border. Example session:

# $ python box.py
# Width? 6
# Height? 4
# ******
# *    *
# *    *
# ******

