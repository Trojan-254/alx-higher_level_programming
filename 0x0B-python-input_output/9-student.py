#!/usr/bin/python3
"""This module defines a class Student"""

class Student():
   """Represents the student"""
   def __init__(self, first_name, last_name, age):
       """Initializes a new student"""
       self.first_name = first_name
       self.last_name = last_name
       self.age = age

   def to_json(self):
       """Returns a dictionary representation of the student"""
       return self.__dict__
