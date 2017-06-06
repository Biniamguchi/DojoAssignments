class Car(object):
    def __init__(self,price,speed,fuel,mileage):
        self.price   = price
        self.speed   = speed
        self.fuel    = fuel
        self.mileage = mileage

        if mileage > 10000:
            self.tax     = 15
        else:
            self.tax     = 12

        self.displayAll()
    def displayAll(self):
        print " Price: {}\n Speed:{}\n Fuel:{}\n Mileage:{}\n Tax:{}%\n".format(self.price,self.speed,self.fuel,self.mileage,self.tax)

Challenger = Car(45000,120,12,25000)
Mustang    = Car(9500,130,16,150000)
Supra      = Car(30000,120,18,75000)
Nova       = Car(8800,130,10,275000)
Veyron     = Car(1000000,220,8,25000)
Lambo      = Car(100000,180,14,30000)