function calculate(num1, num2, operator) {
	switch(operator) {
		case "1":
  		return num1 + num2;
  		break;
		case "2":
  		return num1 - num2
  		break;
		case "3":
  		return num1 * num2
  		break;
  	case "4":
  		return num1 / num2
  		break;	
	}
}

var num1 = parseInt(prompt("Enter the first number"));
var num2 = parseInt(prompt("Enter the second number"));
var operator = prompt("Enter the # of what you want to do: \n1: add \n2: subtract \n3: multiply \n4: divide");

console.log(calculate(num1, num2, operator))