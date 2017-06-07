calls = []

class Call(object):
    def __init__(self,name,phone,time,reason):
        self.uid    = len(calls)
        self.name   = name
        self.phone  = phone
        self.time   = time
        self.reason = reason
        calls.append(self)
    def display(self):
        for i in vars(self).items():
            print i[0]+":",i[1]

call  = Call("Will","123-123-1231","3:30PM","Prank Call")
call2 = Call("Dan","987-654-3210","5:30PM","Question about purchase")
call3 = Call("Minh","456-789-1230","1:30PM","Account assistance")

class CallCenter(object):
    def __init__(self):
        self.calls = []
        self.queue = len(self.calls)
    def add(self,call):
        if type(call) != Call:return
        self.calls.append(call)
        self.queue = len(self.calls)
    def remove(self,phone):
        call = 0
        for ind in range(0,len(self.calls)-1):
            call = self.calls[ind]

            if call.phone == phone:
                print "Removed call from: {}\n".format(call.name)
                self.calls.pop(ind)
                self.queue = len(self.calls)
        
    def info(self):
        for call in self.calls:
            print call.display(),"queue:{}".format(self.queue),"\n"

callCenter = CallCenter()
callCenter.add(call)
callCenter.add(call2)
callCenter.add(call3)
callCenter.info()
callCenter.remove("987-654-3210")
callCenter.info()