# #Question 1 - Sum the Numbers

num = [4, 10, 3, 9, 17]
# totalNum = sum(num)
# print("1. " + str(totalNum))

# #Question 2 - Largest Number
# largestNum = max(num)
# print("2. " + str(largestNum))

# #Question 3 - Smallest Number
# smallNum = min(num)
# print("3. " + str(smallNum))

#Question 4 - Even Numbers
# numEven = [0, 1, 2, 3, 4, 5, 6, 7, 8]
# print(numEven[0 : 9 : 2])

#Not Correct below
#if someone just gave me random numbers tho...
# numEven2 = [9, 11, 22, 19, 8, 2]
# num2 = []
# for even in numEven2:
#     if even % 2 == 0:
#         num2.append(numEven2)
# print(num2)
    

#Question 5 - Positive Numbers
# posNum = [ -9, 2, 5, -3, 8]

# for pos in posNum:
#     if pos > 0:
#         print(pos)

#Question 6 - Positive Numbers II

# posNum = [ -9, 2, 5, -3, 8]
# posNum2 = [ ]

# for pos in posNum:
#     if pos > 0:
#         posNum2.append(pos)
# print(posNum2)


#Question 7 - Multiply a List

# myList = [1, 2, 3, 4, 5]   
# myList *= 3
# print(myList)

#Question 8 - Multiply Vectors

# list1 = [5, 0, 3]
# list2 = [2, 4, 8]

# list3 = []

# for x in range(0, len(list1)):
#     list3.append(list1[x] * list2[x])
# print(list3)

#Question 9 - Matrix Addition

###Option 1 - using nested loop
# matrixA = [[1,3],[2,4]]
# matrixB = [[5,2],[1,0]]
# output = [[0,0], [0,0]]
  
# for i in range(len(matrixA)):                           #going through rows
#    for n in range(len(matrixA[0])):                     #going through columns
#        output[i][n] = matrixA[i][n] + matrixB[i][n]
  
# for o in output:
#      print(o)

##Option2 is by importing numpy
# import numpy as np

# matrix1 = np.matrix([[1,3],[2,4]])
# matrix2 = np.matrix([[5,2],[1,0]])

# print(matrix1 + matrix2)

#Question 10 - Matrix Addition II


#Question 11 - De-dup