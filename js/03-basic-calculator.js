// Create a function that will serve as the main calculation logic of your application. This function should be called calculate and will accept three parameters: x, y, and operation.
// In the script, prompt the user for a number and store that in a variable. Convert that to a number.
// Then, prompt the user for a second number and store that in a variable. Convert that to a number.
// Next, prompt the user for the operation they would like to perform (add, subtract, multiply, divide) and store that in a variable.
// Finally, pass the three parameters into the calculate function to return the result of the calculation. You'll need to add a switch statement inside the calculate function to evaluate the operation and perform the appropriate calculation on the x and y numbers based on the operation passed in. 
// Display the result of the calculation within an alert.
// Figure out how to make it so that if the user doesn’t enter either add, subtract, multiply, or divide, they are displayed an alert message telling them that. Then you’ll have to rerun the application so that the application asks the user for the numbers and operation once more. You’ll have to add this functionality within a do while loop similarly how the labs were done in the previous lecture.
 
// ADD A FUNCTION CALLED CALCULATE
function calculate(x, y, operation) {



// COLLECT FIRST NUMBER FROM USER
let x = parseInt(prompt('Enter the first number'))

// COLLECT SECOND NUMBER FROM USER
let y = parseInt(prompt('Enter the second number'))

// COLLECT OPERATION TO PERFORM (+,-,*,/) FROM USER
let operation = prompt('Enter the operation to perform (subtract, add, multiply, or divide)')

// CALL THE FUNCTION AND RETURN THE RESULT WITHIN AN ALERT
switch(someName) {
    case multiply:
        // code block
        break;
    case divide:
        // code block
        break;
    case subtrack:
        // code block
        break; 
    case addition:
        // code block
        break;    
    default:
      // code block
  }




return result
}

calculate(x, y, operation)
