#Python 101 Exercises

#Question 1 - Hello, you!
name = input("What is your name? ")
print("1. Hello " + name + "!")

#Question 2 - HELLO, YOU!
name = input("What is your name?")

upperName = name.upper()
countName = str(len(name))
print("HELLO,  " + upperName + "!")
print("YOUR NAME HAS + " + countName + " LETTERS IN IT! AWESOME!")


# #Question 3 - Madlib
print("Please fill in the blanks below: __(name)__'s favorite subject in school is __(subject)__.")
name = input("What is your name?")
subject = input("What is your favorite subject?")
reply1 = ("{0}'s favorite subject in school is {1}.".format(name,subject))
print(reply1)

