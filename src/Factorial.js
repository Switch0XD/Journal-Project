const number = parseInt(prompt('Enter a positive integer: '));

// checking if number is negative
if (number < 0) {
  console.log('Error! Factorial for negative number does not exist.');
}

// if number is 0
else if (number === 0) {
  console.log(`The factorial of ${number} is 1.`);
}

// if number is positive
else {
  let fact = 1;
  // eslint-disable-next-line no-undef
  for (i = 1; i <= number; i++) {
    // eslint-disable-next-line no-undef
    fact *= i;
  }
  console.log(`The factorial of ${number} is ${fact}.`);
}