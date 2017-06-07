def numToFloat(num,digits):
    if type(num) != int:return
    fl = "%.{}f".format(digits)
    return fl%num

n = numToFloat(100,10)
print(n)




