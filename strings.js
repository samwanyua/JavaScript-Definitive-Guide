/**
 * >> STRINGS/TEXT
A string is an immutable ordered sequence of 16-bit values, each of which typically represents a Unicode char‐
acter. 

The length of a string is the number of 16-bit values it contains. 

JavaScript’s strings (and its arrays) use zero-based indexing: the first 16-bit value is at position 0,
the second at position 1, and so on. 

The empty string is the string of length 0. Java‐
Script does not have a special type that represents a single element of a string. 
To represent a single 16-bit value, simply use a string that has a length of 1.

avaScript uses the UTF-16 encoding of the Unicode character set, and JavaScript
strings are sequences of unsigned 16-bit values. The most commonly used Unicode
characters (those from the “basic multilingual plane”) have codepoints that fit in 16
bits and can be represented by one element of a string. Unicode characters whose
codepoints do not fit in 16 bits are encoded using the rules of UTF-16 as a sequence
(known as a “surrogate pair”) of two 16-bit values. This means that a JavaScript string
of length 2 (two 16-bit values) might represent only a single Unicode character:
        let euro = "€";
        let love = "❤";
        euro.length // => 1: this character has one 16-bit element
        love.length // => 2: UTF-16 encoding of ❤ is "\ud83d\udc99"


>> String literals
To include a string in a JavaScript program, simply enclose the characters of the
string within a matched pair of single or double quotes or backticks (' or " or `).
Double-quote characters and backticks may be contained within strings delimited by
single-quote characters, and similarly for strings delimited by double quotes and
backticks. Here are examples of string literals:
        "" // The empty string: it has zero characters
        'testing'
        "3.14"
        'name="myform"'
        "Wouldn't you prefer O'Reilly's book?"
        "τ is the ratio of a circle's circumference to its radius"
        `"She said 'hi'", he said.`

Strings delimited with backticks are a feature of ES6, and allow JavaScript expressions
to be embedded within (or interpolated into) the string literal.

>> JavaScript escape sequences
        \0 The NUL character (\u0000)
        \b Backspace (\u0008)
        \t Horizontal tab (\u0009)
        \n Newline (\u000A)
        \v Vertical tab (\u000B)
        \f Form feed (\u000C)
        \r Carriage return (\u000D)
        \" Double quote (\u0022)
        \' Apostrophe or single quote (\u0027)
        \\ Backslash (\u005C)
        \xnn The Unicode character specied by the two hexadecimal digits nn
        \unnnn The Unicode character specied by the four hexadecimal digits nnnn
        \u{n} The Unicode character specied by the codepoint n, where n is one to six hexadecimal digits between 0 and
        10FFFF (ES6)

If the \ character precedes any character other than those shown in Table 3-1, the
backslash is simply ignored (although future versions of the language may, of course,
define new escape sequences). For example, \# is the same as #. 


>> Working with strings
One of the built-in features of JavaScript is the ability to concatenate strings. If you
use the + operator with numbers, it adds them. But if you use this operator on strings,
it joins them by appending the second to the first. For example:
        let msg = "Hello, " + "world"; // Produces the string "Hello, world"
        let greeting = "Welcome to my blog," + " " + name;

Strings can be compared with the standard === equality and !== inequality operators:
two strings are equal if and only if they consist of exactly the same sequence of 16-bit
values. Strings can also be compared with the <, <=, >, and >= operators. String com‐
parison is done simply by comparing the 16-bit values.

To determine the length of a string—the number of 16-bit values it contains—use the
length property of the string:
        s.length

        let s = "Hello, world"; // Start with some text.
        // Obtaining portions of a string
        s.substring(1,4) // => "ell": the 2nd, 3rd, and 4th characters.
        s.slice(1,4) // => "ell": same thing
        s.slice(-3) // => "rld": last 3 characters
        s.split(", ") // => ["Hello", "world"]: split at delimiter string
        // Searching a string
        s.indexOf("l") // => 2: position of first letter l
        s.indexOf("l", 3) // => 3: position of first "l" at or after 3
        s.indexOf("zz") // => -1: s does not include the substring "zz"
        s.lastIndexOf("l") // => 10: position of last letter l
        
        // Boolean searching functions in ES6 and later
        s.startsWith("Hell") // => true: the string starts with these
        s.endsWith("!") // => false: s does not end with that
        s.includes("or") // => true: s includes substring "or"
        
        // Creating modified versions of a string
        s.replace("llo", "ya") // => "Heya, world"
        s.toLowerCase() // => "hello, world"
        s.toUpperCase() // => "HELLO, WORLD"
        s.normalize() // Unicode NFC normalization: ES6
        s.normalize("NFD") // NFD normalization. Also "NFKC", "NFKD"
        
        // Inspecting individual (16-bit) characters of a string
        s.charAt(0) // => "H": the first character
        s.charAt(s.length-1) // => "d": the last character
        s.charCodeAt(0) // => 72: 16-bit number at the specified position
        s.codePointAt(0) // => 72: ES6, works for codepoints > 16 bits
        
        // String padding functions in ES2017
        "x".padStart(3) // => " x": add spaces on the left to a length of 3
        "x".padEnd(3) // => "x ": add spaces on the right to a length of 3
        "x".padStart(3, "*") // => "**x": add stars on the left to a length of 3
        "x".padEnd(3, "-") // => "x--": add dashes on the right to a length of 3
        
        // Space trimming functions. trim() is ES5; others ES2019
        " test ".trim() // => "test": remove spaces at start and end
        " test ".trimStart() // => "test ": remove spaces on left. Also trimLeft
        " test ".trimEnd() // => " test": remove spaces at right. Also trimRight
        
        // Miscellaneous string methods
        s.concat("!") // => "Hello, world!": just use + operator instead
        "<>".repeat(5) // => "<><><><><>": concatenate n copies. ES6


Remember that strings are immutable in JavaScript. Methods like replace() and
toUpperCase() return new strings: they do not modify the string on which they are
invoked.

Strings can also be treated like read-only arrays, and you can access individual char‐
acters (16-bit values) from a string using square brackets instead of the charAt()
method:
        let s = "hello, world";
        s[0] // => "h"
        s[s.length-1] // => "d"


>>Template literals
In ES6 and later, string literals can be delimited with backticks:
        let s = `hello world`;

The final value of a string literal
in backticks is computed by evaluating any included expressions, converting the val‐
ues of those expressions to strings and combining those computed strings with the
literal characters within the backticks:
        let name = "Bill";
        let greeting = `Hello ${ name }.`; // greeting == "Hello Bill."

Everything between the ${ and the matching } is interpreted as a JavaScript expres‐
sion. Everything outside the curly braces is normal string literal text. The expression
inside the braces is evaluated and then converted to a string and inserted into the
template, replacing the dollar sign, the curly braces, and everything in between them.


The following template literal includes four JavaScript expressions, a Unicode escape sequence, and at least four newlines (the expression values
may include newlines as well):
        let errorMessage = `\
        \u2718 Test failure at ${filename}:${linenumber}:
        ${exception.message}
        Stack trace:
        ${exception.stack}
        `;
The backslash at the end of the first line here escapes the initial newline so that the
resulting string begins with the Unicode ✘ character (\u2718) rather than a newline.

>> Tagged template literals
A powerful but less commonly used feature of template literals is that, if a function
name (or “tag”) comes right before the opening backtick, then the text and the values
of the expressions within the template literal are passed to the function. The value of
this “tagged template literal” is the return value of the function. This could be used,
for example, to apply HTML or SQL escaping to the values before substituting them
into the text.

ES6 has one built-in tag function: String.raw(). It returns the text within backticks
without any processing of backslash escapes:
        `\n`.length // => 1: the string has a single newline character
        String.raw`\n`.length // => 2: a backslash character and the letter n

Note that even though the tag portion of a tagged template literal is a function, there
are no parentheses used in its invocation. In this very specific case, the backtick char‐
acters replace the open and close parentheses.

>> Pattern Matching
JavaScript defines a datatype known as a regular expression (or RegExp) for describing
and matching patterns in strings of text. RegExps are not one of the fundamental
datatypes in JavaScript, but they have a literal syntax like numbers and strings do, so
they sometimes seem like they are fundamental. The grammar of regular expression
literals is complex and the API they define is nontrivial

Text between a pair of slashes constitutes a regular expression literal. The second
slash in the pair can also be followed by one or more letters, which modify the mean‐
ing of the pattern. For example:
        /^HTML/; // Match the letters H T M L at the start of a string
        /[1-9][0-9]*/; // Match a nonzero digit, followed by any # of digits
//      /\bjavascript\b/i; // Match "javascript" as a word, case-insensitive
/*
RegExp objects define a number of useful methods, and strings also have methods
that accept RegExp arguments. For example:
        let text = "testing: 1, 2, 3"; // Sample text
        let pattern = /\d+/g; // Matches all instances of one or more digits
        pattern.test(text) // => true: a match exists
        text.search(pattern) // => 9: position of first match
        text.match(pattern) // => ["1", "2", "3"]: array of all matches
        text.replace(pattern, "#") // => "testing: #, #, #"
        text.split(/\D+/) // => ["","1","2","3"]: split on nondigits










 */

    let firstName = "Nebuchadnezzar"
    console.log(firstName.length);