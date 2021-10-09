function calculate(inputValue) {
  const expression = /\+|\-|\*|\//;
  const numbers = inputValue.split(expression);
  debugger;

  const numberA = parseInt(numbers[0]);
  const numberB = parseInt(numbers[1]);

  const operation = inputValue.match(expression);
}
