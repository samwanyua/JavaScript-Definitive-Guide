/**
 * The
global object is a regular JavaScript object that serves a very important purpose: the
properties of this object are the globally defined identifiers that are available to a Java‐
Script program. When the JavaScript interpreter starts (or whenever a web browser
loads a new page), it creates a new global object and gives it an initial set of properties
that define:
    • Global constants like undefined, Infinity, and NaN
    • Global functions like isNaN(), parseInt() , and eval()
    • Constructor functions like Date(), RegExp(), String(), Object(), and Array()
    • Global objects like Math and JSON

The initial properties of the global object are not reserved words, but they deserve to
be treated as if they are.

In Node, the global object has a property named global whose value is the global
object itself, so you can always refer to the global object by the name global in Node
programs.

In web browsers, the Window object serves as the global object for all JavaScript code
contained in the browser window it represents. This global Window object has a selfreferential window property that can be used to refer to the global object. The Win‐
dow object defines the core global properties, but it also defines quite a few other
globals that are specific to web browsers and client-side JavaScript. 

>> Immutable Primitive Values and Mutable Object References
There is a fundamental difference in JavaScript between primitive values (undefined,
null, booleans, numbers, and strings) and objects (including arrays and functions).

Primitives are immutable: there is no way to change (or “mutate”) a primitive value.

Since strings are like arrays of characters, you might expect to be able to alter the character at any specified
index. In fact, JavaScript does not allow this, and all string methods that appear to
return a modified string are, in fact, returning a new string value. For example:
    let s = "hello"; // Start with some lowercase text
    s.toUpperCase(); // Returns "HELLO", but doesn't alter s
    s // => "hello": the original string has not changed

Primitives are also compared by value: two values are the same only if they have the
same value. This sounds circular for numbers, booleans, null, and undefined: there
is no other way that they could be compared. Again, however, it is not so obvious for
strings. If two distinct string values are compared, JavaScript treats them as equal if,
and only if, they have the same length and if the character at each index is the same.

Objects are different than primitives. First, they are mutable—their values can
change:
    let o = { x: 1 }; // Start with an object
    o.x = 2; // Mutate it by changing the value of a property
    o.y = 3; // Mutate it again by adding a new property
    
    let a = [1,2,3]; // Arrays are also mutable
    a[0] = 0; // Change the value of an array element
    a[3] = 4; // Add a new array element

Objects are not compared by value: two distinct objects are not equal even if they
have the same properties and values. And two distinct arrays are not equal even if
they have the same elements in the same order:
    let o = {x: 1}, p = {x: 1}; // Two objects with the same properties
    o === p // => false: distinct objects are never equal
    
    let a = [], b = []; // Two distinct, empty arrays
    a === b // => false: distinct arrays are never equal

Objects are sometimes called reference types to distinguish them from JavaScript’s
primitive types. Using this terminology, object values are references, and we say that
objects are compared by reference: two object values are the same if and only if they
refer to the same underlying object.
    let a = []; // The variable a refers to an empty array.
    let b = a; // Now b refers to the same array.
    b[0] = 1; // Mutate the array referred to by variable b.
    a[0] // => 1: the change is also visible through variable a.
    a === b // => true: a and b refer to the same object, so they are equal.
 
    
As you can see from this code, assigning an object (or array) to a variable simply
assigns the reference: it does not create a new copy of the object. If you want to make
a new copy of an object or array, you must explicitly copy the properties of the object
or the elements of the array. This example demonstrates using a for loop (§5.4.3):
    let a = ["a","b","c"]; // An array we want to copy
    let b = []; // A distinct array we'll copy into
    for(let i = 0; i < a.length; i++) { // For each index of a[]
    b[i] = a[i]; // Copy an element of a into b
    }
    let c = Array.from(b); // In ES6, copy arrays with Array.from()


Similarly, if we want to compare two distinct objects or arrays, we must compare their
properties or elements. This code defines a function to compare two arrays:
    function equalArrays(a, b) {
    if (a === b) return true; // Identical arrays are equal
    if (a.length !== b.length) return false; // Different-size arrays not equal
    for(let i = 0; i < a.length; i++) { // Loop through all elements
    if (a[i] !== b[i]) return false; // If any differ, arrays not equal
    }
    return true; // Otherwise they are equal
}

































 */