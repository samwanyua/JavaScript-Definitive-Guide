/**
The most straightforward way to define a JavaScript function is with the function
keyword, which can be used as a declaration or as an expression. ES6 defines an
important new way to define functions without the function keyword: “arrow func‐
tions” have a particularly compact syntax and are useful when passing one function as
an argument to another function

Function declaration consist of function keyword followed by:
    • An identifier that names the function
    • A pair of parentheses around a comma-separated list of zero or more identifiers
    * A pair of curly braces with zero or more JavaScript statements inside


 */
// Print the name and value of each property of o. Return undefined.
// function printprops(o) {
//     for(let p in o) {
//      console.log(`${p}: ${o[p]}\n`);
//     }
// }   

/**
 * The printprops() function is different: its job is to output the names and values of
an object’s properties. No return value is necessary, and the function does not include
a return statement. The value of an invocation of the printprops() function is
always undefined. If a function does not contain a return statement, it simply exe‐
cutes each statement in the function body until it reaches the end, and returns the
undefined value to the caller.
 */

// Compute the distance between Cartesian points (x1,y1) and (x2,y2).
function distance(x1,y1,x2,y2){
    let dx = x2 - x1;
    let dy = y2 -y1;
    return Math.sqrt(dx*dx + dy*dy );
}

// A recursive function (one that calls itself) that computes factorials
// Recall that x! is the product of x and all positive integers less than it.
function factorial(x) {
 if (x <= 1) return 1;
 return x * factorial(x-1);
}





/**
 * One of the important things to understand about function declarations is that the
name of the function becomes a variable whose value is the function itself.

Function declaration statements are “hoisted” to the top of the enclosing script, function, or
block so that functions defined in this way may be invoked from code that appears
before the definition.

The distance() and factorial() functions we’ve described are designed to compute
a value, and they use return to return that value to their caller. The return statement
causes the function to stop executing and to return the value of its expression (if any)
to the caller. If the return statement does not have an associated expression, the
return value of the function is undefined.

A function defined within a block only exists within that block, how‐
ever, and is not visible outside the block.

<<Function expressions>>
Function expressions look a lot like function declarations, but they appear within the
context of a larger expression or statement, and the name is optional.

// This function expression defines a function that squares its argument.
// Note that we assign it to a variable
const square = function(x) { return x*x; };

// Function expressions can include names, which is useful for recursion.
const f = function fact(x) { if (x <= 1) return 1; else return x*fact(x-1); };

// Function expressions can also be used as arguments to other functions:
[3,2,1].sort(function(a,b) { return a-b; });

// Function expressions are sometimes defined and immediately invoked:
let tensquared = (function(x) {return x*x;}(10));

Note that the function name is optional for functions defined as expression

>> Arrow functions
 This syntax is reminiscent of mathematical notation and uses an =>
“arrow” to separate the function parameters from the function body. The function
keyword is not used, and, since arrow functions are expressions instead of statements,
there is no need for a function name, either. 

The general form of an arrow function is a comma-separated list of parameters in parentheses, followed by the => arrow, fol‐
lowed by the function body in curly braces:
    const sum = (x, y) => { return x + y; };


But arrow functions support an even more compact syntax. If the body of the func‐
tion is a single return statement, you can omit the return keyword, the semicolon
that goes with it, and the curly braces, and write the body of the function as the
expression whose value is to be returned:
    const sum = (x, y) => x + y;

Furthermore, if an arrow function has exactly one parameter, you can omit the
parentheses around the parameter list:
    const polynomial = x => x*x + 2*x + 3;

Note, however, that an arrow function with no arguments at all must be written with
an empty pair of parentheses:
    const constantFunc = () => 42;

Also, if the body of your arrow function is a single return statement but the expres‐
sion to be returned is an object literal, then you have to put the object literal inside
parentheses to avoid syntactic ambiguity between the curly braces of a function body
and the curly braces of an object literal:
    const f = x => { return { value: x }; }; // Good: f() returns an object
    const g = x => ({ value: x }); // Good: g() returns an object
    const h = x => { value: x }; // Bad: h() returns nothing
    const i = x => { v: x, w: x }; // Bad: Syntax Error

In the third line of this code, the function h() is truly ambiguous: the code you
intended as an object literal can be parsed as a labeled statement, so a function that
returns undefined is created. On the fourth line, however, the more complicated
object literal is not a valid statement, and this illegal code causes a syntax error.

The concise syntax of arrow functions makes them ideal when you need to pass one
function to another function, which is a common thing to do with array methods like
map(), filter(), and reduce()  for example:

    // Make a copy of an array with null elements removed.
    let filtered = [1,null,2,3].filter(x => x !== null); // filtered == [1,2,3]
    // Square some numbers:
    let squares = [1,2,3,4].map(x => x*x); // squares == [1,4,9,16]

Arrow functions differ from functions defined in other ways in one critical way: they
inherit the value of the this keyword from the environment in which they are
defined rather than defining their own invocation context as functions defined in
other ways do. This is an important and very useful feature of arrow functions, and
we’ll return to it again later in this chapter. Arrow functions also differ from other
functions in that they do not have a prototype property, which means that they can‐
not be used as constructor functions for new classes

>> Nested functions
In JavaScript, functions may be nested within other functions. For example:
    function hypotenuse(a, b) {
    function square(x) { return x*x; }
    return Math.sqrt(square(a) + square(b));
    }

The interesting thing about nested functions is their variable scoping rules: they can
access the parameters and variables of the function (or functions) they are nested
within. In the code shown here, for example, the inner function square() can read
and write the parameters a and b defined by the outer function hypotenuse()


>> Invoking a function
JavaScript functions can be invoked in five ways:
    • As functions
    • As methods
    • As constructors
    • Indirectly through their call() and apply() methods
    • Implicitly, via JavaScript language features that do not appear like normal function invocations


>> Function invocation
Functions are invoked as functions or as methods with an invocation expression

An invocation expression consists of a function expression that evaluates to a
function object followed by an open parenthesis, a comma-separated list of zero or
more argument expressions, and a close parenthesis. If the function expression is a
property-access expression—if the function is the property of an object or an element
of an array—then it is a method invocation expression

The following code includes a number of regular function invocation expressions:
    printprops({x: 1});
    let total = distance(0,0,2,1) + distance(2,1,3,5);
    let probability = factorial(5)/factorial(13);

In an invocation, each argument expression (the ones between the parentheses) is
evaluated, and the resulting values become the arguments to the function. These val‐
ues are assigned to the parameters named in the function definition. In the body of
the function, a reference to a parameter evaluates to the corresponding argument
value.


For regular function invocation, the return value of the function becomes the value of
the invocation expression. If the function returns because the interpreter reaches the
end, the return value is undefined. If the function returns because the interpreter
executes a return statement, then the return value is the value of the expression that
follows the return or is undefined if the return statement has no value.


In ES2020 you can insert ?. after the function expression and before the open paren‐
thesis in a function invocation in order to invoke the function only if it is not null or
undefined. That is, the expression f?.(x) is equivalent (assuming no side effects) to:
    (f !== null && f !== undefined) ? f(x) : undefined

Functions written to be invoked as functions (and not as methods) do not typically
use the this keyword at all. The keyword can be used, however, to determine
whether strict mode is in effect:
    // Define and invoke a function to determine if we're in strict mode.
    const strict = (function() { return !this; }());



Recursive function - a function that calls itself

>> Method invocation
A method is nothing more than a JavaScript function that is stored in a property of an
object. If you have a function f and an object o, you can define a method named m of
o with the following line:
    o.m = f;

Having defined the method m() of the object o, invoke it like this:
    o.m();

Or, if m() expects two arguments, you might invoke it like this:
    o.m(x, y);

The code in this example is an invocation expression: it includes a function expres‐
sion o.m and two argument expressions, x and y. The function expression is itself a
property access expression, and this means that the function is invoked as a method
rather than as a regular function.

The arguments and return value of a method invocation are handled exactly as
described for regular function invocation. Method invocations differ from function
invocations in one important way, however: the invocation context. Property access
expressions consist of two parts: an object (in this case o) and a property name (m). In
a method-invocation expression like this, the object o becomes the invocation con‐
text, and the function body can refer to that object by using the keyword this. Here
is a concrete example:
    let calculator = { // An object literal
    operand1: 1,
    operand2: 1,
    add() { // We're using method shorthand syntax for this function
    // Note the use of the this keyword to refer to the containing object.
    this.result = this.operand1 + this.operand2;
    }
    };
    calculator.add(); // A method invocation to compute 1+1.
    calculator.result // => 2

Most method invocations use the dot notation for property access, but property
access expressions that use square brackets also cause method invocation. The follow‐
ing are both method invocations, for example:
    o["m"](x,y); // Another way to write o.m(x,y).
    a[0](z) // Also a method invocation (assuming a[0] is a function).

Method invocations may also involve more complex property access expressions:
customer.surname.toUpperCase(); // Invoke method on customer.surname
    f().m(); // Invoke method m() on return value of f()


Methods and the this keyword are central to the object-oriented programming para‐
digm. Any function that is used as a method is effectively passed an implicit argu‐
ment—the object through which it is invoked. Typically, a method performs some
sort of operation on that object, and the method-invocation syntax is an elegant way
to express the fact that a function is operating on an object. Compare the following
two lines:
    rect.setSize(width, height);
    setRectSize(rect, width, height);

The hypothetical functions invoked in these two lines of code may perform exactly
the same operation on the (hypothetical) object rect, but the method-invocation syn‐
tax in the first line more clearly indicates the idea that it is the object rect that is the
primary focus of the operation.

When methods return objects, you can use the return value of one method invocation
as part of a subsequent invocation. This results in a series (or “chain”) of method
invocations as a single expression. When working with Promise-based asynchronous
operations (see Chapter 13), for example, it is common to write code structured like
this:
    // Run three asynchronous operations in sequence, handling errors.
    doStepOne().then(doStepTwo).then(doStepThree).catch(handleErrors);

When you write a method that does not have a return value of its own, consider hav‐
ing the method return this. If you do this consistently throughout your API, you will
enable a style of programming known as method chaining1  in which an object can be
named once and then multiple methods can be invoked on it:
    new Square().x(100).y(100).size(50).outline("red").fill("blue").draw();

Note that this is a keyword, not a variable or property name. JavaScript syntax does
not allow you to assign a value to this.

The this keyword is not scoped the way variables are, and, except for arrow func‐
tions, nested functions do not inherit the this value of the containing function. If a
nested function is invoked as a method, its this value is the object it was invoked on.
If a nested function (that is not an arrow function) is invoked as a function, then its
this value will be either the global object (non-strict mode) or undefined (strict
mode). It is a common mistake to assume that a nested function defined within a
method and invoked as a function can use this to obtain the invocation context of
the method. The following code demonstrates the problem:
    let o = { // An object o.
        m: function() { // Method m of the object.
            let self = this; // Save the "this" value in a variable.
            this === o // => true: "this" is the object o.
            f(); // Now call the helper function f().
            
            function f() { // A nested function f
                this === o // => false: "this" is global or undefined
                self === o // => true: self is the outer "this" value.
            }
        }
    };
    o.m(); // Invoke the method m on the object o.

Inside the nested function f(), the this keyword is not equal to the object o. This is
widely considered to be a flaw in the JavaScript language, and it is important to be
aware of it. The code above demonstrates one common workaround. Within the
method m, we assign the this value to a variable self, and within the nested function
f, we can use self instead of this to refer to the containing object.


In ES6 and later, another workaround to this issue is to convert the nested function f
into an arrow function, which will properly inherit the this value:
    const f = () => {
    this === o // true, since arrow functions inherit this
    };

Functions defined as expressions instead of statements are not hoisted, so in order to
make this code work, the function definition for f will need to be moved within the
method m so that it appears before it is invoked.

Another workaround is to invoke the bind() method of the nested function to define
a new function that is implicitly invoked on a specified object:
    const f = (function() {
        this === o // true, since we bound this function to the outer this
    }).bind(this);








 */

