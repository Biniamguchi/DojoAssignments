def print1To255():
    for i in range(1,256):
        print i

#print1To255();

def printOdd1To255():
    for i in range(1,256):
        if i%2 == 1:
            print i
#printOdd1To255();

def intsAndSum0To255():
    sum = 0
    for i in range(0,256):
        print i,sum
        sum += i
#intsAndSum0To255()

def iterateArr(arr):
    for i in arr:
        print i

    #for i in range(0,len(arr)):
        #print arr[i]
#iterateArr([5,10,15,20]);

def findMax(arr):
    max = arr[0]

    for i in range(0,len(arr)):
        if max < arr[i]:
            max = arr[i]

    print max
#findMax([6,3,48,3])

def printAvg(arr):
    avg = 0
    for i in arr:
        avg += i

    avg /= len(arr)
    print avg
#printAvg([6,12,18,24,30])

def findOdds():
    li = [];
    for i in range(1,256):
        if i%2 == 1:
            li.append(i)
    print li
#findOdds()

def findSqr(arr):
    for i in range(0,len(arr)):
        arr[i] = arr[i]*arr[i]

    return arr
#print findSqr([2,4,6])

def greaterThanY(arr,y):
    count = 0
    for i in arr:
        if i > y:
            count+=1;
            print i
#greaterThanY([5,10,13,2],8)

def noNeg(arr):
    for i in range(0,len(arr)):
        if arr[i] < 0:
            arr[i] = 0

    return arr
#print noNeg([8,4,-2,6,-13]);

def maxMinAvg(arr):
    max = arr[0]
    min = arr[0]
    avg = 0

    for i in range(0,len(arr)):
        if max < arr[i]:
            max = arr[i]

        if min > arr[i]:
            min = arr[i]

        avg += arr[i]

    avg /= len(arr)

    print max,min,avg
#maxMinAvg([5,12,58,3,98,2])

def shiftVals(arr):
    for i in range(0,len(arr)-1):
        arr[i] = arr[i+1]

    arr[len(arr)-1] = 0;
    print arr
#shiftVals([5,10,15,20])

def swapNeg(arr):
    for i in range(0,len(arr)):
        if arr[i] < 0:
            arr[i] = "Dojo"
    print arr
#swapNeg([-4,1,6,4,-2])