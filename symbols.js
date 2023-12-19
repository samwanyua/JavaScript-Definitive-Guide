/**
 * Symbols were introduced in ES6 to serve as non-string property names. To under‐
stand Symbols, you need to know that JavaScript’s fundamental Object type is an
unordered collection of properties, where each property has a name and a value.

Symbols can also serve this purpose:
    let strname = "string name"; // A string to use as a property name
    let symname = Symbol("propname"); // A Symbol to use as a property name
    typeof strname // => "string": strname is a string
    typeof symname // => "symbol": symname is a symbol
    let o = {}; // Create a new object
    o[strname] = 1; // Define a property with a string name
    o[symname] = 2; // Define a property with a Symbol name
    o[strname] // => 1: access the string-named property
    o[symname] // => 2: access the symbol-named property

The Symbol type does not have a literal syntax. To obtain a Symbol value, you call the
Symbol() function. This function never returns the same value twice, even when
called with the same argument.

The Symbol() function takes an optional string argument and returns a unique Sym‐
bol value. If you supply a string argument, that string will be included in the output
of the Symbol’s toString() method. Note, however, that calling Symbol() twice with
the same string produces two completely different Symbol values.
    let s = Symbol("sym_x");
    s.toString() // => "Symbol(sym_x)"


JavaScript defines a global Symbol registry. The
Symbol.for() function takes a string argument and returns a Symbol value that is
associated with the string you pass. If no Symbol is already associated with that string,
then a new one is created and returned; otherwise, the already existing Symbol is
returned. That is, the Symbol.for() function is completely different than the Sym
bol() function: Symbol() never returns the same value twice, but Symbol.for()
always returns the same value when called with the same string. The string passed to
Symbol.for() appears in the output of toString() for the returned Symbol, and it
can also be retrieved by calling Symbol.keyFor() on the returned Symbol.
    let s = Symbol.for("shared");
    let t = Symbol.for("shared");
    s === t // => true
    s.toString() // => "Symbol(shared)"
    Symbol.keyFor(t) // => "shared"




























 */