def remDupes(li):
    for i in range(len(li)-1,-1,-1):
        if li[i] == li[i-1]:
            li.pop(i)

    return li
li = remDupes([5,40,18,4,12,5])
print li