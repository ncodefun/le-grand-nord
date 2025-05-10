# Python Showcase

# Variables and Data Types
name = "Alice"
age = 30
height = 5.6
is_active = True

# Lists and Dictionaries
fruits = ["apple", "banana", "cherry"]
profile = {"name": name, "age": age, "active": is_active}

# Conditional Statements
if age > 18:
    print("Adult")
else:
    print("Minor")

# Loops
for fruit in fruits:
    print(f"Fruit: {fruit}")

# Functions
def greet(person):
    return f"Hello, {person}!"

print(greet(name))

# Classes and Objects
class Person:
    def __init__(self, name, age):
        self.name = name
        self.age = age

    def say_hello(self):
        print(f"Hi, I'm {self.name} and I'm {self.age} years old.")

alice = Person("Alice", 30)
alice.say_hello()

# Exception Handling
try:
    result = 10 / 0
except ZeroDivisionError:
    print("Cannot divide by zero!")

# List Comprehension
squares = [x**2 for x in range(10)]
print(squares)
