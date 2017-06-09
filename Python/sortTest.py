def sort(li):
    newLi = []
    tmp = 0

    def getMin(li):
        min = li[0]
        ind = 0

        for i in range(0,len(li)):
            if min > li[i]:
                min = li[i]
                ind = i
        return (ind,min)

    while len(li) > 0:
        res = getMin(li)
        li.pop(res[0])
        newLi.append(res[1])

    return newLi
print sort([18,32,19,16,12,24])

