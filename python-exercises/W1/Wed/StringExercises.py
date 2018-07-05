#1 Uppercase a String
theCarters = "the carters is the name of new the beyonce and jayz cd"
print(theCarters.upper())

#2 Capitalize a String
print(theCarters.capitalize())                      #Capitalizes 1 word
print(theCarters.title())                           #Capitalizes every word in the string

#3 Reverse a String
drake = "That's a real one in your reflection"
drake = drake[::-1] #Note: Used the splice method here
print(drake)

#4 Leetspeak
leetspeak = input("Enter in a phrase: ")
leetspeak = leetspeak.upper()

strA = "A"
strE = "E"
strG = "G"
strI = "I"
strO = "O"
strS = "S"
strT = "T"

if leetspeak.find(strA) >= 0 :
    leetspeak = leetspeak.replace(strA, "4")
if leetspeak.find(strE) >= 0:
    leetspeak = leetspeak.replace(strE, "3")
if leetspeak.find(strG) >= 0 : 
    leetspeak = leetspeak.replace(strG, "6")
if leetspeak.find(strI) >= 0 :
    leetspeak = leetspeak.replace(strI, "1")
if leetspeak.find(strO) >= 0 :
    leetspeak = leetspeak.replace(strS, "5")
if leetspeak.find(strT) == 0 :
    leetspeak = leetspeak.replace(strT, "7")
print(leetspeak)

#5 Long Long Vowel 
words = "I am Supreme"
vowA = "a"
vowE = "e"
vowI = "i"
vowO = "o"
vowU = "u"

if words.find(vowA) >= 0 :
    words = words.replace(vowA, "aaaaa")
if words.find(vowE) >= 0 :
    words = words.replace(vowE, "eeeee")
if words.find(vowI) >= 0 :
    words = words.replace(vowI, "iiiii")
if words.find(vowO) >= 0 :
    words = words.replace(vowO, "ooooo")
if words.find(vowU) >= 0 :
    words = words.replace(vowU, "uuuuu")
print(words)

# #6 Caesar Cipher
cipher = "lbh zhfg hayrnea jung lbh unir yrnearq"

alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]

# print(alphabet)
position = 0
newPosition = 0
finalString = ""

for cipherLetter in cipher :
    if cipherLetter.isspace() == False :
        position = alphabet.index(cipherLetter)
        
        newPosition = position - 13
        if newPosition < 0 :
            newPosition = 26 + newPosition
        finalString = finalString + alphabet[newPosition]
        
print(finalString)






