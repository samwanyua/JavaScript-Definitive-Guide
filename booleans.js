/**
 * A boolean value represents truth or falsehood, on or off, yes or no. There are only two
possible values of this type. The reserved words true and false evaluate to these two
values.

Boolean values are commonly used in JavaScript control structures. For example, the
if/else statement in JavaScript performs one action if a boolean value is true and
another action if the value is false. You usually combine a comparison that creates a
boolean value directly with a statement that uses it. The result looks like this:
    if (a === 4) {
    b = b + 1;
    } else {
    a = a + 1;
    }

any JavaScript value can be converted to a boolean value. The
following values convert to, and therefore work like, false:
    undefined
    null
    0
    -0
    NaN
    "" // the empty string

All other values, including all objects (and arrays) convert to, and work like, true.
false, and the six values that convert to it, are sometimes called falsy values, and all
other values are called truthy. Any time JavaScript expects a boolean value, a falsy
value works like false and a truthy value works like true

Boolean values have a toString() method that you can use to convert them to the
strings “true” or “false”, but they do not have any other useful methods. Despite the
trivial API, there are three important boolean operators.

The && operator performs the Boolean AND operation. It evaluates to a truthy value
if and only if both of its operands are truthy; it evaluates to a falsy value otherwise.

The || operator is the Boolean OR operation: it evaluates to a truthy value if either
one (or both) of its operands is truthy and evaluates to a falsy value if both operands
are falsy. 

Finally, the unary ! operator performs the Boolean NOT operation: it evalu‐
ates to true if its operand is falsy and evaluates to false if its operand is truthy. For
example:
    if ((x === 0 && y === 0) || !(z === 0)) {
    // x and y are both zero or z is non-zero
    }











































 */