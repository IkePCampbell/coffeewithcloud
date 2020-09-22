A little bit ago I ran across a term that I had never heard before: **method chaining**. After some quick research I found out that method chaining is also referred to as the **named parameter idiom** The overall goal of method chaining is to allow multiple method calls to be chained together in a single line without any variables storing the results of the individual methods. We will go over a more advanced form of Method Chaining in the future. You can do method chaining in any language. For the purpose of this tutorial we will be doing all of our work in Python. You see a lot of method chaining in script such as transforming data and working with cron jobs.

---
We all are familiar with the idea of how calculators work. At their most basic form, there is a number followed by an operator which is followed by another number. Let's implement a simple addition statement in Python.

---
```
firstNumber = 1
secondNumber = 2
result = firstNumber + secondNumber
print(result)
>>> 3
```

---

That was great! There is an issue, though, how do we actually go about the slight nuances with specific operators and numbers. What if we wanted to change the order of the numbers, add an additional number, work with multiple operators? There is a lot that we want to do.

<br>

Let's solve some of your worries with method chaining!

The first thing we are going to do is create a class. **Classes are considered blueprints for objects.**

---
```
class Calculator():
    def __init__(self):
        self.n = []
        self.operator = None
```
---
The init method is the attributes the Calculator Object will have. Our simple calculator will have a list of numbers it will take in, and an operator (in our example, this will be +) To create the object we simply will type in: 

---
```
calculator = Calculator()
``` 
---
Our goal is to make the following statement return true.

---
```
print(calculator.One().Plus().One().Equals() == 2) 
```
---
Lets start by creating the One Method:

---
```
def One(self):
    return self.n.append(1)
```
---
The reason why we have to pass in self as a parameter is so Python knows that we are talking about the object that it is referred to. In our case, we are talking about the object calculator and its list of numbers. Also, the reason why we have to return some form of self is in this case, Python needs to know that the next method called (In our case Plus()) can actually be called. A fun and easy way to explore this concept is to look at the [string operations documentation](https://docs.python.org/2/library/string.html). The reason why I am able to call ```"Ike".lower().upper()``` is because those methods exist and can be called on any string object. It takes the string "Ike", lowercases the text (ike), then turns it into uppercase (IKE) as a result. I didn't have to store any fancy variables. String manipulation is powerful!

Anyways back to the topic, now lets create the Plus() method

---
```
def Plus(self):
    self.operator = "+"
    return self
```
---

Pretty straightforward, the operator has a string variable with the + sign. Many ways to do this, like "Plus", or any assigned value.

So right now, calling One().Plus().One() will have our calculator's data look like this: self.n = [[1,1]] and self.operator="+"

Soooooo how do we actually implement adding them together?

This is where we will create a method we never explicitly call in our One().Plus().One() chain, but will work in the background.
What we will do is everytime a number is added, we will check to see if an operator had just been added, and and then perform the operation. We will need to modify our One() method to:

---
```
def One(self):
    self.n.append(1)
    if self.operator != None:
        self.Operate()
    return self
```
---
and create a Operate()

---
```
def Operate(self):
    if self.operator == "+":
        self.n = sum(self.n)
        self.operator = None
```
---
This is where the magic happens. Because we are appending numbers to a list, we can **store the result of our equations WITHIN the list** so our first number in our list will always be our running total.  This meanas n = [[1,1]], once it gets operated on, n = [[2]]. Then we just reset the operator, and don't have to worry about returning anything!

Because everytime we operate we only have 1 item in the list, our Equals() function is simply

---
```
def Equals(self):
    return self.n
```
---
Lets try our statement at the beginning of this article after putting all of this together.

---
```
print(calculator.One().Plus().One().Equals() == 2) 
>>>True
```
---

And there you go! Check out [the complete source code here.](https://github.com/IkePCampbell/CoffeeWithCloudTutorials) Method chaining is extremely powerful when done in the right situations. Other times method chaining will add more complexity to the readability and end up becoming a problem for you and your team. I am personally going to use this in some of my data aggregation and transformation scripts. I hope you all enjoyed this brief tutorial over a really cool concept.