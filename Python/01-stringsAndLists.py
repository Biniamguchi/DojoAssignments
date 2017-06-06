def findReplace():
    words = "It's Thanksgiving day. It's my birthday, too!"
    print words.find("day")
    newStr = words.replace("day","month")
    print newStr
#findReplace()

def minMax(arr):
    min = arr[0];
    max = arr[0];

    for i in range(0,len(arr)):
        if max < arr[i]:
            max = arr[i]

        if min > arr[i]:
            min = arr[i]
    print min,max
#minMax([2,54,-2,7,12,98])

def firstLast(arr):
    newArr = [
        arr[0],
        arr[len(arr)-1]
    ];

    print newArr[0],newArr[1]
#firstLast(["hello",2,54,-2,7,12,98,"world"])

def newList():
    arr = [19,2,54,-2,7,12,98,32,10,-3,6]

    def sort(arr):
        less    = []
        equal   = []
        greater = []

        if len(arr) > 1:
            pivot = arr[0]
            for i in arr:
                if i < pivot:
                    less.append(i)
                if i == pivot:
                    equal.append(i)
                if i > pivot:
                    greater.append(i)
            return sort(less)+equal+sort(greater)
        else:
            return arr
    arr = sort(arr)

    def split(arr):
        left  = []
        right = []
        j = len(arr)-1
        #Split arr into left and right arrays.
        for i in range(0,len(arr)/2):
            left.append(arr[i])
            right.append(arr[j])
            j-=1;
        #Resort the right half, since we just decremented backwards
        right = sort(right)

        #Push values right
        right.append(0)
        j = len(right)-1
        while j > 0:
            right[j] = right[j-1]
            j-=1
        #Append the left list to the right lists 0th index.
        right[0] = left
        return right
    arr = split(arr)

    print arr
newList()