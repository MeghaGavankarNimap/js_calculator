function calculate() {
    // Get the input values and operator
    const num1 = parseFloat(document.getElementById('num1').value);
    const operator = document.getElementById('operator').value;
    const num2 = parseFloat(document.getElementById('num2').value);
    
    // Check if the input is valid
    if (isNaN(num1) || isNaN(num2)) {
        alert('Please enter valid numbers.');
        return;
    }

    // Perform the calculation based on the operator
    let result;
    switch (operator) {
        case '+':
            result = num1 + num2;
            break;
        case '-':
            result = num1 - num2;
            break;
        case '*':
            result = num1 * num2;
            break;
        case '/':
            if (num2 === 0) {
                alert('Division by zero is not allowed.');
                return;
            }
            result = num1 / num2;
            break;
        default:
            alert('Invalid operator.');
            return;
    }

    // Display the result
    document.getElementById('result').textContent = 'Result: ' + result;
}
