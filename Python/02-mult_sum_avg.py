def multiples():
    def print1000():
        for i in range(1,1001):
            print i
    #print1000()
    def multOf5():
        for i in range(5,1000001):
            if i%5 == 0:
                print i
    #multOf5()
multiples()

def sumList():
    a = [1, 2, 5, 10, 255, 3]
    sum = 0

    for i in range(0,len(a)):
        sum += a[i]
    print sum
#sumList()

def avgList():
    a = [1, 2, 5, 10, 255, 3]
    avg = 0

    for i in range(0,len(a)):
        avg += a[i]
    avg /= len(a)
    print avg
#avgList()