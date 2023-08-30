const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function fizzBuzzLoop() {
  rl.question('Enter an integer (or type "exit" to quit): ', function(input) {
    if(input.toLowerCase() === 'exit') {
      rl.close();
      return;
    }
  
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

    // Call the function again to get another input
    fizzBuzzLoop();
  });
}

fizzBuzzLoop();
