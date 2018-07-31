# class MyClass:
#     def SayHello():
#         print("Hello there DigitalCrafts")

# MyClass.SayHello()

# class MyClass:
#     Greeting = ""
#     def __init__(self):                     #initializatoin method
#       print("Upon Initialization: Hello!")
#     def instance_method(self):              #instance method
#       print("hello {0}".format(self.Greeting))
#     def class_method():                      #class method
#       print("Hello class method!")

# digitalCrafts = MyClass()
# MyClass.Greeting = "Matt"
# digitalCrafts.instance_method()

# flatIron = MyClass()

# utAustin = MyClass()
# utAustin.instance_method()
# digitalCrafts.instance_method()

# MyClass.class_method()
# test.class_method()  

#Michael's Lecture
class Car:
    def __init__(self, make, model, color): #initialized the car class with 4 parameters
        self.model = model                  #take
        self.make = make
        self.color = color

    def changeColor(self, newColor):
        # print(f"Changing from {self.color} to {newColor})
        print("Changing from {} to {}".format(self.color, newColor))
        self.color = newColor

    def startCar(self):
        print("Starting the gas car")


michael = Car("Mazda", "CX-5", "Grey")
# print(michael.model)
sam = Car("Toyota", "Tacoma", "Red")
# print(sam.make)
travis = Car("GMC", "H3", "Black")
# print(travis.color)

michael.changeColor("purple")
print(michael.color)

michael.startCar()


#Michael talks about inheritance
class ElectricCar(Car):                                         #parenthesis tells where the class is inheriting from
    def __init__(self, make, model, color, range, autopilot):
        super().__init__(make, model, color)                        #inherited the attributes from Car to ElectricCar
        self.range = range                                          #only need to initialize the attributes specifc to Electric cars
        self.autopilot = autopilot

keith = ElectricCar("Tesla", "Model 3", "Black", 300, True)
print(keith.make)

keith.startCar()
