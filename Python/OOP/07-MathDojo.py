class MathDojo(object):
    def __init__(self):
        self.result = 0

    def sumList(self,c):
        if type(c) == tuple or type(c) == list:
            tmpSum = 0
            for num in c:
                if type(num) == int:
                    tmpSum += num

            return tmpSum
        else:
            return c
    def add(self,a,b):
        self.result += self.sumList(a)+self.sumList(b)
        return self
    def subtract(self,a,b):
        self.result -= self.sumList(a)-self.sumList(b)
        return self

md = MathDojo()
print md.add((1,3),4).add([3,5,7,8],[2,4.3,1.25]).subtract([2,3],[1.1,2.3]).result
