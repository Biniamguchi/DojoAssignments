class Product(object):
    def __init__(self,price,name,weight,brand,cost):
        self.price  = price
        self.name   = name
        self.weight = weight
        self.brand  = brand
        self.cost   = cost
        self.status = "For Sale"
    def sell(self):
        self.status = "Sold"
        return self
    def addTax(self,tax):
        return self.cost+tax
    def Return(self,reason):
        if type(reason) != str:return
        reason = reason.lower()

        if reason == "defective":
            self.status = reason
            self.price  = 0
        elif reason == "in box":
            self.status = "For Sale"
        elif reason == "opened":
            self.status = "Used"
            self.cost *= .20
        return self
    def displayInfo(self):
        print " Price:{}\n Name:{}\n Weight:{}\n Brand:{}\n Cost:{}".format(self.price,self.name,self.weight,self.brand,self.cost)
        return self

soap = Product(5,"Soap",2,"Dove",5)
print soap.addTax(12)
soap.sell()
print vars(soap).items()
soap.status = "ASKDJH" # Checking privacy
print vars(soap).items()
soap.Return("in box")
print vars(soap).items()
print "\n"

soap.sell().Return("opened").sell().displayInfo()
# for k,v in vars(soap).items():
#     print k,v