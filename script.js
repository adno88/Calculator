const currentNumber = document.querySelector('.currentNumber');
const previousNumber = document.querySelector('.previousNumber p');
const sign = document.querySelector('.screenSign');
const buttonsNumbers = document.querySelectorAll('.number');
const buttonsOperators = document.querySelectorAll('.operator');
const equals = document.querySelector('.equals');
const clear = document.querySelector('.clear');
const deleteLastDigit = document.querySelector('.delete');
const mohistory = document.querySelector('.list');
let result = '';

function showNumbers() {
    if(this.textContent === '.' && currentNumber.innerHTML.includes('.')) return;
    if(this.textContent === '' && currentNumber.innerHTML.includes('')) return currentNumber.innerHTML = '.0';

    currentNumber.innerHTML += this.textContent;
}

function calculate() {
    if(currentNumber.innerHTML === '' && this.textContent ==='-') {
        currentNumber.innerHTML = '-';
        return;
    }
    else if (currentNumber.innerHTML === '') {
        return;
    }
    if(sign.innerHTML !== '') {
        showResult();
    }
    previousNumber.innerHTML = currentNumber.innerHTML;
    sign.innerHTML = this.textContent;
    currentNumber.innerHTML = '';
}

function showResult() {
    if(previousNumber.innerHTML === '' || currentNumber.innerHTML === '') return;

    let a = Number(currentNumber.innerHTML);
    let b = Number(previousNumber.innerHTML);
    let operator = sign.innerHTML;

    switch(operator) {
        case '+':
            result = a + b;
            break;
        case '-':
            result = b - a;
            break;
        case 'x':
            result = a * b;
            break;
        case ':':
            result = b / a;
            break;
        case '2^':
            result = b ** a;
            break;
    }

    addToHistory();
    currentNumber.innerHTML = result;
    previousNumber.innerHTML = '';
    sign.innerHTML = '';
}

function del() {
    currentNumber.innerHTML = currentNumber.innerHTML.slice(0, -1);
}

function clearButton() {
    currentNumber.innerHTML = '';
    previousNumber.innerHTML = '';
    sign.innerHTML = '';
    result.innerHTML = '';

}

function addToHistory() {
    const historyItem = document.createElement('li');
    historyItem.innerHTML = `${currentNumber.innerHTML} ${sign.innerHTML} ${previousNumber.innerHTML} = ${result}`
    historyItem.classList.add('list-item');
    mohistory.appendChild(historyItem);
}

buttonsOperators.forEach((button) => button.addEventListener('click', calculate))

equals.addEventListener('click', showResult);

clear.addEventListener('click', clearButton);

deleteLastDigit.addEventListener('click', del);

buttonsNumbers.forEach((button) => {
    button.addEventListener('click', showNumbers)
})