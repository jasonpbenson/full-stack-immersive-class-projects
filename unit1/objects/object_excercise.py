#primitives: integer, float, string, boolean
#abstract data types (3):
#Dictionary: diction['key']
    #diction = {
    # "key": "value"
    # }
#list: sonny[0] --- will return "item1"
    #aList = [
    # "item1"
    # "item2"
    # ]
#object: sonny.name
#we define with the class keyword
#and then we instantiate an object by calling the class
#classes have constructor functions (__init__), which runs on creation and sets self variables
#objects use .(dot) notation
#values in dictionaries must be set individually, values in sets are universal among all class objects 
#functions within classes are methods 

class Person(object):
    def __init__(self, name, email, phone, friends = []): #this is a constructor, items in the open/close are parameters 
        self.name = name
        self.email = email
        self.phone = phone
        self.friends = []
        self.greeting_count = 0
      
    def greet(self, other_person):
        self.greeting_count += 1
        print 'Hello %s, I am %s!' % (other_person.name, self.name)
    
    def contact_info(self):
        print "%s's email: %s, and %s's phone number: %s" % (self.name, self.email, self.name, self.phone)
    
    def add_friends(self, other_person):
        self.friends.append(other_person)

    def num_friends(self):
        print len(self.friends)

    def __repr__(self):
        return "%s" % (self.friends)

# # Instantiate an instance object of Person with name of 'Sonny', email of 'sonny@hotmail.com', and phone of '483-485-4948', store it in the variable sonny.
sonny = Person("Sonny", "sonny@hotmail.com", "483-485-4948") #here the items in the open/close are arguments 
# # Instantiate another person with the name of 'Jordan', email of 'jordan@aol.com', and phone of '495-586-3456', store it in the variable 'jordan'.
jordan = Person("Jordan", "jordan@aol.com", "495-586-3456")
# # Have sonny greet jordan using the greet method.
sonny.greet(jordan) 
sonny.greet(jordan) 
# # Have jordan greet sonny using the greet method.
# jordan.greet(sonny)
# # Write a print statement to print the contact info (email and phone) of Sonny.
# print sonny.email, sonny.phone
# # Write another print statement to print the contact info of Jordan.
# print "%s's number is %s, and %s's email is %s" % (jordan.name, jordan.phone, jordan.name, jordan.email)

sonny.contact_info()
# jordan.friends.append(sonny)
# sonny.friends.append(jordan)

# print len(jordan.friends) 
# print len(sonny.friends)

# jordan.add_friends(sonny)
# print len(jordan.friends)

jordan.add_friends(sonny.name)
jordan.add_friends(jordan.name)
# print len(jordan.friends)   
print repr(jordan.friends)
# print jordan.friends
jordan.num_friends()
print sonny.greeting_count


class Vehicle(object):
    def __init__(self, make, model, year):
        self.make = make
        self.model = model
        self.year = year

    def print_info(self):
        print self.make, self.model, self.year 

car = Vehicle("Nissan", "Leaf", "2015")
car2 = Vehicle("Subaru", "Crosstrek", "2013")

car.print_info()
car2.print_info()
