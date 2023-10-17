function con(number1, number2) {
  return number2 = (number1 - 32) * 5 / 9;
}

const number1 = parseInt(prompt("Enter a number in Farenheit:"));

function saySomething(whatToSay) {
  window.alert(whatToSay);
}

const result = con(number1)
const outputText = " The temperature in degrees Celsius is " + result + ".";

saySomething(outputText);