def primeSqr():
    def isPrime(num):
        for i in range(2,num):
            if num%i == 0:
                return False

        return True

    def isSqr(num):
        sqr = 0
        for i in range(0,num):
            sqr = i*i
            if num == sqr:
                return True

        return False

    #This is going to run forever
    for i in range(100,100001):
        if isPrime(i):
            print "Foo"
        elif isSqr(i):
            print "Bar"
        else:
            print "FooBar"
primeSqr()