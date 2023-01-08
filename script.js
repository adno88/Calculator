const currentNumber = document.querySelector('.currentNumber');
const previousNumber = document.querySelector('.previousNumber p');
const sign = document.querySelector('.screenSign');
const buttonsNumbers = document.querySelectorAll('.number');
const buttonsOperators = document.querySelectorAll('.operator');
const equals = document.querySelector('.equals');
const clear = document.querySelector('.clear');

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

    if(sign.innerHTML === '+') {
        result = Number(previousNumber.innerHTML) + Number(currentNumber.innerHTML);
        document.querySelector('.currentNumber').innerHTML = result;
        previousNumber.innerHTML = '';
        sign.innerHTML = '';
    }
    if(sign.innerHTML === '-') {
        let result = Number(previousNumber.innerHTML) - Number(currentNumber.innerHTML);
        document.querySelector('.currentNumber').innerHTML = result;
        previousNumber.innerHTML = '';
        sign.innerHTML = '';
    }
    if(sign.innerHTML === 'x') {
        let result = Number(previousNumber.innerHTML) * Number(currentNumber.innerHTML);
        document.querySelector('.currentNumber').innerHTML = result;
        previousNumber.innerHTML = '';
        sign.innerHTML = '';
    }
    if(sign.innerHTML === ':') {
        let result = Number(previousNumber.innerHTML) / Number(currentNumber.innerHTML);
        document.querySelector('.currentNumber').innerHTML = result;
        previousNumber.innerHTML = '';
        sign.innerHTML = '';
    }
    if(sign.innerHTML === '2^') {
        let result = Math.pow(Number(previousNumber.innerHTML),  Number(currentNumber.innerHTML));
        document.querySelector('.currentNumber').innerHTML = result;
        previousNumber.innerHTML = '';
        sign.innerHTML = '';
    }
}

function clearButton() {
    currentNumber.innerHTML = '';
    previousNumber.innerHTML = '';
    sign.innerHTML = '';
    result.innerHTML = '';

}

//nasłuchiwacze

buttonsOperators.forEach((button) => button.addEventListener('click', calculate))

equals.addEventListener('click', showResult);

clear.addEventListener('click', clearButton);

buttonsNumbers.forEach((button) => {
    button.addEventListener('click', showNumbers)
})