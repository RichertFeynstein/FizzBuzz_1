const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Enter an integer: ', function(input) {
  const integer = parseInt(input);
  if (integer % 3 === 0 && integer % 5 === 0) {
    console.log("FizzBuzz");
  } else if (integer % 3 === 0) {
    console.log("Fizz");
  } else if (integer % 5 === 0) {
    console.log("Buzz");
  } else {
    console.log(integer);
  }
  rl.close();
});
