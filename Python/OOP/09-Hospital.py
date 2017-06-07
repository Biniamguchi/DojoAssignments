class Patient(object):
    def __init__(self,uid,name,allergies):
        self.uid       = uid
        self.name      = name
        self.allergies = allergies
        self.bed       = "none"

class Hospital(object):
    def __init__(self,name,cap):
        self.patients = []
        self.name     = name
        self.capacity = cap
    def admit(self,patient):
        if type(patient) != Patient:return

        if len(self.patients) >= self.capacity:
            return "The hospital is at maximum capacity"
        else:
            patient.bed = len(self.patients)
            self.patients.append(patient)
            return "Admission complete"
    def discharge(self,uid):
        patient = 0
        for key in range(0,len(self.patients)-1):
            patient  = self.patients[key]
            if uid == patient.uid:
                print "Removed: "+patient.name
                patient.bed = "none"
                return self.patients.pop(key)

patient1 = Patient(0,"Bob","Peanuts,Fish")
patient2 = Patient(1,"Bill","Milk,Cheese")
patient3 = Patient(2,"Rick","Beef,Ham")
patient4 = Patient(3,"Sue","Cotton,Copper")

hospital = Hospital("Kaiser",3)
print hospital.admit(patient1)
print hospital.admit(patient2)
print hospital.admit(patient3)
print hospital.admit(patient4)

print hospital.discharge(1).name
