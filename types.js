/**
 * JavaScript types can be divided into two categories: primitive types and object types
 * 
 JavaScript’s primitive types include numbers, strings of text (known as strings), and
Boolean truth values (known as booleans), null and undefined, symbols.

Any JavaScript value that is not a number, a string, a boolean, a symbol, null, or unde
fined is an object.

An object (that is, a member of the type object) is a collection of
properties where each property has a name and a value (either a primitive value or another object).

An ordinary JavaScript object is an unordered collection of named values. The lan‐
guage also defines a special kind of object, known as an array, that represents an
ordered collection of numbered values. The JavaScript language includes special syn‐
tax for working with arrays, and arrays have some special behavior that distinguishes
them from ordinary objects.

In addition to basic objects and arrays, JavaScript defines a number of other useful
object types. A Set object represents a set of values. A Map object represents a map‐
ping from keys to values. Various “typed array” types facilitate operations on arrays of
bytes and other binary data. The RegExp type represents textual patterns and enables
sophisticated matching, searching, and replacing operations on strings. The Date type
represents dates and times and supports rudimentary date arithmetic. Error and its
subtypes represent errors that can arise when executing JavaScript code. 


JavaScript’s object types are mutable and its primitive types are immutable. A value of
a mutable type can change: a JavaScript program can change the values of object
properties and array elements. Numbers, booleans, symbols, null, and undefined are
immutable—it doesn’t even make sense to talk about changing the value of a number

Constants and variables allow you to use names to refer to values in your programs.
Constants are declared with const and variables are declared with let (or with var in
older JavaScript code). JavaScript constants and variables are untyped: declarations do
not specify what kind of values will be assigned.

** Numbers **
Number, is used to represent integers and to approximate real numbers.
JavaScript represents numbers using the 64-bit floatingpoint format defined by the IEEE 754 standard,1
which means it can represent numbers as large as ±1.7976931348623157 × 10308 and as small as ±5 × 10−324

The JavaScript number format allows you to exactly represent all integers between
−9,007,199,254,740,992 (−253) and 9,007,199,254,740,992 (253), inclusive

When a number appears directly in a JavaScript program, it’s called a numeric literal.

>>  Integer Literals
In a JavaScript program, a base-10 integer is written as a sequence of digits. For
        example:
        0
        3
        10000000

In addition to base-10 integer literals, JavaScript recognizes hexadecimal (base-16)
values. A hexadecimal literal begins with 0x or 0X, followed by a string of hexadeci‐
mal digits. A hexadecimal digit is one of the digits 0 through 9 or the letters a (or A)
through f (or F), which represent values 10 through 15. Here are examples of hexa‐
decimal integer literals:
        0xff // => 255: (15*16 + 15)
        0xBADCAFE // => 195939070

In ES6 and later, you can also express integers in binary (base 2) or octal (base 8)
using the prefixes 0b and 0o (or 0B and 0O) instead of 0x:
        0b10101 // => 21: (1*16 + 0*8 + 1*4 + 0*2 + 1*1)
        0o377 // => 255: (3*64 + 7*8 + 7*1)


>> Floating-Point Literals
Floating-point literals can have a decimal point; they use the traditional syntax for
real numbers. A real value is represented as the integral part of the number, followed
by a decimal point and the fractional part of the number.

Floating-point literals may also be represented using exponential notation: a real
number followed by the letter e (or E), followed by an optional plus or minus sign,
followed by an integer exponent. This notation represents the real number multiplied
by 10 to the power of the exponent.
More succinctly, the syntax is:
        [digits][.digits][(E|e)[(+|-)]digits]
For example:
        3.14
        2345.6789
        .333333333333333333
        6.02e23 // 6.02 × 10²³
        1.4738223E-32 // 1.4738223 × 10⁻³²

You can use underscores within numeric literals to break long literals up into chunks
that are easier to read:
        let billion = 1_000_000_000; // Underscore as a thousands separator.
        let bytes = 0x89_AB_CD_EF; // As a bytes separator.
        let bits = 0b0001_1101_0111; // As a nibble separator.
        let fraction = 0.123_456_789; // Works in the fractional part, too.





















































 */