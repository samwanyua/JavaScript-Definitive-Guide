/**TYPE CONVERSIONS
 * JavaScript is very flexible about the types of values it requires.
 * when JavaScript expects a boolean value, you may supply a value of any
type, and JavaScript will convert it as needed. Some values (“truthy” values) convert
to true and others (“falsy” values) convert to false. The same is true for other types:
if JavaScript wants a string, it will convert whatever value you give it to a string. If
JavaScript wants a number, it will try to convert the value you give it to a number (or
to NaN if it cannot perform a meaningful conversion)

Some examples:
    10 + " objects" // => "10 objects": Number 10 converts to a string
    "7" * "4" // => 28: both strings convert to numbers
    let n = 1 - "x"; // n == NaN; string "x" can't convert to a number
    n + " objects" // => "NaN objects": NaN converts to string "NaN"

    Value                       to String       to Number       to Boolean
    undefined                   "undefined"     NaN             false
    null                        "null"          0               false
    true                        "true"          1
    false                       "false"         0
    ""  (empty string)                          0               false
    "1.2" (nonempty, numeric)                   1.2             true
    "one" (nonempty, non-numeric)               NaN             true
    0                           "0"                             false
    -0                          "0"                             false
    1 (nite, non-zero)         "1"                             true
    Infinity                    "Infinity"                      true
    -Infinity                   "-Infinity"                     true
    NaN                         "NaN"                           false
    {} (any object)                                              true
    [] (empty array)            ""              0               true
    [9] (one numeric element)   "9"             9               true
    ['a'] (any other array)     use join() method NaN           true
    function(){} (any function)                  NaN            true

Conversion to strings is well defined for all primitive values. Conversion to numbers is just a little trickier.
Strings that can be parsed as numbers convert to those numbers. Leading and trailing
spaces are allowed, but any leading or trailing nonspace characters that are not part of
a numeric literal cause the string-to-number conversion to produce NaN. Some
numeric conversions may seem surprising: true converts to 1, and false and the
empty string convert to 0.


>> Conversion and equality
JavaScript has two operators that test whether two values are equal. The “strict equal‐
ity operator,” ===, does not consider its operands to be equal if they are not of the
same type, and this is almost always the right operator to use when coding. But
because JavaScript is so flexible with type conversions, it also defines the == operator
with a flexible definition of equality.

All of the following comparisons are true, for
example:
    null == undefined // => true: These two values are treated as equal.
    "0" == 0 // => true: String converts to a number before comparing.
    0 == false // => true: Boolean converts to number before comparing.
    "0" == false // => true: Both operands convert to 0 before comparing!

Keep in mind that convertibility of one value to another does not imply equality of
those two values. If undefined is used where a boolean value is expected, for example,
it will convert to false. But this does not mean that undefined == false. JavaScript
operators and statements expect values of various types and perform conversions to
those types. The if statement converts undefined to false, but the == operator never
attempts to convert its operands to booleans.

>> Explicit conversions
The simplest way to perform an explicit type conversion is to use the Boolean(), Number(), and String() functions:
    Number("3") // => 3
    String(false) // => "false": Or use false.toString()
    Boolean([]) // => true

Any value other than null or undefined has a toString() method, and the result of
this method is usually the same as that returned by the String() function.

As an aside, note that the Boolean(), Number(), and String() functions can also be
invoked—with new—as constructor. If you use them this way, you’ll get a “wrapper”
object that behaves just like a primitive boolean, number, or string value. These wrap‐
per objects are a historical leftover from the earliest days of JavaScript, and there is
never really any good reason to use them.

Certain JavaScript operators perform implicit type conversions and are sometimes
used explicitly for the purpose of type conversion. If one operand of the + operator is
a string, it converts the other one to a string. The unary + operator converts its
operand to a number. And the unary ! operator converts its operand to a boolean
and negates it. These facts lead to the following type conversion idioms that you may
see in some code:
    x + "" // => String(x)
    +x // => Number(x)
    x-0 // => Number(x)
    !!x // => Boolean(x): Note double !

The toString() method defined by the Number class accepts an optional argument
that specifies a radix, or base, for the conversion. If you do not specify the argument,
the conversion is done in base 10. However, you can also convert numbers in other
bases (between 2 and 36). For example:
    let n = 17;
    let binary = "0b" + n.toString(2); // binary == "0b10001"
    let octal = "0o" + n.toString(8); // octal == "0o21"
    let hex = "0x" + n.toString(16); // hex == "0x11"

When working with financial or scientific data, you may want to convert numbers to
strings in ways that give you control over the number of decimal places or the num‐
ber of significant digits in the output, or you may want to control whether exponen‐
tial notation is used. The Number class defines three methods for these kinds of
number-to-string conversions. toFixed() converts a number to a string with a speci‐
fied number of digits after the decimal point. It never uses exponential notation.
toExponential() converts a number to a string using exponential notation, with one
digit before the decimal point and a specified number of digits after the decimal point
(which means that the number of significant digits is one larger than the value you
specify). toPrecision() converts a number to a string with the number of significant
digits you specify. It uses exponential notation if the number of significant digits is
not large enough to display the entire integer portion of the number. Note that all
three methods round the trailing digits or pad with zeros as appropriate. Consider the
following examples:
    let n = 123456.789;
    n.toFixed(0) // => "123457"
    n.toFixed(2) // => "123456.79"
    n.toFixed(5) // => "123456.78900"
    n.toExponential(1) // => "1.2e+5"
    n.toExponential(3) // => "1.235e+5"
    n.toPrecision(4) // => "1.235e+5"
    n.toPrecision(7) // => "123456.8"
    n.toPrecision(10) // => "123456.7890"

If you pass a string to the Number() conversion function, it attempts to parse that
string as an integer or floating-point literal. That function only works for base-10
integers and does not allow trailing characters that are not part of the literal. The
parseInt() and parseFloat() functions (these are global functions, not methods of
any class) are more flexible. parseInt() parses only integers, while parseFloat()
parses both integers and floating-point numbers. If a string begins with “0x” or “0X”,
parseInt() interprets it as a hexadecimal number. Both parseInt() and parse
Float() skip leading whitespace, parse as many numeric characters as they can, and
ignore anything that follows. If the first nonspace character is not part of a valid
numeric literal, they return NaN:
    parseInt("3 blind mice") // => 3
    parseFloat(" 3.14 meters") // => 3.14
    parseInt("-12.34") // => -12
    parseInt("0xFF") // => 255
    parseInt("0xff") // => 255
    parseInt("-0XFF") // => -255
    parseFloat(".1") // => 0.1
    parseInt("0.1") // => 0
    parseInt(".1") // => NaN: integers can't start with "."
    parseFloat("$72.47") // => NaN: numbers can't start with "$"


parseInt() accepts an optional second argument specifying the radix (base) of the
number to be parsed. Legal values are between 2 and 36. For example:
    parseInt("11", 2) // => 3: (1*2 + 1)
    parseInt("ff", 16) // => 255: (15*16 + 15)
    parseInt("zz", 36) // => 1295: (35*36 + 35)
    parseInt("077", 8) // => 63: (7*8 + 7)
    parseInt("077", 10) // => 77: (7*10 + 7)

>>  Object to Primitive Conversions

One reason for the complexity of JavaScript’s object-to-primitive conversions is that
some types of objects have more than one primitive representation. Date objects, for
example, can be represented as strings or as numeric timestamps. The JavaScript
specification defines three fundamental algorithms for converting objects to primitive
values:

prefer-string
    This algorithm returns a primitive value, preferring a string value, if a conversion
    to string is possible.
prefer-number
    This algorithm returns a primitive value, preferring a number, if such a conver‐
    sion is possible.
no-preference
    This algorithm expresses no preference about what type of primitive value is
    desired, and classes can define their own conversions. Of the built-in JavaScript
    types, all except Date implement this algorithm as prefer-number. The Date class
    implements this algorithm as prefer-string.
The implementation of these object-to-primitive conversion algorithms is explained
at the end of this section. First, however, we explain how the algorithms are used in
JavaScript.

Object-to-boolean conversions are trivial: all objects convert to true. Notice that this
conversion does not require the use of the object-to-primitive algorithms described,
and that it literally applies to all objects, including empty arrays and even the wrapper
object new Boolean(false).

Object-to-string conversions
When an object needs to be converted to a string, JavaScript first converts it to a
primitive using the prefer-string algorithm, then converts the resulting primitive value
to a string, if necessary, following the rules in Table 3-2.
This kind of conversion happens, for example, if you pass an object to a built-in func‐
tion that expects a string argument, if you call String() as a conversion function, and
when you interpolate objects into template literals 

Object-to-number conversions
When an object needs to be converted to a number, JavaScript first converts it to a
primitive value using the prefer-number algorithm, then converts the resulting primi‐
tive value to a number, if necessary, following the rules in Table 3-2.
Built-in JavaScript functions and methods that expect numeric arguments convert
object arguments to numbers in this way, and most (see the exceptions that follow)
JavaScript operators that expect numeric operands convert objects to numbers in this
way as well.

Special case operator conversions
Operators are covered in detail in Chapter 4. Here, we explain the special case opera‐
tors that do not use the basic object-to-string and object-to-number conversions
described earlier.
The + operator in JavaScript performs numeric addition and string concatenation. If
either of its operands is an object, JavaScript converts them to primitive values using
the no-preference algorithm. Once it has two primitive values, it checks their types. If
either argument is a string, it converts the other to a string and concatenates the
strings. Otherwise, it converts both arguments to numbers and adds them.
The == and != operators perform equality and inequality testing in a loose way that
allows type conversions. If one operand is an object and the other is a primitive value,
these operators convert the object to primitive using the no-preference algorithm and
then compare the two primitive values.
Finally, the relational operators <, <=, >, and >= compare the order of their operands
and can be used to compare both numbers and strings. If either operand is an object,
it is converted to a primitive value using the prefer-number algorithm. Note, however,
that unlike the object-to-number conversion, the primitive values returned by the
prefer-number conversion are not then converted to numbers.
Note that the numeric representation of Date objects is meaningfully comparable
with < and >, but the string representation is not. For Date objects, the no-preference
algorithm converts to a string, so the fact that JavaScript uses the prefer-number
algorithm for these operators means that we can use them to compare the order of
two Date objects.

The toString() and valueOf() methods
All objects inherit two conversion methods that are used by object-to-primitive con‐
versions, and before we can explain the prefer-string, prefer-number, and no-preference
conversion algorithms, we have to explain these two methods.

The first method is toString(), and its job is to return a string representation of the
object. The default toString() method does not return a very interesting value
(though we’ll find it useful in §14.4.3):
    ({x: 1, y: 2}).toString() // => "[object Object]"

Many classes define more specific versions of the toString() method. The
toString() method of the Array class, for example, converts each array element to a
string and joins the resulting strings together with commas in between. The
toString() method of the Function class converts user-defined functions to strings
of JavaScript source code. The Date class defines a toString() method that returns a
human-readable (and JavaScript-parsable) date and time string. The RegExp class
defines a toString() method that converts RegExp objects to a string that looks like
a RegExp literal:
    [1,2,3].toString() // => "1,2,3"
    (function(x) { f(x); }).toString() // => "function(x) { f(x); }"
    /\d+/g.toString() // => "/\\d+/g"
    let d = new Date(2020,0,1);
    d.toString() // => "Wed Jan 01 2020 00:00:00 GMT-0800 (Pacific Standard Time)"

The other object conversion function is called valueOf(). The job of this method is
less well defined: it is supposed to convert an object to a primitive value that repre‐
sents the object, if any such primitive value exists. Objects are compound values, and
most objects cannot really be represented by a single primitive value, so the default
valueOf() method simply returns the object itself rather than returning a primitive.
Wrapper classes such as String, Number, and Boolean define valueOf() methods that
simply return the wrapped primitive value. Arrays, functions, and regular expressions
simply inherit the default method. Calling valueOf() for instances of these types sim‐
ply returns the object itself. The Date class defines a valueOf() method that returns
the date in its internal representation: the number of milliseconds since January 1,
1970:
    let d = new Date(2010, 0, 1); // January 1, 2010, (Pacific time)
    d.valueOf() // => 1262332800000


Object-to-primitive conversion algorithms
With the toString() and valueOf() methods explained, we can now explain
approximately how the three object-to-primitive algorithms work (the complete
details are deferred until §14.4.7):

• The prefer-string algorithm first tries the toString() method. If the method is
defined and returns a primitive value, then JavaScript uses that primitive value
(even if it is not a string!). If toString() does not exist or if it returns an object,
then JavaScript tries the valueOf() method. If that method exists and returns a
primitive value, then JavaScript uses that value. Otherwise, the conversion fails
with a TypeError.

• The prefer-number algorithm works like the prefer-string algorithm, except that it
tries valueOf() first and toString() second.

• The no-preference algorithm depends on the class of the object being converted.
If the object is a Date object, then JavaScript uses the prefer-string algorithm. For
any other object, JavaScript uses the prefer-number algorithm.
The rules described here are true for all built-in JavaScript types and are the default
rules for any classes you define yourself. §14.4.7 explains how you can define your
own object-to-primitive conversion algorithms for the classes you define.
Before we leave this topic, it is worth noting that the details of the prefer-number con‐
version explain why empty arrays convert to the number 0 and single-element arrays
can also convert to numbers:
    Number([]) // => 0: this is unexpected!
    Number([99]) // => 99: really?

    The object-to-number conversion first converts the object to a primitive using the
prefer-number algorithm, then converts the resulting primitive value to a number.
The prefer-number algorithm tries valueOf() first and then falls back on toString().
But the Array class inherits the default valueOf() method, which does not return a
primitive value. So when we try to convert an array to a number, we end up invoking
the toString() method of the array. Empty arrays convert to the empty string. And
the empty string converts to the number 0. An array with a single element converts to
the same string that that one element does. If an array contains a single number, that
number is converted to a string, and then back to a number.













 */