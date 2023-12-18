/**
The most straightforward way to define a JavaScript function is with the function
keyword, which can be used as a declaration or as an expression. ES6 defines an
important new way to define functions without the function keyword: “arrow func‐
tions” have a particularly compact syntax and are useful when passing one function as
an argument to another function

Function declaration consist of function keyword followed by:
    • An identifier that names the function
    • A pair of parentheses around a comma-separated list of zero or more identifiers
    A pair of curly braces with zero or more JavaScript statements inside


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



 */