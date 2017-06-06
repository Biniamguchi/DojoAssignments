import random

def coin_toss():
    heads = 0
    tails = 0
    res   = "heads"
    print "Starting coin toss 5000:"

    for i in range(0,5001):
        if random.randint(0,1) == 0:
            res = "heads"
            heads+=1
        else:
            res = "tails"
            tails+=1

        print "Attempt #{}: Throwing a coin... Its {}!...Total heads:{} | Total tails:{}".format(i,res,heads,tails)

    print "Ending the program, thank you!"
coin_toss()

