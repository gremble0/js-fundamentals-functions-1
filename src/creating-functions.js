// 1. Define a function that takes a number and increments it by 1.
//
// Example Input and Output:
//
// Input  | Output
// 1      | 2
// 2      | 3
//
// TODO: write code below

// 2. Define a function that capitalises any string
/**
 * @param {string} s
 * @returns {string}
 */
function capitalize(s) {
  return s.charAt(0).toUpperCase() + s.slice(1)
}

// Example Input and Output:
//
// Input | Output
// hello | Hello
// world | World
// Hello | Hello

// TODO: write code below

// 3. Define a function that takes any person's name and returns it with a smiley :)!
// Remember to make the name capitalized!
//
// Example Input and Output:
//
// Input  | Output
// edward | Hi, Edward :)
// Aiyana | Hi, Aiyana :)
//
// TODO: write code below

// 4. Define a function that takes an array of data and returns how many strings are in the array.
//
// Example Input and Output:
//
// Input                | Output
// ['edward']           | 1
// ['edward', 'aiyana'] | 2
// [1]                  | 0
// [1, 'edward']        | 1
//
// TODO: write code below

// 5. Define a function that takes an object and adds a property 'edward' to the object if it doesn't yet exist with a default value of 'amazing'
//
// Example Input and Output:
//
// Input                    | Output
// {}                       | { edward: 'amazing' }
// { aiyana: 'fantastic' }  | { aiyana: 'fantastic', edward: 'amazing' }
// { edward: 'fabulous'}    | { edward: 'fabulous'}
//
// TODO: write code below

// TODO: change each undefined below to be the name of the functions you defined
module.exports = {
  a: (i) => i + 1,
  b: capitalize,
  c: (name) => 'Hi, ' + capitalize(name) + ' :)',
  d: (arr) => arr.filter((x) => typeof x === 'string').length,
  e: (obj) => {
    if (!obj.hasOwnProperty('edward')) obj.edward = 'amazing'
    return obj
  }
}
