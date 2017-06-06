# list_one = [1,2,5,6,2]
# list_two = [1,2,5,6,2]

# list_one = [1,2,5,6,5]
# list_two = [1,2,5,6,5,3]

# list_one = [1,2,5,6,5,16]
# list_two = [1,2,5,6,5]

list_one = ['celery','carrots','bread','milk']
list_two = ['celery','carrots','bread','cream']

def tern(cond,ifTrue,ifFalse):
    if cond:
        return ifTrue
    else:
        return ifFalse


def compareArr(arr,arr2):
    if len(arr) > len(arr2) or len(arr2) > len(arr):
        print "The lists are not the same."
        return False

    arrLen = tern(len(arr) > len(arr2),len(arr),len(arr2))

    for i in range(0,arrLen):
        if arr[i] != arr2[i]:
            print "The lists are not the same."
            return False

    print "The lists are the same."
compareArr(list_one,list_two)

