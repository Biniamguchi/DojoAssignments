import turtle
import math

dist = 1
ang  = 0

for i in range(0,1000):
    turtle.right(ang)
    turtle.forward(dist)
    
    ang = 1.618*i
    dist += 4
