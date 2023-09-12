#!/usr/bin/python3
"""This module defines a text-reading function"""

def read_file(filename=""):
    """reads and prints out contents of a text file"""

    with open(filename, encoding="utf-8") as f:
        print(f.read(), end="")
