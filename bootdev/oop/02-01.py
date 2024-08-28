# By default, all properties and methods in a class are public. That means that you can access them with the . operator:
# Private data members are how we encapsulate logic and data within a class. To make a property or method private, you just need to prefix it with two underscores.


class Wizard:
    def __init__(self, name, stamina, intelligence):

        self.__stamina = stamina
        self.__intelligence = intelligence

        self.name = name
        self.health = stamina * 100
        self.mana = intelligence * 10


