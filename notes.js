/*
ACRONYMS TO LEARN

DRY
YAGNI
TDD
SOLID
Testing pyramid

---------------------------------------------------------------------------------------------------------------------

DRY - Don't Repeat Yourself - corresponding WET stands for Write Everything Twice
https://www.techopedia.com/definition/33513/dry-principle

The idea of the DRY principle is that, using efficiencies and eliminating redundancies, programmers can make code
more efficient and easy to change. At the heart of the DRY principle is the re-use of code modules. For instance,
coding a repeatable task as a function means that function can be inserted and re-used anywhere in the code,
and does not have to be re-written for various calls. Benefits of using the DRY principle include code readability
and ease of maintenance. (Refactoring)

---------------------------------------------------------------------------------------------------------------------

YAGNI - You Aren't Gonna Need It - Do not add functionality until is completely neccessary
https://medium.com/better-programming/yagni-you-aint-gonna-need-it-f9a178cd8e1

It is a principle from Extreme Programming (and somehow related with Lean Thinking) that states that a
programmer should not add functionality until it is completely neccessary. Always implement things when you
actually need them, never when you just foresee that you need them. Whatever the outcome, you will incur a series
of costs that can be either avoided or deferred:

Wrong feature                -->   Cost of building, [Cost of carry + Cost of delay]
Right feature, built wrong   -->   Cost of repair, [Cost of carry + Cost of delay]
Right feature, built right   -->   [Cost of carry + Cost of delay]

Cost of building - All effort spent on analyzing, programming and testing a feature
Cost of delay    - The lost opportunity to build and release another feature now
Cost of carry    - The complexity added by the feature to the code, making the software harder to modify and debug
Cost of repair   - The effort spent on modifying a feature because it is not exactly what you need now

It is important to know that YAGNI is meant to be used in combination with several other practices, such as
continuous refactoring, continuous automated unit testing and continuous integration. Used without these practices
could lead to disorganized code and massive rework.

---------------------------------------------------------------------------------------------------------------------

TDD - Test Driven Development

Refers to a style of programming in which three activities are tightly interwoven: coding,
test (in the form of writing unit tests) and design (in the form of refactoring).

It can be described by the following set of rules:
- write a "single" unit test describing an aspect of the program
- run the test, which should fail bacause the program lacks that feature
- write "just enough" code, the simplest possible, to make the test pass
- refactor the code until it conforms to the simplicity criteria
- repeat, accumulating unit tests over time

Expected Benefits
- many teams report significant reductions in defect rates, at the cost of a moderate increase in initial
  development effort
- the same teams tend to report that these overheads are more than offset by a reduction in effort in projects
  final phases
- although empirical research has so far failed to confirm this, veteran practitioners report that TDD leads
  to improve design qualities in the code, and more generally a higher degree of "internal" or technical
  quality, for instance imporving the metrics of cohesion and coupling

Common Pitfalls
Typical invidual mistakes include:
- forgetting to run tests frequently
- writing too many tests at once
- writing test that are too large or coarse-grained
- writing overly trivial tests, for instance omitting assertions
- writing test for trivial code, for instance accessors

Typical team pitfalls include:
- partial adoption - only a few developers on the team use TDD
- poor maintenance of the test suite - most commonly leading to a test suite with a prohibitively test suite
  (i.e. seldom or never run) - sometimes as a result of poor maintenance, sometimes as a result of team turnover

Skill Levels
1. Beginner:
  - able to write a unit test prior to writing the corresponding code
  - able to code sufficient to make a failing test pass

2. Intermediate:
  - practices "test driven bug fixing": when a defect is found, writes a test exposing the defect before correction
  - able to decompose a compound program feature into a sequence of several unit tests to be written
  - knows and can name a number of tactics to guide the writing of tests (for instance "when testing a recursive
    algorithm, first write a test for the recursion terminating case")
  - able to factor out reusable elements from existing unit tests, yielding situation specific testing tools.

3. Advanced:
  - able to formulate a "roadmap" of planned unit tests for a macroscopic features (and to revise it as neccessary)
  - able to "test drive" a variety of design paradigms: object-oriented, functional, event-driven
  - able to "test drive" a variety of technical domains: computation, user interfaces, persistent data access

---------------------------------------------------------------------------------------------------------------------

SOLID
The first five object-oriented design principles. These principles, when combined together make it easy
for a programmer to develop software that are easy to maintain and extend. They also make it easy for developers
to avoid code smells, easily refactor code, and are also a part of the agile or adaptive software development.

S - Single-responsibility principle - S.R.P.
A class should have one and only one reason to change, meaning that a class should have only one job.

O - Open-closed principle
Object or entities should be open for extension but closed for modification. This simply means that a class
should be easily extandable without modifying the class itself.

L - Liskov substitution principle
The principle defines that objects of a superclass shall be replaceable with objects of its subclasses without
breaking the application. That requires the objects of your subclasses to behave in the same way as the object
of your superclass.

I - Interface segregation principle
A client should never be forced to implement an interface that it doesn't use or clients shouldn't be forced to
depend on methods they don't use.

D - Dependency Inversion principle
Entities must depend on abstractions not on concretions. It states that the high level module must not depend on
the low level module, but they should depend on abstraction.

---------------------------------------------------------------------------------------------------------------------

Testing Pyramid

It is a framework that can help both developers and QAs create high-quality software. It reduces the time required
for developers to identify if a change they introduced breaks a code. It can also be helpful in building a more
reliable test suite. The testing pyramid also referred to as the test automataion pyramid, lays out the types of
tests that should be included in an automated test suite. It also outlines the sequence and frequency of these
tests. The whole point is to offer immediate feedback to ensure that code changes do not distrup existing
features.

LEVEL 1 - Unit tests
Unit tests form the base of the testing pyramid. They test individual components or functionalities to validate
that it works as expected in isolated conditions. It is important to run a number of scenarios in unit tests -
happy path, error handling, etc.
Since this is the largest subset, the unit test must be written to run quickly as possible. Keep in mind that the
number of unit tests will increase as more features are added. This test suite needs to be run every time a new
feature is added. Consequently, developers receive immediate feedback on whether individual features are working
as they are meant to. A fast-running unit suite encourages devs to run it as often as possible. A good way
to build a robust unit test is to practice TDD. Since TDD requires a test to be written before any code, the code
ends up being simpler, clearer and bug-free.

LEVEL 2 - Integration tests
Unit tests verify small pieces of a codebase. However, in order to test how this code interacts with other code
(that form the entire software), integration tests need to be run. Essentially, these are the tests that validate
the interaction of a piece of code with external components. These components can range from database, external
services (APIs) and the like.
Integration tests are the second layer of the test automation pyramid. This means that it should be run as
frequently as unit tests. Fundamentally, they test how a feature communicates with external dependencies. Whether
it is a call to a database or web service, the software needs to communicate effectively and retrieve the right
information to function as expected.
Remember that since integration tests involve imteraction with external services, they will run slower than unit
tests. They also require a preproduction environment in which to run.

LEVEL 3 - End-to-End tests
At the top of the pyramid are the end-to-end tests. These ensure that the entire application is functioning as
required. End-to-end tests do exactly what the name suggests: test that the application is working flawlessly
from start to finish.
When running these tests, it is important to imagine the user's perspective. How would an actual user interact
with the app? How can tests be written to replicate that interaction?
End-to-end tests are at the top of the testing pyramid because they usually the longest to run. They can also
be fragile since they have to test a large variety of user scenarios. Like integration tests, these test may also
require the app to communicate with external dependencies, thus adding to possible bottlenecks in completion.

*/

/*

WET - "Write Everything Twice"
Violations of DRY are typically referred to as WET solutions.
DRY too often promotes pre-optimization, which is unnecessary and sometimes actually hurts your ability to write
code. Sometimes it is more difficult to modify an abstracted component to fit a specific use case.
Definition could be: "Haven't I written this before?" two times, but never three. With this definition the focus
moves away from premature optimization and instead allows you to repeat similar code a couple times. It allows you
to make decision based on the exact use case you are looking at. If you are building a web app, you probably want
to abstract your buttons into a component, because you are going to be using a lot of them. But if there is a
single page that has some special styling, then you don't need to worry too much about abstracting out the
components on the page. In fact, under this system, if you needed a new page that was similar to that special
page, you could just copy/paste and change the code you need. However, at the moment that happens a third times,
it's time to spend a bit of time abstracting out the parts that can be abstracted.


Design patterns
list more than 2
2 examples to explain

Design Patterns

What is a Pattern?

A pattern is a reusable solution that can be applied to commonly occuring problems in software design in writing
applications. Another way of looking at patterns are as templates for how we solve problems - ones
which can be used in quite a few different situations.

3 main benefits:

Patterns are proven solutions: They provide solid approaches to solving issues in software development using proven
techniques that reflect the experience and insights the developers that helped define them bring to the pattern.

Patterns can be easily reused: A pattern usually reflects an out of the box solution that can be adapted to suit
our own needs. This feature makes them quite robust.

Patterns can be expressive: When we look at a pattern there's generally a set structure and vocabulary to the
solution presented that can help express rather large solutions - quite elegantly.


The Constructor Pattern

In classical object-oriented programming languages, a constructor is a special method used to initialize a newly
created object once a memory has been allocated for it. In JavaScript, as almost everything is an object, we're
most often interested in object constructors.
Object constructors are used to create specific types of objects - both preparing the object for use and accepting
arguments which a constructor can use to set the values of member properties and methods when the object is first
created.

Object creation
The three common ways to create new objects in JavaScript:

var newObject = {};

or

var newObject = Object.create(Object.prototype);

or

var newObject = new Object();

There are 4 ways in which keys and values can then be assign to an abject:

1. Dot syntax
Set properties
newObject.someKey = "Hello World";
Get properties
var value = newObject.someKey;

2. square bracket syntax
Set properties
newObject["someKey"] = "Hello World";
Get properties
var value = newObject["someKey"];

3. Object.defineProperty
Set properties
Object.defineProperty(newObject, "someKey", {
  value: "for more control of the property's behavior",
  enumerable: true,
  configurable: true
});

OR

var defineProp = function (obj, key, value) {
  var config = {
    value: value,
    writable: true,
    enumerable: true,
    configurable: true
  };
  Object.defineProperty(obj, key, config)
};

4. Object.defineProperties(newObject, {
  "someKey": {
    value: "Hello World",
    writable: true
  },
  "anotherKey": {
    value: "Foo bar",
    writable: true
  }
})

Basic Constructors
JavaScript doesn't support the concept of classes but it does supprt sepcial constructor functions that work
with objects. By simply prefixing a call to a constructor function with keyword "new", we can tell JavaScript we
would like to the function behave like a constructor and instatiate a new object with the members defined by that
function.

function Car(model, year, miles) {
  this.model = model;
  this.year = year;
  this.miles = miles;

  this.toString = function () {
    return this.model + " has done " + this.miles + " miles";
  };
}

Useage:
We can create new instances of the car

var civic = new Car("Honda Civic", 2009, 20000);
var mondeo = new Car("Ford Mondeo", 2010, 5000);

and then open our browser console to view the output of the toString() method being caaled on these objects

console.log(civic.toString());
console.log(mondeo.toString());

Constructors with prototypes
Functions, like almost all objects in JavaScript, contain a "prototype" object. When we call a JavaScript
constructor to create an object, all the properties of the constructor's prototype are then made available
to the new object. In this fashion, multiple Car objects can be created which access the same prototype.

function Car(mode, year, miles) {
  this.model = model;
  this.year = year;
  this.miles = miles;
}
Car.prototype.toString = function () {
  return this.model + " has done " + this.miles + " miles";
};

var civic = new Car("Honda Civic", 2009, 20000);
var mondeo = new Car("Ford Mondeo", 2010, 5000);

console.log(civic.toString());
console.log(mondeo.toString());


The Prototype Pattern
We can think of the prototype pattern as being based on prototypal inheritance where we can create objects which
act as prototypes for other objects. The prototype object itself effectively used as a blueprint for each object
the constructor creates. If the prototype of the constructor function used contains a property called name for
example (as per the code sample lower down), then each object created by that same constructor will also have this
same property.
One of the benefits of using prototype pattern is that we're working with the prototypal strengths JavaScript has
to offer natively rather than attempting to imitate features of other languages. With other design patterns, this
isn't always the case. Not only is the pattern an easy way to implement inheritance, but it can also come with a
performance boost as well: when defining a function in an object, they're all created by reference (so all child
objects point to the same function) instead of creating their own individual copies.

var myCar = {
  name: "Ford Escort",
  drive: function() {
    console.log("Weeee. I'm driving!");
  },
  panic: function() {
    coonsole.log("Wait. How do you stop this thing?");
  };
};
// Object.create to instantiate a new car
var yourCar = Object.create(myCar);
// Now we can see that one is a prototype of the other
console.log(yourCar.name)

Object.create also allows us to easily implement advanced concepts such as differential inheritance where objects
are able to directly inherit from other objects. We saw earlier that Object.create allows us to initialise object
properties using the second supplied argument. For example:

var vehicle = {
  getModel: function() {
    console.log("The model of this vehicle is.." + this.model);
  }
};

var car = Object.create(vehicle, {
  "id": {
    value: MY_GLOBAL.nextId(),
    // writable: false, configurable: false by default
    enumerable: trueerOUfvdf
  },
  "model": {
    value: "Ford",
    enumerable: true
  }
});

If we wish to implement the prototype pattern without directly using Object.create, we can simulate the pattern:

var vehiclePrototype = {
  init: function(carModel) {
    this.module = carModel;
  },
  getModel: function() {
    console.log("The model of this vehicle is.." + this.model);
  }
};

function vehicle(model) {
  function F() {};
  F.prototype = vehiclePrototype;
  vnew f();
  f.init(model);
  return f;
}

var car = vehicle ("Ford Escort");
car.getModel();

Note: This alternative does not allow the user to define read-only properties in the same manner (as the
vehiclePrototype may be altered if not careful).

A final alternative implementation of the Prototype pattern could be following:

var beget = (function () {
  function F() {}
  return function(proto) {
    F.prototype = proto;
    return new F();
  };
}) ();

One could reference this method from the vehicle function. Note, however that vehicle here is emulating a
constructor, since the prototype pattern does not include any notion of initialization beyond linking an
object to a prototype.



*/

/*
What is an expression in JS?

Any unit of code that can be evaluated to a value is an expression. Since expressions produce values, they
can appear anywhere in a program where JavaScript expects a value such as the arguments of a function
invocation.
An expression is any valid set of literals, variables, operators, and expressions that evaluates to a single
value.

e.g.

---Arithmetich expressions:---
10;    // It is an expression that is evaluated to the numeric value 10 by the JS interpreter.
10+13; // This is another expression that is evaluated to produce the numeric value 23.

---String expressions:---
'hello';
'hello' + 'world'; // evaluates to the string 'hello world'

---Logical expressions:---
Evaluate to the boolean value true or false are considered to be logical expressions.
&&, ||, !

10 > 9               // evaluates to boolean value true
10 > 20              // evaluates to boolean value false
true;                // evaluates to boolean value true
a === 20 && b === 30 // evaluates to true or false based on the values of a and b

---Primary expressions:---
Refer to stand alone expressions such as literal values, certain keywords and variable values
'hello world' // A string literal
23;           // A numeric literal
true;         // A boolean value true
sum;          // Value of variable sum
this;         // A keyword that evaluates to the current object

---Left-hand-side expressions:---
Left-hand-side expressions are those that can appear on the left side of an assignment expression.

// variables such as i and total
i = 10;
total = 0;

// properties of objects
var obj = {} // empty object with no properties
obj.x = 10   // an assingment expression

// elements of array
array[0] = 20;
array[1] = 'hello';

// Invalid left-hand-side errors
++(a + 1); // SyntaxError. Attempting to increment or decrement an expression that is not an lvalue
will lead to errors.

---Assignments expressions:---
When expressions use the = operator to assign a value to a variable, it is called assignemtn expression.
average = 55;

var b = (a = 1);

---Expressions with side effect:---
Expressions with side effects are those that result in a change or a side effect such as setting or
modifying the value of a variable through the assignment operator, function call, incrementing or
decrementing the value of a variable.

sum = 20;
sum ++;

function modify() {
  a *= 10;
}

var a = 10;
modify;


// What is the returned value of a given expression?
The type of the value returned by an expression depends on the elements used in the expression.

// What is the precedence of operators (which de facto dictate the order of expressions to be evaluated in)?
Expressions with higher-precedence operators are evaluated first. Where several operators have equal precedence,
they are evaluated from left to right.

*/