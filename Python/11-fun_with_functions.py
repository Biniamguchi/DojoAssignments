def odd_even():
    for i in range(1,2001):
        if i%2 == 0:
            print "Even:",i
        else:
            print "Odd:",i
#odd_even()

def multiply(li,val):
    newLi = []

    for i in li:
        newLi.append(i*val)

    return newLi
#multiply([2,4,10,16],5)