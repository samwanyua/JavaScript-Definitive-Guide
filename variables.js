/**Variable Declaration and Assignment
 * One of the most fundamental techniques of computer programming is the use of
names—or identifiers—to represent values.

Binding a name to a value gives us a way to refer to that value and use it in the programs we write. When we do this, we typi‐
cally say that we are assigning a value to a variable

The term “variable” implies that new values can be assigned: that the value associated with the variable may vary as
our program runs. If we permanently assign a value to a name, then we call that name
a constant instead of a variable.

>>  Declarations with let and const
In modern JavaScript (ES6 and later), variables are declared with the let keyword,
like this:
    let i;
    let sum;
You can also declare multiple variables in a single let statement:
    let i, sum;
It is a good programming practice to assign an initial value to your variables when
you declare them, when this is possible:
let message = "hello";
    let i = 0, j = 0, k = 0;
    let x = 2, y = x*x; // Initializers can use previously declared variables

If you don’t specify an initial value for a variable with the let statement, the variable
is declared, but its value is undefined until your code assigns a value to it.

To declare a constant instead of a variable, use const instead of let. const works just
like let except that you must initialize the constant when you declare it:
    const H0 = 74; // Hubble constant (km/s/Mpc)
    const C = 299792.458; // Speed of light in a vacuum (km/s)
    const AU = 1.496E8; // Astronomical Unit: distance to the sun (km)

As the name implies, constants cannot have their values changed, and any attempt to
do so causes a TypeError to be thrown.

It is a common (but not universal) convention to declare constants using names with
all capital letters such as H0 or HTTP_NOT_FOUND as a way to distinguish them from
variables.

There are two schools of thought about the use of the const key‐
word. One approach is to use const only for values that are funda‐
mentally unchanging, like the physical constants shown, or
program version numbers, or byte sequences used to identify file
types, for example. Another approach recognizes that many of the
so-called variables in our program don’t actually ever change as our
program runs. In this approach, we declare everything with const,
and then if we find that we do actually want to allow the value to
vary, we switch the declaration to let. This may help prevent bugs
by ruling out accidental changes to variables that we did not
intend.

JavaScript allows us to declare the loop variable as part
of the loop syntax itself, and this is another common way to use let:
    for(let i = 0, len = data.length; i < len; i++) console.log(data[i]);
    for(let datum of data) console.log(datum);
    for(let property in object) console.log(property);

It may seem surprising, but you can also use const to declare the loop “variables” for
for/in and for/of loops, as long as the body of the loop does not reassign a new
value. In this case, the const declaration is just saying that the value is constant for
the duration of one loop iteration:
    for(const datum of data) console.log(datum);
    for(const property in object) console.log(property);


>> Variable and constant scope
The scope of a variable is the region of your program source code in which it is
defined

Variables and constants declared with let and const are block scoped. This
means that they are only defined within the block of code in which the let or const
statement appears.

JavaScript class and function definitions are blocks, and so are the
bodies of if/else statements, while loops, for loops, and so on. 

Roughly speaking, if a variable or constant is declared within a set of curly braces, then those curly braces
delimit the region of code in which the variable or constant is defined (though of
course it is not legal to reference a variable or constant from lines of code that execute
before the let or const statement that declares the variable)

Variables and constants declared as part of a for, for/in, or for/of loop have the loop body as their scope,
even though they technically appear outside of the curly braces.

When a declaration appears at the top level, outside of any code blocks, we say it is a
global variable or constant and has global scope.

>> Repeated declarations
    const x = 1; // Declare x as a global constant
    if (x === 1) {
    let x = 2; // Inside a block x can refer to a different value
    console.log(x); // Prints 2
    }
    console.log(x); // Prints 1: we're back in the global scope now
    let x = 3; // ERROR! Syntax error trying to re-declare x

>> Variable Declarations with var
In versions of JavaScript before ES6, the only way to declare a variable is with the var
keyword, and there is no way to declare constants. The syntax of var is just like the
syntax of let:
    var x;
    var data = [], count = data.length;
    for(var i = 0; i < count; i++) console.log(data[i]);


• Variables declared with var do not have block scope. Instead, they are scoped to
the body of the containing function no matter how deeply nested they are inside
that function.

• If you use var outside of a function body, it declares a global variable. But global
variables declared with var differ from globals declared with let in an important
way. Globals declared with var are implemented as properties of the global object

The global object can be referenced as globalThis. So if you write var x
= 2; outside of a function, it is like you wrote globalThis.x = 2;. Note how‐
ever, that the analogy is not perfect: the properties created with global var decla‐
rations cannot be deleted with the delete operator (§4.13.4). Global variables
and constants declared with let and const are not properties of the global
object.

Unlike variables declared with let, it is legal to declare the same variable multiple
times with var. And because var variables have function scope instead of block
scope, it is actually common to do this kind of redeclaration. The variable i is
frequently used for integer values, and especially as the index variable of for
loops. In a function with multiple for loops, it is typical for each one to begin
for(var i = 0; .... Because var does not scope these variables to the loop
body, each of these loops is (harmlessly) re-declaring and re-initializing the same
variable.

• One of the most unusual features of var declarations is known as hoisting. When
a variable is declared with var, the declaration is lifted up (or “hoisted”) to the
top of the enclosing function. The initialization of the variable remains where
you wrote it, but the definition of the variable moves to the top of the function.
So variables declared with var can be used, without error, anywhere in the
enclosing function. If the initialization code has not run yet, then the value of the
variable may be undefined, but you won’t get an error if you use the variable
before it is initialized. (This can be a source of bugs and is one of the important
misfeatures that let corrects: if you declare a variable with let but attempt to use
it before the let statement runs, you will get an actual error instead of just seeing
an undefined value.)

>> Destructuring Assignment
ES6 implements a kind of compound declaration and assignment syntax known as
destructuring assignment. In a destructuring assignment, the value on the righthand
side of the equals sign is an array or object (a “structured” value), and the lefthand
side specifies one or more variable names using a syntax that mimics array and object
literal syntax. When a destructuring assignment occurs, one or more values are
extracted (“destructured”) from the value on the right and stored into the variables
named on the left. Destructuring assignment is perhaps most commonly used to ini‐
tialize variables as part of a const, let, or var declaration statement, but it can also be
done in regular assignment expressions (with variables that have already been
declared). And, destructuring can also be used when defining
the parameters to a function.

Here are simple destructuring assignments using arrays of values:
    let [x,y] = [1,2]; // Same as let x=1, y=2
    [x,y] = [x+1,y+1]; // Same as x = x + 1, y = y + 1
    [x,y] = [y,x]; // Swap the value of the two variables
    [x,y] // => [3,2]: the incremented and swapped values

Notice how destructuring assignment makes it easy to work with functions that
return arrays of values:
    // Convert [x,y] coordinates to [r,theta] polar coordinates
    function toPolar(x, y) {
    return [Math.sqrt(x*x+y*y), Math.atan2(y,x)];
    }
    // Convert polar to Cartesian coordinates
    function toCartesian(r, theta) {
    return [r*Math.cos(theta), r*Math.sin(theta)];
}

    let [r,theta] = toPolar(1.0, 1.0); // r == Math.sqrt(2); theta == Math.PI/4
    let [x,y] = toCartesian(r,theta); // [x, y] == [1.0, 1,0]

Here is a code that loops over the name/value pairs of all properties of an object and uses destruc‐
turing assignment to convert those pairs from two-element arrays into individual
variables:
    let o = { x: 1, y: 2 }; // The object we'll loop over
    for(const [name, value] of Object.entries(o)) {
    console.log(name, value); // Prints "x 1" and "y 2"
    }

The number of variables on the left of a destructuring assignment does not have to
match the number of array elements on the right. Extra variables on the left are set to
undefined, and extra values on the right are ignored. The list of variables on the left
can include extra commas to skip certain values on the right:
    let [x,y] = [1]; // x == 1; y == undefined
    [x,y] = [1,2,3]; // x == 1; y == 2
    [,x,,y] = [1,2,3,4]; // x == 2; y == 4


If you want to collect all unused or remaining values into a single variable when
destructuring an array, use three dots (...) before the last variable name on the lefthand side:
    let [x, ...y] = [1,2,3,4]; // y == [2,3,4]


Destructuring assignment can be used with nested arrays. In this case, the lefthand
side of the assignment should look like a nested array literal:
    let [a, [b, c]] = [1, [2,2.5], 3]; // a == 1; b == 2; c == 2.5


A powerful feature of array destructuring is that it does not actually require an array!
You can use any iterable object (Chapter 12) on the righthand side of the assignment;
any object that can be used with a for/of loop (§5.4.4) can also be destructured:
    let [first, ...rest] = "Hello"; // first == "H"; rest == ["e","l","l","o"]


Destructuring assignment can also be performed when the righthand side is an object
value. In this case, the lefthand side of the assignment looks something like an object
literal: a comma-separated list of variable names within curly braces:
    let transparent = {r: 0.0, g: 0.0, b: 0.0, a: 1.0}; // A RGBA color
    let {r, g, b} = transparent; // r == 0.0; g == 0.0; b == 0.0


The next example copies global functions of the Math object into variables, which
might simplify code that does a lot of trigonometry:
    // Same as const sin=Math.sin, cos=Math.cos, tan=Math.tan
    const {sin, cos, tan} = Math;

Notice in the code here that the Math object has many properties other than the three
that are destructured into individual variables. Those that are not named are simply
ignored. If the lefthand side of this assignment had included a variable whose name
was not a property of Math, that variable would simply be assigned undefined.

In each of these object destructuring examples, we have chosen variable names that
match the property names of the object we’re destructuring. This keeps the syntax
simple and easy to understand, but it is not required. Each of the identifiers on the
lefthand side of an object destructuring assignment can also be a colon-separated pair
of identifiers, where the first is the name of the property whose value is to be assigned
and the second is the name of the variable to assign it to:
    // Same as const cosine = Math.cos, tangent = Math.tan;
    const { cos: cosine, tan: tangent } = Math;

If you choose to use it, remember that property names are always
on the left of the colon, in both object literals and on the left of an object destructur‐
ing assignment.

Destructuring assignment becomes even more complicated when it is used with nes‐
ted objects, or arrays of objects, or objects of arrays, but it is legal:
    let points = [{x: 1, y: 2}, {x: 3, y: 4}]; // An array of two point objects
    let [{x: x1, y: y1}, {x: x2, y: y2}] = points; // destructured into 4 variables.
    (x1 === 1 && y1 === 2 && x2 === 3 && y2 === 4) // => true

Or, instead of destructuring an array of objects, we could destructure an object of
arrays:
    let points = { p1: [1,2], p2: [3,4] }; // An object with 2 array props
    let { p1: [x1, y1], p2: [x2, y2] } = points; // destructured into 4 vars
    (x1 === 1 && y1 === 2 && x2 === 3 && y2 === 4) // => true

Understanding Complex Destructuring
If you find yourself working with code that uses complex destructuring assignments,
there is a useful regularity that can help you make sense of the complex cases. Think
first about a regular (single-value) assignment. After the assignment is done, you can
take the variable name from the lefthand side of the assignment and use it as an
expression in your code, where it will evaluate to whatever value you assigned it. The
same thing is true for destructuring assignment. The lefthand side of a destructuring
assignment looks like an array literal or an object literal (§6.2.1 and §6.10). After the
assignment has been done, the lefthand side will actually work as a valid array literal
or object literal elsewhere in your code. You can check that you’ve written a destruc‐
turing assignment correctly by trying to use the lefthand side on the righthand side of
another assignment expression:

    // Start with a data structure and a complex destructuring
    let points = [{x: 1, y: 2}, {x: 3, y: 4}];
    let [{x: x1, y: y1}, {x: x2, y: y2}] = points;
    
    // Check your destructuring syntax by flipping the assignment around
    let points2 = [{x: x1, y: y1}, {x: x2, y: y2}]; // points2 == points

 */

    