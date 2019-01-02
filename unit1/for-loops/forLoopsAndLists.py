# #a for loop expects a starting point and an ending point
# #the ending point is non-inclusive, meaning it will stop when/before it gets there
# #i equals thing that will change each time loop repeats

# # for i in range(1,10):
# #     print i 

# #a 3rd argument you can hand is called "step"
# #by default step is 1

# for i in range(1,10,2):
#     print i

# #======LISTS======
# #Lists = Arrays in any other language
# #a list is a list of variables 

# student1 = "Brian"
# student2 = "Brandon"
# student3 = "Zac"
# student4 = "J.R."

# # print student1
# # print student2
# #etc

# #a list groups "stuff" and indexes them by number
# #a list index always starts at 0
# #a list is made iwth []
# #when making list separate each index with ,
# students = [
#     "Brian",
#     "Brandon",
#     "Zach",
#     "J.R."
# ]
# student2 = "Zac"
# #all lists have length you can find with len()

# numOfStudents = len(students)
# for i in range(0,numOfStudents):
#     print "Welcome to class, %s" % students[i]

# print students[0]
# print students [3]

# #print students[4] -- ERROR!
# #print students[0] -- first index
# #print students[-1]-- last index

# #a tuple is a list who's elements cannot be changed
# #a tuple is a list made with () instead of []
# students = ("Michael", "Matt", "COdy", "Conner")
# students[3] = "Connor"
# #tuples cannot be changed--useful to prevent unwanted changes

atlantaTeams = []
#to add something to the end of a list you can append
atlantaTeams.append("Falcons")
atlantaTeams.append("Braves")
atlantaTeams.append("Hawks")
atlantaTeams.append("Thrashers")
#LISTNAME.pop() will remove last item in the list
#LISTNAME.pop(3) will remove the 3th element in the list
atlantaTeams.pop() 
atlantaTeams.append("United")
# atlantaTeams.append(3)
# atlantaTeams.append(["Arthur Blank", "Tom Wolfe"])

#sort method for lists

#sort(LIST NAME)

#if you want to sort and not change original
#you can use sorted(LISTNAME) with new variable 

sortedAtlantaTeams = sorted(atlantaTeams)

print sortedAtlantaTeams
print atlantaTeams
print atlantaTeams[1:3]

#reverse sort is the .revers() method

atlantaTeams.reverse()
print atlantaTeams

#if you have a string and want to turn into list you can split

reindeer = "Dasher, Dancer, Prancer, Vixon"
#split expects a delimiter. The delimiter is what you want split to look like each time it finds it it will create a new element
reindeerAsAList = reindeer.split(",")
print reindeerAsAList

#if you want part of a list you use [x:y]
#this will create a copy of the array. it will not change the original
#it will start copying at the xth index and will stop at yth

dancerPrancer = reindeerAsAList[1:3]
print dancerPrancer
