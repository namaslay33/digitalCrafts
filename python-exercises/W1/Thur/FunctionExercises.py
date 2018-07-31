#Question 1 - Hello

# def hello(name) :
#     print("Hello " + str(name))

# hello("Igor")

#Question 2 - y = x + 1

import matplotlib.pyplot as plot 

def f(x): 
    return x + 1

xs = list(range(-3, 4)) 
ys = [] 

for x in xs: 
     ys.append(f(x))

plot.plot(x, y) 
plot.show()