// asks the user for a value and converts it into a number
let num1 = Number(prompt("Enter a number: "));  
let num2 = Number(prompt("Enter a number: "));

// this shows that the entered value is a number
console.log(typeof num1);   

// gets the element with an ID of "sum" in the HTML page and inserts the sum of the two values in plain text
document.getElementById("sum").textContent = num1 + num2;   