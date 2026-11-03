# JavaScript Practice - Day 1
## Where JavaScript Goes
1. Inline JS - written directly inside an HTML tag
            
        <body>
            <button onclick="alert('Hello from inline JS')">Click me!</button>
        </body>
2. Internal JS - written inside the `<script>` tag
            
        <body>
            <script> 
                alert("Hello from internal JS!");
            </script>
        </body>
3. External JS - lives inside .js file and linked in the HTML file
        
        // inside script.js
        alert("Hello from external JS!")

        // inside HTML file
        <body>
            <script src="script.js"></script>
        </body>
## Variable Declaration and Assignment
- let - creates a variable that allows reassignment

        let score = 90;
        score = 85; // reassigns score's value with 85
- const - creates a variable that can't be reassigned

        const PI = 3.14;
        PI = 3; // error
- var - older way of declaring variables 

        console.log(city);  // city is undefined
        var city = "Legazpi";
## Data Types
1. string - enclosed in single or double quotes
2. number - integers, decimals, or negatives
3. boolean - true or false
4. null - intentional null value
5. undefined - declared variable but not assigned with a value
6. object - key:value pairs
7. array - a container of values
## Commands:
- console.log() - logs the value put inside the parenthesis in the console
- typeof - shows the data type of a variable
- Array.isArray() - checks if a variable is an array
- alert() - shows a pop-up message
## Extra Learnings
- use single quotes if the statement is wrapped inside double quotes
- always end a code statement with a semicolon
- array is a special type of object
- const allows the reassignment of values inside an object
- Bug: When you log a null's datatype, it would show that it is an object