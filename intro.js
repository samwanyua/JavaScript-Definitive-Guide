console.log(typeof 34.342341);
/** VALUES
 * >> Numbers
 * JavaScript uses a fixed number of bits, 64 of them, to store a single number value.
 * The actual maximum whole number that can be stored is more in the range of 9
quadrillion (15 zeros)—which is still pleasantly huge
 * For very big or very small numbers, you may also use scientific notation by adding an e (for
exponent), followed by the exponent of the number.
example. 2.998e8 is 2.998 * 10**8

whole numbers = Integers

**ARITHMETIC**
Operators => + - * / %

>> Special numbers in JS:
    infinity and -infinity (+ve and -ve infinities)

    NaN - Not a Number

>> Strings
    rep. text
    You can use single quotes, double quotes, or backticks to mark strings, as long as the quotes at
    the start and the end of the string match  
    
    Escape sequences ex. \', \n, \"
    trings, too, have to be modeled as a series of bits to be able to exist inside the computer. The
    way JavaScript does this is based on the Unicode standard. This standard assigns a number to virtually
    every character you would ever need, including characters from Greek, Arabic, Japanese, Armenian,
    and so on. If we have a number for every character, a string can be described by a sequence of
    numbers.

     JavaScript’s representation uses 16 bits per string element, which can describe up to 2**
     16 different characters. 

    Backtick-quoted strings, usually called template literals, can do a few more tricks.
   
    When you write something inside ${} in a template literal, its result will be computed, converted
    to a string, and included at that position.

    >>Unary operators
    Operators that use two values are called binary operators, 
    while those that take one are called unary operators.
    The minus operator can be used both as a binary operator and as a unary operator.

    examples:
    Increment (++) and Decrement (--)

    Unary Plus (+) and Unary Minus (-)

    Logical Not (!)

    Bitwise NOT (~)

    typeof Operator

    >>Boolean values
    True or false

    console.log("Aardvark" < "Zoroaster")
    // → true 
     uppercase letters are always “less” than lowercase ones
     When comparing strings, JavaScript
    goes over the characters from left to right, comparing the Unicode codes one by one.

    >>Logical  operators
    && and
    || or
    ! not

    ? ternary operator
    console.log(true ? 1 : 2);
    // → 1
    console.log(false ? 1 : 2);
    // → 2
    The value on the left of the question mark “picks” which of the
    other two values will come out. When it is true, it chooses the middle value, and when it is false, it
    chooses the value on the right.

    >>Empty values - used to denote the absence of a meaningful value.
    null
    undefined - have to yield some value.

    >> Automatic Type conversion
    JavaScript goes out of its way to accept almost any programyou give it, even programs that do odd things.
    
    When an operator is applied to the “wrong” type of value, JavaScript will quietly convert that
    value to the type it needs, using a set of rules that often aren’t what you want or expect. This is called
    type coercion. 

    When you want to test whether a value has a real value instead of
    null or undefined, you can compare it to null with the == (or !=) operator.

    But what if you want to test whether something refers to the precise value false? Expressions like
    0 == false and "" == false are true. When you do not want any automatic type conversions to happen,
    there are two additional operators: === and !==. The first tests whether a value is precisely equal to the
    other, and the second tests whether it is not precisely equal. So "" === false is false as expected.

    >>Summary
    We looked at four types of JavaScript values in this chapter: numbers, strings, Booleans, and
    undefined values.
    Such values are created by typing in their name (true, null) or value (13, "abc"). You can combine
    and transform values with operators. We saw binary operators for arithmetic (+, -, *, /, and %), string
    concatenation (+), comparison (==, !=, ===, !==, <, >, <=, >=), and logic (&&, ||), as well as several unary
    operators (- to negate a number, ! to negate logically, and typeof to find a value’s type) and a ternary
    operator (?:) to pick one of two values based on a third value.

##The Definitive Guide - JS

// Anything following double slashes is an English-language comment.
// Read the comments carefully: they explain the JavaScript code.
// A variable is a symbolic name for a value.

// Variables are declared with the let keyword:
let x; // Declare a variable named x

// Values can be assigned to variables with an = sign
x = 0; // Now the variable x has the value 0
x // => 0: A variable evaluates to its value.


// JavaScript supports several types of values
x = 1; // Numbers.
x = 0.01; // Numbers can be integers or reals.
x = "hello world"; // Strings of text in quotation marks.
x = 'JavaScript'; // Single quote marks also delimit strings.
x = true; // A Boolean value.
x = false; // The other Boolean value.
x = null; // Null is a special value that means "no value."
x = undefined; // Undefined is another special value like null.


 JavaScript's most important datatype is the object.
 An object is a collection of name/value pairs, or a string to value map.

 let book = { // Objects are enclosed in curly braces.
 topic: "JavaScript", // The property "topic" has value "JavaScript."
 edition: 7 // The property "edition" has value 7
}; // The curly brace marks the end of the object.


// Access the properties of an object with . or []:
book.topic // => "JavaScript"
book["edition"] // => 7: another way to access property values.
book.author = "Flanagan"; // Create new properties by assignment.
book.contents = {}; // {} is an empty object with no properties.


// Conditionally access properties with ?. (ES2020):
book.contents?.ch01?.sect1 // => undefined: book.contents has no ch01 property.

// JavaScript also supports arrays (numerically indexed lists) of values:
let primes = [2, 3, 5, 7]; // An array of 4 values, delimited with [ and ].
primes[0] // => 2: the first element (index 0) of the array.
primes.length // => 4: how many elements in the array.
primes[primes.length-1] // => 7: the last element of the array.
primes[4] = 9; // Add a new element by assignment.
primes[4] = 11; // Or alter an existing element by assignment.
let empty = []; // [] is an empty array with no elements.
empty.length // => 0


// Arrays and objects can hold other arrays and objects:
let points = [ // An array with 2 elements.
 {x: 0, y: 0}, // Each element is an object.
 {x: 1, y: 1}
];

let data = { // An object with 2 properties
 trial1: [[1,2], [3,4]], // The value of each property is an array.
 trial2: [[2,3], [4,5]] // The elements of the arrays are arrays.
};


// Operators act on values (the operands) to produce a new value.
// Arithmetic operators are some of the simplest:
3 + 2 // => 5: addition
3 - 2 // => 1: subtraction
3 * 2 // => 6: multiplication
3 / 2 // => 1.5: division
points[1].x - points[0].x // => 1: more complicated operands also work
"3" + "2" // => "32": + adds numbers, concatenates strings

// JavaScript defines some shorthand arithmetic operators
let count = 0; // Define a variable
count++; // Increment the variable
count--; // Decrement the variable
count += 2; // Add 2: same as count = count + 2;
count *= 3; // Multiply by 3: same as count = count * 3;
count // => 6: variable names are expressions, too.

// Equality and relational operators test whether two values are equal,
// unequal, less than, greater than, and so on. They evaluate to true or false.
let x = 2, y = 3; // These = signs are assignment, not equality tests
x === y // => false: equality
x !== y // => true: inequality
x < y // => true: less-than
x <= y // => true: less-than or equal
x > y // => false: greater-than
x >= y // => false: greater-than or equal
"two" === "three" // => false: the two strings are different
"two" > "three" // => true: "tw" is alphabetically greater than "th"
false === (x > y) // => true: false is equal to false

// Logical operators combine or invert boolean values
(x === 2) && (y === 3) // => true: both comparisons are true. && is AND
(x > 3) || (y < 3) // => false: neither comparison is true. || is OR
!(x === y) // => true: ! inverts a boolean value

Roughly, an expression is something
that computes a value but doesn’t do anything: it doesn’t alter the program state in any
way. Statements, on the other hand, don’t have a value, but they do alter the state.

A function is a named and parameterized block of JavaScript code that you define
once, and can then invoke over and over again.

// Functions are parameterized blocks of JavaScript code that we can invoke.

function plus1(x) { // Define a function named "plus1" with parameter "x"
 return x + 1; // Return a value one larger than the value passed in
} // Functions are enclosed in curly braces
plus1(y) // => 4: y is 3, so this invocation returns 3+1

let square = function(x) { // Functions are values and can be assigned to vars
 return x * x; // Compute the function's value
}; // Semicolon marks the end of the assignment.

square(plus1(y)) // => 16: invoke two functions in one expression

Arrow functions are most commonly used
when you want to pass an unnamed function as an argument to another function

const plus1 = x => x + 1; // The input x maps to the output x + 1
const square = x => x * x; // The input x maps to the output x * x

plus1(y) // => 4: function invocation is the same
square(plus1(y)) // => 16

// When functions are assigned to the properties of an object, we call
// them "methods." All JavaScript objects (including arrays) have methods:

let a = []; // Create an empty array
a.push(1,2,3); // The push() method adds elements to an array
a.reverse(); // Another method: reverse the order of elements

// We can define our own methods, too. The "this" keyword refers to the object
// on which the method is defined: in this case, the points array from earlier.

points.dist = function() { // Define a method to compute distance between points
 let p1 = this[0]; // First element of array we're invoked on
 let p2 = this[1]; // Second element of the "this" object
 let a = p2.x-p1.x; // Difference in x coordinates
 let b = p2.y-p1.y; // Difference in y coordinates
 return Math.sqrt(a*a + // The Pythagorean theorem
 b*b); // Math.sqrt() computes the square root
};
points.dist() // => Math.sqrt(2): distance between our 2 points

// JavaScript statements include conditionals and loops using the syntax
// of C, C++, Java, and other languages.

function abs(x) { // A function to compute the absolute value.
 if (x >= 0) { // The if statement...
 return x; // executes this code if the comparison is true.
 } // This is the end of the if clause.
 else { // The optional else clause executes its code if
 return -x; // the comparison is false.
 } // Curly braces optional when 1 statement per clause.
} // Note return statements nested inside if/else.

abs(-10) === abs(10) // => true

function sum(array) { // Compute the sum of the elements of an array
 let sum = 0; // Start with an initial sum of 0.
 for(let x of array) { // Loop over array, assigning each element to x.
 sum += x; // Add the element value to the sum.
 } // This is the end of the loop.
 return sum; // Return the sum.
 return sum; // Return the sum.
}

sum(primes) // => 28: sum of the first 5 primes 2+3+5+7+11

function factorial(n) { // A function to compute factorials
 let product = 1; // Start with a product of 1
 while(n > 1) { // Repeat statements in {} while expr in () is true
 product *= n; // Shortcut for product = product * n;
 n--; // Shortcut for n = n - 1
 } // End of loop
    return product; // Return the product
}
factorial(4) // => 24: 1*4*3*2 

function factorial2(n) { // Another version using a different loop
 let i, product = 1; // Start with 1
 for(i=2; i <= n; i++) // Automatically increment i from 2 up to n
 product *= i; // Do this each time. {} not needed for 1-line loops
 return product; // Return the factorial
}
factorial2(5) // => 120: 1*2*3*4*5

Here is a
very simple example that demonstrates how to define a JavaScript class to represent
2D geometric points. Objects that are instances of this class have a single method,
named distance(), that computes the distance of the point from the origin:

class Point { // By convention, class names are capitalized.
 constructor(x, y) { // Constructor function to initialize new instances.
 this.x = x; // This keyword is the new object being initialized.
 this.y = y; // Store function arguments as object properties.
 } // No return is necessary in constructor functions.
 distance() { // Method to compute distance from origin to point.
 return Math.sqrt( // Return the square root of x² + y².
 this.x * this.x + // this refers to the Point object on which
 this.y * this.y // the distance method is invoked.
 );
 }
}
// Use the Point() constructor function with "new" to create Point objects
let p = new Point(1, 1); // The geometric point (1,1).
// Now use a method of the Point object p
p.distance() // => Math.SQRT2



 */

