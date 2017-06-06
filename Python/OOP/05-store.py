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

soap        = Product(5,"Soap",2,"Dove",5)
paperTowels = Product(10,"Paper Towels",2.5,"Bounty",10)
Gum         = Product(2,"Gum",.25,"5ive",.25)

class Store(object):
    def __init__(self,products,location,owner):
        self.products = products
        self.location = location
        self.owner    = owner
    def addProduct(self,p):
        if type(p) != Product:return
        self.products.append(p)
        print "Added "+p.name
        return self
    def removeProduct(self,name):
        if type(name) != str:return
        cnt=0
        for prod in self.products:
            if prod.name == name:
                self.products.pop(cnt)
                print "Removed "+name
            cnt+=1

        # for ind in range(0,len(self.products)-1):
        #     if self.products[ind].name == name:
        #         self.products.pop(ind)

        #This is ugly
        #if vars(prod).items()[1][1] == name:
            #self.products.pop(ind)

        return self
    def inventory(self):
        print "\nInventory:"

        for prod in self.products:
            print "    "+prod.name

        return self

s = Store(
    [soap,paperTowels],
    "Virginia",
    "John Doe"
)
s.removeProduct("Soap")
s.addProduct(Gum)
s.inventory()
