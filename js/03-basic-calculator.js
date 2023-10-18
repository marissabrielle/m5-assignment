let x
let y
let operation

// ADD A FUNCTION CALLED CALCULATE
function calculate(x, y, operation) {

    // COLLECT FIRST NUMBER FROM USER
    x = parseFloat(prompt('Enter the first number'))

    while (isNaN(x)) {
        alert('please enter a valid number')
        x = parseFloat(prompt('Enter the first number'))
        continue
    }

    // COLLECT SECOND NUMBER FROM USER
    y = parseFloat(prompt('Enter the second number')) 

    while (isNaN(y)) {
        alert('please enter a valid number')
        y = parseFloat(prompt('Enter the second number'))
        continue
    }

    // COLLECT OPERATION TO PERFORM (+,-,*,/) FROM USER
    operation = prompt('Enter the operation to perform (+, -, *, /)')

    switch (operation) {
        case '+':
            result = x + y
            alert(`${x} + ${y} = ${result}`)
            break

        case '-':
            result = x - y
            alert(`${x} - ${y} = ${result}`)
            break

        case '*':
            result = x * y
            alert(`${x} * ${y} = ${result}`)
            break

        case '/':
            result = x / y
            alert(`${x} / ${y} = ${result}`)
            break

        default:
            alert('Invalid operation, please try again')
            calculate(x, y, operation)
            break
    }

    return result
}

// CALL THE FUNCTION AND RETURN THE RESULT WITHIN AN ALERT
function init() {
    let playAgain = 'y'
    do {
        calculate(x, y, operation)
        playAgain = prompt('Do you want to use the calculator again? (y/n)')
    } while (playAgain === 'y')
    alert('Application ended')
}

init() 