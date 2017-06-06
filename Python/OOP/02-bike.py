class Bike(object):
    def __init__(self,price,maxSpd):
        self.price  = price
        self.maxSpd = maxSpd
        self.miles  = 0

    def displayInfo(self):
        print self.price,self.maxSpd,self.miles
        return self
    def ride(self):
        print "Riding"
        self.miles += 10
        return self
    def reverse(self):
        print "Reversing"
        self.miles -= 5
        if self.miles < 0:
            self.miles = 0

        return self

slowBike = Bike(250,10)
slowBike.ride()
slowBike.ride()
slowBike.ride()
slowBike.reverse()
slowBike.displayInfo()

midBike  = Bike(500,25)
midBike.ride()
midBike.ride()
midBike.reverse()
midBike.reverse()
midBike.displayInfo()

fastBike = Bike(750,50)
# fastBike.reverse()
# fastBike.reverse()
# fastBike.reverse()
fastBike.displayInfo().reverse().reverse().reverse()