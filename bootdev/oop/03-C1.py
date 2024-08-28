import math

class Calculator:
    def __init__(self):
        self.__result = 0

    def add(self, a):
        self.__result = self.__result + a

    def subtract(self, a):
        self.__result = self.__result - a

    def multiply(self, a):
        self.__result = self.__result * a

    def divide(self, a):
        if a == 0:
            raise Exception('Cannot divide by zero')
        else: 
            self.__result = self.__result / a

    def modulo(self, a):
        if a == 0:
            raise Exception('Cannot divide by zero')
        else: 
            self.__result = self.__result % a

    def power(self, a):
        self.__result = self.__result ** a

    def square_root(self):
        self.__result = math.sqrt(self.__result)       

    def clear(self):
        self.__result = 0

    def get_result(self):
        return self.__result
