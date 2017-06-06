name = ["Anna", "Eli", "Pariece", "Brendan", "Amy", "Shane", "Oscar"]
favorite_animal = ["chicken","billygoat","horse", "cat", "spider", "giraffe", "ticks", "dolphins", "llamas"]

#zip(list1,list2) #Does the same thing

def listToDict(li,li2):
    if type(li) != list or type(li2) != list:
        print "Usage: listToDict(list1,list2)"
        return    
    keys    = 0;
    newDict = {}

    if len(li) >= len(li2):
        keys = li
    else:
        keys = li2

    for i in range(0,len(keys)):
        #If out of bounds, give it the iteration of i as its key or value
        if i > len(li)-1:
            newDict[str(i)] = li2[i]
        elif i > len(li2)-1:
            newDict[li[i]] = str(i)
        else:
            newDict[li[i]] = li2[i]

    return newDict

a = listToDict(name,favorite_animal)
print a
