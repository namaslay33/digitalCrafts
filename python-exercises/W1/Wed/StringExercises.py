# #1 Uppercase a String
# theCarters = "the carters is the name of new the beyonce and jayz cd"
# print(theCarters.upper())

# #2 Capitalize a String
# print(theCarters.capitalize())

# #3 Reverse a String
# drake = "That's a real one in your reflection"
# drake = drake[::-1] #Note sky: Used the splice method here
# print(drake)

# #4 Leetspeak
lion = "The Circle of Life"
lion = lion.upper()

strA = "A"
strE = "E"
strG = "G"
strI = "I"
strO = "O"
strS = "S"
strT = "T"

if lion.find(strA) >= 0 :
    lion = lion.replace(strA, "4")
if lion.find(strE) >= 0:
    lion = lion.replace(strE, "3")
if lion.find(strG) >= 0 :
    lion = lion.replace(strG, "6")
if lion.find(strI) >= 0 :
    lion = lion.replace(strI, "1")
if lion.find(strO) >= 0 :
    lion = lion.replace(strS, "5")
if lion.find(strT) == 0 :
    lion = lion.replace(strT, "7")
print(lion)

#5 

#6 Caesar Cipher
# cipher = "lbh zhfg hayrnea jung lbh unir yrnearq"

# alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]

# print(alphabet)
# position = 0
# newPosition = 0
# finalString = ""

# for cipherLetter in cipher :
#     if cipherLetter.isspace() == False :
#         position = alphabet.index(cipherLetter)
        
#         newPosition = position - 13
#         if newPosition < 0 :
#             newPosition = 26 + newPosition
#         finalString = finalString + alphabet[newPosition]
        
# print(finalString)






