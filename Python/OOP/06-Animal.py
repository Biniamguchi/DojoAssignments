class Animal(object):
    def __init__(self,name,health):
        self.name   = name
        self.health = health
    def walk(self):
        self.health -= 1
        return self
    def run(self):
        self.health -= 5
        return self
    def displayHealth(self):
        print self.health
        return self

animal = Animal("anim",100)
animal.walk()
animal.walk()
animal.walk()
animal.run()
animal.run()
animal.displayHealth()

class Dog(Animal):
    def __init__(self,name,hp):
        super(Dog,self).__init__(name,hp)
        self.health = 150
    def pet(self):
        self.health += 5
class Dragon(Animal):
    def __init__(self,name,hp):
        super(Dragon,self).__init__(name,hp)
        self.health = 170
    def fly(self):
        self.health -= 10
        return self
    def displayHealth(self):
        super(Dragon,self).displayHealth()
        print "I am a dragon"

dog = Dog("sparky",0)
dog.walk().walk().walk().run().run().pet()
dog.displayHealth()
#dog.fly()

dragon = Dragon("spike",0)
dragon.run().run().fly().fly().fly().displayHealth()

newAnimal = Animal("anim2",123)
#newAnimal.pet()
#newAnimal.fly()