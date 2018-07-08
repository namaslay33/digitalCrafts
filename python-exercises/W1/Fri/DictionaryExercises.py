#Exercise 1
phonebook_dict = { 
  'Alice': '703-493-1834', 
  'Bob': '857-384-1234', 
  'Elizabeth': '484-584-2923'
}

lizNum = phonebook_dict["Elizabeth"]
print("Exercise 1")
print("1. "+ lizNum)

phonebook_dict['Kareem'] = '938-584-2923'
kareemNum = phonebook_dict["Kareem"]
print("2. " + kareemNum)


print("3. Before    "+ str(phonebook_dict))
del phonebook_dict['Alice']
print(" After    " + str(phonebook_dict))

phonebook_dict["Bob"] = "968-345-2345"
bobNum  = phonebook_dict["Bob"]
print("4. Bob's new #: " + bobNum)

for key,value in phonebook_dict.items():
    print(key)
    print(value)

# Exercise 2
ramit = { 
  'name': 'Ramit', 
  'email': 'ramit@gmail.com', 
  'interests': ['movies', 'tennis'], 
  'friends': [ 
     { 
       'name': 'Jasmine', 
       'email': 'jasmine@yahoo.com', 
       'interests': ['photography', 'tennis']
     }, 
     { 
        'name': 'Jan', 
        'email': 'jan@hotmail.com', 
        'interests': ['movies', 'tv'] 
     } 
    ] 
}

print("Exercise 2")
print("1. " + ramit ["email"])
print("2. " + ramit ["interests"] [0])
print("3. " + ramit ["friends"] [0] ["email"])
print("4. " + ramit ["friends"] [1] ["interests"] [1])

#Exercise 3 - Letter Summary

word = input("What is the word? \n")
letter_histogram = {

}

for letter in word:
    letter_histogram[letter] = word.count(letter)

print(letter_histogram)  

#Exercise 4 - Word Summary
phrase = input("Enter a phrase: \n")

phrase_histogram = {

}

word_split = phrase.split()

for split in word_split:
    phrase_histogram[split] = phrase.count(split)

print(phrase_histogram)

#Bonus Challenge




    



