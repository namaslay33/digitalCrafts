#Question 4 - Day of the Week
print("Please choose a number for the day. Sunday = 0, Monday = 1, Tuesday = 2, Wednesday = 3, Thursday = 4, Friday = 5, Saturday = 6")
day = input("What is the day? ")

dayOfWeek = int(day)
if (dayOfWeek == 0):
    print("Sunday")
elif (dayOfWeek == 1):
    print("Monday")
elif (dayOfWeek == 2):
    print("Tuesday")
elif (dayOfWeek == 3):
    print("Wednesday")
elif (dayOfWeek == 4):
    print("Thursday")
elif (dayOfWeek == 5):
    print("Friday")
else:
    print("Saturday")

# Question 5 - Work or Sleep In
day = int(input("What is the day? "))

if (day > 0 and day < 6):
    print("Go to Work")
else:
    print("Sleep In... zzz")

#Question 6 - Celsius to Fahrenheit
tempCelsius = input("What is the temperature in degrees Celsius?")
tempFahrenheit = int(tempCelsius) * 1.8 + 32.0

print("This is equivalent to " + str(tempFahrenheit) + " F.")

# Question 7 - Tip Calculator
bill = int(input("What is the total bill? "))
service = input("How would you rate the level of service? Good, fair, or bad? ")

goodSer = .2 * bill
fairSer = .15 * bill
badSer = .1 * bill

if (service == "good"):
    bill += goodSer
    print("Tip Amount: $" + '{:,.2f}'.format(goodSer) + " Total Bill: $" + '{:,.2f}'.format(bill))
elif (service == "fair"):
    bill += fairSer
    print("Tip Amount: $" + '{:,.2f}'.format(fairSer) + " Total Bill: $" + '{:,.2f}'.format(bill))
else:
    bill += badSer
    print("Tip Amount: $" + '{:,.2f}'.format(badSer) + " Total Bill: $" + '{:,.2f}'.format(bill))

# Question 8 - Tip Calculator 2
bill = int(input("What is the total bill? "))
service = input("How would you rate the level of service? Good, fair, or bad? ")
split = int(input("Split how many ways? "))

goodSer = .2 * bill
fairSer = .15 * bill
badSer = .1 * bill

if (service == "good"):
    bill += goodSer
    billSplit = bill / split
    print("Tip Amount: $" + '{:,.2f}'.format(goodSer) + " Total Bill: $" + '{:,.2f}'.format(bill) + " Amount per person: $" + '{:,.2f}'.format(billSplit))
elif (service == "fair"):
    bill += fairSer
    billSplit = bill / split
    print("Tip Amount: $" + '{:,.2f}'.format(fairSer) + " Total Bill: $" + '{:,.2f}'.format(bill) + " Amount per person: $" + '{:,.2f}'.format(billSplit))
else:
    bill += badSer
    billSplit = bill / split
    print("Tip Amount: $" + '{:,.2f}'.format(badSer) + " Total Bill: $" + '{:,.2f}'.format(bill) + " Amount per person: $" + '{:,.2f}'.format(billSplit))

# # Question 9 - Print 1 to 10
count = 0
while count < 10:
    count += 1
    print(count)


# # Question 10 - How Many Coins
print("You have 0 coins.")
reply = input("Do you want a coin? ")
coins = 0

while reply == "Yes":
    if (reply == "Yes"):
        coins += 1
        print("Yes. You have " + str(coins) + " coins.") 
        reply = input("Do you want another?")
print("No? Bye")
    