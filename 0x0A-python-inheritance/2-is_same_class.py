#!/usr/bin/python3
"""This module checks if an object is exactly an instance of the
   specified class
"""

def is_same_class(obj, a_class):
   """function that checks if an object is exactly
   an instance of the specified class.

   Returns:
          True: on success
          False: on failure
   """

   return (type(obj) == a_class)
