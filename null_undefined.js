/** NULL AND UNDEFINED
 * null is a language keyword that evaluates to a special value that is usually used to
indicate the absence of a value.

Using the typeof operator on null returns the string
“object”, indicating that null can be thought of as a special object value that indicates
“no object”. 

The undefined
value represents a deeper kind of absence. It is the value of variables that have not
been initialized and the value you get when you query the value of an object property
or array element that does not exist. The undefined value is also the return value of
functions that do not explicitly return a value and the value of function parameters
for which no argument is passed.

Despite these differences, null and undefined both indicate an absence of value and
can often be used interchangeably. The equality operator == considers them to be
equal. (Use the strict equality operator === to distinguish them.) Both are falsy values:
they behave like false when a boolean value is required.

I consider undefined to represent a system-level, unexpected, or error-like absence of
value and null to represent a program-level, normal, or expected absence of value










































 */