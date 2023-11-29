    let currentValue = '';
    let previousValue = '';
    let operation = null;

    // Update the display
    function updateDisplay() {
        const display = document.querySelector('.display'); // Adjust the selector as per your HTML
        display.innerHTML = currentValue;
    }

    // Handle number button click
    function handleNumber(number) {
        currentValue += number;
        updateDisplay();
    }

    // Handle operation button click
    function handleOperation(op) {
        if (currentValue === '') return;
        if (previousValue !== '') {
            calculate();
        }
        console.log(op)
        operation = op;
        previousValue = currentValue;
        currentValue = '';
    }

    function calculate() {
        let result;
        const prev = parseFloat(previousValue);
        const current = parseFloat(currentValue);

        switch (operation) {
            case '+':
                result = prev + current;
                break;
            case '-':
                result = prev - current;
                break;
            case '*':
                result = prev * current;
                break;
            case '/':
                result = prev / current;
                break;
            default:
                return;
        }
        result = Math.floor( result * 100000 ) / 100000
        currentValue = result.toString();
        operation = null;
        previousValue = '';
        updateDisplay();
    }

    function clearButton(){
        currentValue = '';
        previousValue = '';
        operation = null;
        updateDisplay();
    }


