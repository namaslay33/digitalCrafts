# def myFirstFunction(myName):
#     print("hello " + myName)

# call function
# myFirstFunction()

# for i in range(0,10) :
#     myFirstFunction()

# myFirstFunction("Sky")

# result = 0
# pi = 3.14
# def circumference(radius, diameter, number) :
#     result = 2 * pi * radius * diameter * number
#     # print(result)
#     return result

# a = circumference(2, 3, 67)
# print(a)
# print(a * 4)
# b = circumference(23)
# print(b)

#Global vs. Local Variables
# printed_hello = False

# def display_hello():
#     print('Hello')
#     printed_hello = True
#     print("inside of function: " + str(printed_hello))

# print("before function gets called: " + str(printed_hello))

# display_hello()

# print("after function gets called: " + str(printed_hello))

# import matplotlib
# matplotlib.use("Agg")
# from matplotlib import pyplot

# f_output = []
# g_output = []

# def f(x):
#     return x

# def g(x):
#     return x

# x_list = list(range(-3, 5))

# [-3, -2, -1, 0, 1, 2, 3, 4]
# for x in x_list:
#   f_output.append(f(x))
#   g_output.append(g(x))

# # f_output = [-3, -2, -1, 0, 1, 2, 3, 4]
# # g_output = [-3, -2, -1, 0, 1, 2, 3, 4]

# pyplot.plot(x_list, f_output, x_list, g_output)
# pyplot.savefig('myplot.png')
# pyplot.close() # start a new plot


# import matplotlib.pyplot as plot
# def f(x):
#     return x + 1

# print(f(5))

#creating a fange for my function
# xs = list(range(-3,4))
# print(xs)

# xs1 = [-3, -2, -1, 0, 1, 2, 3, 4]
# print(xs1)

# def f(x):
#     return x + 1

# xs = list(range(-3,4))
# ys = []

# for x in xs:
#     ys.append(f(x))

import matplotlib.pyplot as plot

def f(x):
    return x * x


xs = list(range(-3, 4))
ys = []

for x in xs:
    ys.append(f(x))

plot.plot(xs, ys)
plot.show()
