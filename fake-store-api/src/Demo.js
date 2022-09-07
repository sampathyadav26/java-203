function y(num1) {
  return function x(num2) {
    return console.log(num1 + num2);
  };
}
y(10)(20);
aaa