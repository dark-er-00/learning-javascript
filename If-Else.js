let num1 = Number(prompt("Enter first number: "));
let num2 = Number(prompt("Enter second number: "));
let operator = prompt("Enter an operator (+, -, *, /): ");

if(!Number.isNaN(num1) && !Number.isNaN(num2)){
    switch(operator){
        case "+":
            alert(num1 + num2);
            break;
            
        case "-":
            alert(num1 - num2);
            break;
            
        case "*":
            alert(num1 * num2);
            break;
            
        case "/":
            alert(num1 / num2);
            break;
            
        default:
            alert("Invalid operator");
    }
} else {
    alert("You input an invalid operand.");
}