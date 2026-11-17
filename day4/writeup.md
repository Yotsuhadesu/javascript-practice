# JavaScript Practice - Day 4
## Function
- a function is a block of code that can be used or "called" repeatedly to perform a task
- it doesn't do a thing unless you call it
- Syntax: 

        function functionName(optional parameter(s)) {
            // code statements
        }
        functionName(); // calling a function
## Arrow Function
- another way of writing a function
- Syntax:

        const functionName = (optional parameter(s)) => {
            // code statements
        };
## Parameters vs Arguments
- Parameters - placeholder for values passed into the function
- Arguments - actual values passed to the function when calling it
- Example:

        function multiply(num1, num2) { // these are parameters
            return num1 * num2;
        }
        multiply(2, 2); // these are arguments
## No Return vs Return Functions
- Functions may or may not return a value
- Return a value by using the `return` keyword
- The function will be terminated after calling the `return` keyword
## Default Parameters
- A function can use a pre assigned value for a parameter when there are no arguments passed
- Example:

        function greet(name = "User") {
            console.log("Hello, " + name + ".");
        }
        greet();    // Hello, User.
        greet("Violet");    // Hello, Violet.
## Local vs Global Variables
- Global Variable - variable outside a function
- Local variable - variable inside a function