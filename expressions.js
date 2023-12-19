/**Expressions and Operators
 * An expression is a phrase of JavaScript that can be evaluated to produce a value

A variable name is also a simple expression that evaluates to
whatever value has been assigned to that variable

Complex expressions are built from simpler expressions. An array access expression, for example, consists of one expres‐
sion that evaluates to an array followed by an open square bracket, an expression that
evaluates to an integer, and a close square bracket. This new, more complex expres‐
sion evaluates to the value stored at the specified index of the specified array. Simi‐
larly, a function invocation expression consists of one expression that evaluates to a
function object and zero or more additional expressions that are used as the argu‐
ments to the function.

>> Primary expressions
The simplest expressions, known as primary expressions, are those that stand alone—
they do not include any simpler expressions. Primary expressions in JavaScript are
constant or literal values, certain language keywords, and variable references.

Literals are constant values that are embedded directly in your program. They look
like these:
1.23 // A number literal
"hello" // A string literal
/pattern/ // A regular expression literal

Some of JavaScript’s reserved words are primary expressions:
    true // Evalutes to the boolean true value
    false // Evaluates to the boolean false value
    null // Evaluates to the null value
    this // Evaluates to the "current" object


Finally, the third type of primary expression is a reference to a variable, constant, or
property of the global object:
    i // Evaluates to the value of the variable i.
    sum // Evaluates to the value of the variable sum.
    undefined // The value of the "undefined" property of the global object


>> Object and array initializers
Object and array initializers are expressions whose value is a newly created object or
array. These initializer expressions are sometimes called object literals and array liter‐
als. Unlike true literals, however, they are not primary expressions, because they
include a number of subexpressions that specify property and element values. Array
initializers have a slightly simpler syntax, and we’ll begin with those.


An array initializer is a comma-separated list of expressions contained within square
brackets. The value of an array initializer is a newly created array. The elements of
this new array are initialized to the values of the comma-separated expressions:
    [] // An empty array: no expressions inside brackets means no elements
    [1+2,3+4] // A 2-element array. First element is 3, second is 7


The element expressions in an array initializer can themselves be array initializers,
which means that these expressions can create nested arrays:
    let matrix = [[1,2,3], [4,5,6], [7,8,9]];

The element expressions in an array initializer are evaluated each time the array ini‐
tializer is evaluated. This means that the value of an array initializer expression may
be different each time it is evaluated.

Undefined elements can be included in an array literal by simply omitting a value
between commas. For example, the following array contains five elements, including
three undefined elements:
    let sparseArray = [1,,,,5];

A single trailing comma is allowed after the last expression in an array initializer and
does not create an undefined element. However, any array access expression for an
index after that of the last expression will necessarily evaluate to undefined.


Object initializer expressions are like array initializer expressions, but the square
brackets are replaced by curly brackets, and each subexpression is prefixed with a
property name and a colon:
    let p = { x: 2.3, y: -1.2 }; // An object with 2 properties
    let q = {}; // An empty object with no properties
    q.x = 2.3; q.y = -1.2; // Now q has the same properties as p

Object literals can be nested. For example:
    let rectangle = {
    upperLeft: { x: 2, y: 2 },
    lowerRight: { x: 4, y: 5 }
    };


>> Function Denition Expressions
A function definition expression defines a JavaScript function, and the value of such an
expression is the newly defined function. In a sense, a function definition expression
is a “function literal” in the same way that an object initializer is an “object literal.” A
function definition expression typically consists of the keyword function followed by
a comma-separated list of zero or more identifiers (the parameter names) in
parentheses and a block of JavaScript code (the function body) in curly braces. For
example:
    // This function returns the square of the value passed to it.
    let square = function(x) { return x * x; };


>> Property Access Expressions
A property access expression evaluates to the value of an object property or an array
element. JavaScript defines two syntaxes for property access:
    expression . identifier
    expression [ expression ]

The first style of property access is an expression followed by a period and an identi‐
fier. The expression specifies the object, and the identifier specifies the name of the
desired property. The second style of property access follows the first expression (the
object or array) with another expression in square brackets. This second expression
specifies the name of the desired property or the index of the desired array element.

Here are some concrete examples:
    let o = {x: 1, y: {z: 3}}; // An example object
    let a = [o, 4, [5, 6]]; // An example array that contains the object
    o.x // => 1: property x of expression o
    o.y.z // => 3: property z of expression o.y
    o["x"] // => 1: property x of object o
    a[1] // => 4: element at index 1 of expression a
    a[2]["1"] // => 6: element at index 1 of expression a[2]
    a[0].x // => 1: property x of expression a[0]

With either type of property access expression, the expression before the . or [ is first
evaluated. If the value is null or undefined, the expression throws a TypeError, since
these are the two JavaScript values that cannot have properties. If the object expres‐
sion is followed by a dot and an identifier, the value of the property named by that
identifier is looked up and becomes the overall value of the expression. If the object
expression is followed by another expression in square brackets, that second expres‐
sion is evaluated and converted to a string. The overall value of the expression is then
the value of the property named by that string. In either case, if the named property
does not exist, then the value of the property access expression is undefined.

The .identifier syntax is the simpler of the two property access options, but notice that
it can only be used when the property you want to access has a name that is a legal
identifier, and when you know the name when you write the program. If the property
name includes spaces or punctuation characters, or when it is a number (for arrays),
you must use the square bracket notation. Square brackets are also used when the
property name is not static but is itself the result of a computation (see §6.3.1 for an
example).

>> Conditional Property access
ES2020 adds two new kinds of property access expressions:
    expression ?. identifier
    expression ?.[ expression ]

In JavaScript, the values null and undefined are the only two values that do not have
properties. In a regular property access expression using . or [], you get a TypeError
if the expression on the left evaluates to null or undefined. You can use ?. and ?.[]
syntax to guard against errors of this type.

Consider the expression a?.b. If a is null or undefined, then the expression evalu‐
ates to undefined without any attempt to access the property b. If a is some other
value, then a?.b evaluates to whatever a.b would evaluate to (and if a does not have a
property named b, then the value will again be undefined).


This form of property access expression is sometimes called “optional chaining”
because it also works for longer “chained” property access expressions like this one:
    let a = { b: null };
    a.b?.c.d // => undefined

a is an object, so a.b is a valid property access expression. But the value of a.b is
null, so a.b.c would throw a TypeError. By using ?. instead of . we avoid the Type‐
Error, and a.b?.c evaluates to undefined. This means that (a.b?.c).d will throw a
TypeError, because that expression attempts to access a property of the value unde
fined. But—and this is a very important part of “optional chaining”—a.b?.c.d
(without the parentheses) simply evaluates to undefined and does not throw an error.
This is because property access with ?. is “short-circuiting”: if the subexpression to
the left of ?. evaluates to null or undefined, then the entire expression immediately
evaluates to undefined without any further property access attempts.

Of course, if a.b is an object, and if that object has no property named c, then
a.b?.c.d will again throw a TypeError, and we will want to use another conditional
property access:
    let a = { b: {} };
    a.b?.c?.d // => undefined

Conditional property access is also possible using ?.[] instead of []. In the expres‐
sion a?.[b][c], if the value of a is null or undefined, then the entire expression
immediately evaluates to undefined, and subexpressions b and c are never even eval‐
uated. If either of those expressions has side effects, the side effect will not occur if a
is not defined:
    let a; // Oops, we forgot to initialize this variable!
    let index = 0;
    try {
    a[index++]; // Throws TypeError
    } catch(e) {
    index // => 1: increment occurs before TypeError is thrown
    }
    a?.[index++] // => undefined: because a is undefined
    index // => 1: not incremented because ?.[] short-circuits
    a[index++] // !TypeError: can't index undefined.

>> Invocation expressions
An invocation expression is JavaScript’s syntax for calling (or executing) a function or
method. It starts with a function expression that identifies the function to be called.
The function expression is followed by an open parenthesis, a comma-separated list
of zero or more argument expressions, and a close parenthesis. Some examples:
    f(0) // f is the function expression; 0 is the argument expression.
    Math.max(x,y,z) // Math.max is the function; x, y, and z are the arguments.
    a.sort() // a.sort is the function; there are no arguments.


When an invocation expression is evaluated, the function expression is evaluated
first, and then the argument expressions are evaluated to produce a list of argument
values. If the value of the function expression is not a function, a TypeError is
thrown. Next, the argument values are assigned, in order, to the parameter names
specified when the function was defined, and then the body of the function is exe‐
cuted. If the function uses a return statement to return a value, then that value
becomes the value of the invocation expression. Otherwise, the value of the invoca‐
tion expression is undefined. 

Every invocation expression includes a pair of parentheses and an expression before
the open parenthesis. If that expression is a property access expression, then the invo‐
cation is known as a method invocation. In method invocations, the object or array
that is the subject of the property access becomes the value of the this keyword while
the body of the function is being executed. This enables an object-oriented program‐
ming paradigm in which functions (which we call “methods” when used this way)
operate on the object of which they are part.

>> Conditional Invocation
In ES2020, you can also invoke a function using ?.() instead of (). Normally when
you invoke a function, if the expression to the left of the parentheses is null or unde
fined or any other non-function, a TypeError is thrown. With the new ?.() invoca‐
tion syntax, if the expression to the left of the ?. evaluates to null or undefined, then
the entire invocation expression evaluates to undefined and no exception is thrown.

Array objects have a sort() method that can optionally be passed a function argu‐
ment that defines the desired sorting order for the array elements. Before ES2020, if
you wanted to write a method like sort() that takes an optional function argument,
you would typically use an if statement to check that the function argument was
defined before invoking it in the body of the if:
    function square(x, log) { // The second argument is an optional function
    if (log) { // If the optional function is passed
    log(x); // Invoke it
    }
    return x * x; // Return the square of the argument
}

With this conditional invocation syntax of ES2020, however, you can simply write the
function invocation using ?.(), knowing that invocation will only happen if there is
actually a value to be invoked:
    function square(x, log) { // The second argument is an optional function
    log?.(x); // Call the function if there is one
    return x * x; // Return the square of the argument
    }

Note, however, that ?.() only checks whether the lefthand side is null or undefined.
It does not verify that the value is actually a function. So the square() function in this
example would still throw an exception if you passed two numbers to it, for example.

Like conditional property access expressions (§4.4.1), function invocation with ?.()
is short-circuiting: if the value to the left of ?. is null or undefined, then none of the
argument expressions within the parentheses are evaluated:
    let f = null, x = 0;
    try {
    f(x++); // Throws TypeError because f is null
    } catch(e) {
    x // => 1: x gets incremented before the exception is thrown
    }
    f?.(x++) // => undefined: f is null, but no exception thrown
    x // => 1: increment is skipped because of short-circuiting

Conditional invocation expressions with ?.() work just as well for methods as they
do for functions. But because method invocation also involves property access, it is
worth taking a moment to be sure you understand the differences between the fol‐
lowing expressions:
    o.m() // Regular property access, regular invocation
    o?.m() // Conditional property access, regular invocation
    o.m?.() // Regular property access, conditional invocation

In the first expression, o must be an object with a property m and the value of that
property must be a function. In the second expression, if o is null or undefined, then
the expression evaluates to undefined. But if o has any other value, then it must have
a property m whose value is a function. And in the third expression, o must not be
null or undefined. If it does not have a property m, or if the value of that property is
null, then the entire expression evaluates to undefined.

>> Object Creation Expressions
An object creation expression creates a new object and invokes a function (called a
constructor) to initialize the properties of that object. Object creation expressions are
like invocation expressions except that they are prefixed with the keyword new:
    new Object()
    new Point(2,3)
If no arguments are passed to the constructor function in an object creation expres‐
sion, the empty pair of parentheses can be omitted:
    new Object
    new Date









 */