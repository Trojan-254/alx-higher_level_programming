#!/usr/bin/python3
"""This module reads a file"""

def read_file(filename=""):
    """function that reads a file
    and prints it to stdout
    """

    with open(filename, encoding="utf-8") as f:
         read_data = f.read()

          print(read_data, end="")
