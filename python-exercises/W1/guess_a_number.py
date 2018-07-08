#Step 1 - Guess a Number

# print("I am thinking of a number between 1 and 10.")
# number = input("What's the number?")
# # secretNumber = int(number)

# while number != 5:
#     if number > 5 or number < 5:
#         print("Nope, Try again")
#         number = input("What's the number?")
#     # elif number < 5:
#     #     print("Nope, Try again")
#     #     number = input("What's the number?")
#     else:
#         break
# print("Yes, you win!")
    

#Step 2 - Give High-Low Hint
# while number != 5:
#     if number > 5:
#         print("Nope, too high. Try again")
#         number = input("What's the number?")
#     elif number < 5:
#         print("Nope, too low. Try again")
#         number = input("What's the number?")
#     else:
#         break
# print("Yes, you win!")

# Step 3 - Randomly Generated Secret Number

# import random
# my_random_number = random.randint(1, 10)

# randoNumber = int(input("What is the secretly generated number?"))

# while randoNumber != my_random_number:
#     if randoNumber > my_random_number:
#         print("Nope, too high. Try again")
#         randoNumber = int(input("What's the random number?"))
#     elif randoNumber < my_random_number:
#         print("Nope, too low. Try again")
#         randoNumber = int(input("What's the random number?"))
#     else:
#         break
# print("Yes, you win!")

#Step 4 - Limit Number of Guesses

# import random
# attempts = 0

# print("This is the random number game. You have 5 chances to guess corectly. May the odds be in your favor.")

# my_random_number = random.randint(1, 10)
# while attempts < 5:
    
#     randoNumber = int(input("What is the secretly generated number? \n "))

#     attempts += 1
#     if randoNumber < my_random_number:
#         print("Nope, too low. Try again. ")
#     if randoNumber > my_random_number:
#         print("Nope too high. Try again. ")
#     if randoNumber == my_random_number:
#         break
#     if attempts < 5:
#         print("You have " + str(5 - attempts) + " guesses left. ") 
# if randoNumber == my_random_number:
#     print("Yes, you win. ")
# else:
#     print("You ran out of guesses. The correct value was " + str(my_random_number) + ". ")

#Step 5

import random
attempts = 0

print("This is the random number game. You have 5 chances to guess corectly. May the odds be in your favor.")

my_random_number = random.randint(1, 10)
while attempts < 5:
    
    randoNumber = int(input("What is the secretly generated number? \n "))

    attempts += 1
    if randoNumber < my_random_number:
        print("Nope, too low. Try again. ")
    if randoNumber > my_random_number:
        print("Nope too high. Try again. ")
    if randoNumber == my_random_number:
        break
    if attempts < 5:
        print("You have " + str(5 - attempts) + " guesses left. ") 
if randoNumber == my_random_number:
    print("Yes, you win. ")
    
    playAgain = input("Do you want to play again? (Y or N) ")

    if playAgain == "N":
        print("Bye. ")
    else:
        print("Rerun game. ") #or some code to get the game to restart.
else:
    print("You ran out of guesses. The correct value was " + str(my_random_number) + ". ")
    
