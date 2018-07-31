class Character :
    def __init__(self, power, health) :
        self.power = power                                   #created instance variables
        self.health = health

class Hero(Character):                                        #define class
    def __init__(self, power, health)  :                      #initialzed my object
        super() .__init__(power, health)
        self.whoAmI = "hero"
        print(self.whoAmI)

    def testDataTypes(self, goblin) :
        print(goblin.power, goblin.health)
        goblin.power = 100
        goblin.health = 34
        print(goblin.power, goblin.health)

class Goblin(Character):                                      #define class
    def __init__(self, power, health)  :          #initialzed my object
        super() .__init__(power, health)
        self.whoAmI = "goblin"
        print(self.whoAmI)


matt = Hero(10, 4)
travis = Goblin(20, 1)
# myVariable = "Fisher"
# myList = [1,2,3,4]
# veronica = Goblin(4, 5)


# matt.testDataTypes(veronica)

# print(veronica.health)
# print(veronica.power)