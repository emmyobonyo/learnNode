// Javascript Data types and Data structures.

let foo = 42 // foo is now a number.
foo = 'bar'
foo = true

// Javascript allows implicit type comversion

const fool = 42 // foo in now a number
const result = foo + '1' // Javascript coerces foo to be a string, so it can concatenated with the other operand
console.log(result) // 421 but now 421 is a string.

//Primitive types -- Represented at the lowest level of the language

//null is a falsy value

//BigInt --> Allows us to work with numbers greater than the max safe integer
// Definitely write about BigInt (mostly for my won learning)
const x = 1n
console.log(x + BigInt(Number.MAX_SAFE_INTEGER))

// We cn use operators with BigInt

// NaN is not equal to itself.
// Nan equates to false
console.log(!!NaN)

//The first element of a string is at index 0. The length of a string is the number of elements in it.

//Javascript strings are immutable Once it's created, it can not be changed. 

//Stopped at Javascript Stings 