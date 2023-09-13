#!/usr/bin/python3
"""This module defines a file writing function"""

def write_file(filename="", text=""):
    """writes a string to a UTF-8 text file"""

    with open(filename, "w", encoding="utf-8") as f:
        return f.write(text)
