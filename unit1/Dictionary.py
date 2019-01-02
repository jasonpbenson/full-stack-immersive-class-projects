# DICTIONARIES
# Dictionaries are just like lists
# Except instead of numbered indicies they have english indicies

greg = [
    "greg",
    "male",
    "tall",
    "developer",
]

# if i wanted to know greg's job i have to do greg[3]
# implicit rather than explicit = bad code
# A dictionary is like a list of variables:
# name = "Greg"
# gender = "Male"
# height = "Tall"
# job = "Developer"

# represented as: 

greg = {
    "name": "Greg",
    "gender": "Male",
    "height": "Tall",
    "job": "Developer"
}

# print greg["name"]
# print greg["job"]

zombie = {} #dictionary
zombies = [] #list

#zombies.append()

zombie["weapon"] = "fists"
zombie["health"] = 100
zombie["speed1"] = 10

# print zombie
# print zombie["weapon"]

# for key,value in zombie.items():
#     print "Zombie has a key of %s with a value of %s" % (key, value)

# in our game zombie loses weapon arms fall off 

del zombie["weapon"]
# print zombie

isNightime = True
if(isNightime):
    zombie["health"] += 50

# put lists and dictionaries together
zombies = []
zombies.append({
    "name": "Hank",
    "weapon": "Baseball Bat",
    "speed": 10
})

zombies.append({
    "name": "Willie",
    "weapon": "Axe",
    "speed": 3,
    "victims": [
        "squirrel",
        "rabbit",
        "racoon"
    ]
})

# if we wanted to know zombie 1 weapon 

# this will get the first zombie in zombies weapon
print zombies[0]["weapon"]

# this will get the second victim in the second zombie's list
print zombies[1]["victims"][1]

