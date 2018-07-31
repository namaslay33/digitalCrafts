#Python Objects Exercise

#1 Basics
class Person:
    def __init__(self, name, email, phone, friends): 
        self.name = name 
        self.email = email 
        self.phone = phone
        self.friends = []

    # def greet(self, other_person): 
    #     print('Hello {}, I am {}!'.format(other_person.name, self.name))

    # def print_contact_info(self):
    #     print("Sonny's email: {}, Sonny's phone number {}".format(self.email , self.phone))

    # # def add_friend(self, friend):
    # #     self.add_friend()



sonny = Person("Sonny", "sonny@hotmail.com", "483-485-4948", [])
jordan = Person("Jordan", "jordan@aol.com", "495-586-3456", [])

# sonny.greet(jordan)
# jordan.greet(sonny)

# print(sonny.email)
# print(sonny.phone)

# print(jordan.email)
# print(jordan.phone)

# sonny.print_contact_info()

# jordan.friends.append("sonny")
# jordan.friends.append("Sonic the Hedgehog")                 #Just testing....
# sonny.friends.append("jordan")

print(jordan.friends)
print(len(jordan.friends))


#2 Make Your Own Class

# class Vehicle:
#     def __init__(self, make, model, year):
#         self.make = make
#         self.model = model
#         self.year = year
    
#     def print_info(self):
#         print(self.year, self.make, self.model)

# car = Vehicle("Nissan", "Leaf", "2015")
# car.print_info()

# truck = Vehicle("Toyota", "Tundra", "2011")   #Just testing with another object
# truck.print_info()
