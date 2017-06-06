word_list = ['hello','world','my','name','is','Anna']

def findStr(li,c):
    # if not isinstance(li,list) or not isinstance(c,str):
    #     print "Usage: findStr(list,char)"
    #     return
    arr = []

    for i in range(0,len(li)):
        if isinstance(li[i],str):
            if li[i].count(c) >= 1:
                arr.append(li[i])

            # for j in range(0,li[i]):
            #     if arr[i].find(c) == j:
            #         arr.append(arr[i])

    print arr
findStr(word_list,"o");

