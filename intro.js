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


 */