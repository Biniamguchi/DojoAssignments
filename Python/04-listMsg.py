def listMsg(arr):
    if not isinstance(arr,list):
        print "Arg must be of type list."
        return

    newStr = ""
    sum    = 0
    types  = []

    for i in range(0,len(arr)):
        if isinstance(arr[i],str):
            newStr += arr[i]
            types.append("str")
        elif isinstance(arr[i],int):
            sum += arr[i]
            types.append("int")
        elif isinstance(arr[i],list):
            types.append("list")
        elif isinstance(arr[i],bool):
            types.append("bool")
        elif isinstance(arr[i],object):
            types.append("object")

    print "Sum:",sum
    print "String:",newStr
    print "The list contains these data types:"

    i = len(types)-1
    while i > 0:
        if types[i] == types[i-1]:
            types.pop(i)
        i-=1

    if len(types) < 1:
        print types[1]
    else:
        for i in types:
            print i
listMsg([1,5,6,2,3])