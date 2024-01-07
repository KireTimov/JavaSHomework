document.addEventListener('DOMContentLoaded' ,function () {
    
    const display = document.getElementById('display');
    const numbers = document.querySelectorAll('.number');
    const operators = document.querySelectorAll('.operator');
    
    
    let currentOperation = '';
    let firstOperand = '';
    let secondOperand = '';
    let secondOperand2 = '';

    
    for (let i = 0; i < numbers.length; i++) {
  const number = numbers[i];
  number.addEventListener('click', function () {
    if (secondOperand2) {
      secondOperand += this.innerText;
      display.value = firstOperand + currentOperation + secondOperand;
    } else {
      firstOperand += this.innerText;
      display.value = firstOperand + currentOperation + secondOperand;
    }
  });
}

for (let i = 0; i < operators.length; i++) {
  const operator = operators[i];
  operator.addEventListener('click', function () {
    if (!secondOperand2) {
      currentOperation = this.innerText;
      display.value = firstOperand + currentOperation;
      secondOperand2 = true;
    } else {
      calculate();
      currentOperation = this.innerText;
      display.value = firstOperand + currentOperation;
    }
  });
}
    
    document.getElementById('clear').addEventListener('click', clearCalculator);
    
    function clearCalculator() {
        firstOperand = '';
        secondOperand = '';
        currentOperation = '';
        secondOperand2 = false;
        display.value = '';
    }
    
    
    document.getElementById('deleteNumber').addEventListener('click', deleteNumber);
    
    
    function deleteNumber() {
    display.value = display.value.slice(0, -1);
    
}




document.getElementById('equals').addEventListener('click', calculate);

function calculate() {
    if (currentOperation && secondOperand !== '') {
        firstOperand = parseFloat(firstOperand);
        secondOperand = parseFloat(secondOperand);
        switch (currentOperation) {
            case '+':
                firstOperand += secondOperand;
                break;
                case '-':
                    firstOperand -= secondOperand;
                    break;
                    case '*':
                        firstOperand *= secondOperand;
                        break;
                        case '/':
                            firstOperand /= secondOperand;
                            break;
                        }
                        if (Math.abs(firstOperand) > 9999999) {
                                    display.value = 'Error:The number is too large';
                                    return;
                                }
                                if (secondOperand === 0) {
                                    display.value = 'Error: Cannot divide by 0';
                                    return;
                                }
                        display.value = firstOperand;
                        secondOperand = '';
                        secondOperand2 = true;
                        currentOperation = '';
                    }
                }
                
                
            });