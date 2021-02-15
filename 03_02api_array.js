//4 ways to convert string into array

const string = "word";

// Option 1
string.split("");

// Option 2
[...string];

// Option 3
Array.from(string);

// Option 4
Object.assign([], string);

// Result:
// ['w', 'o', 'r', 'd']

//
//
//
//
// convert number into array

const n = 123456;
Array.from(n.toString()).map(Number);
// [1, 2, 3, 4, 5, 6]

(123456789)
  .toString(10)
  .split("")
  .map(function (t) {
    return parseInt(t);
  });
// this will return an array of ints

(123456789).toString(10).split("");
//this will return an array of strings
