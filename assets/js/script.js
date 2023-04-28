/*   ---Button Operators---   */

const btnPlus = document.querySelector('#btn-plus');
const btnMinus = document.querySelector('#btn-minus');
const btnDivider = document.querySelector('#btn-divider');
const btnMultiply = document.querySelector('#btn-multiply');

const btnDot = document.querySelector('#btn-dot');

/*   ---Button Functions---   */
const btnEqual = document.querySelector('#btn-equal');

/*   ---Display---   */
const calcDisplay = document.querySelector('#calc-display');

/*   ---Variables---   */
let num1 = 0;
let num2 = 0;
let operator = '';
let result = 0;
btnEqual.disabled = true;



/*   ---Star: Events---   */
/*       ---------        */

btnPlus.addEventListener('click', () => {
    
    takeNumber();
});

btnMinus.addEventListener('click', () => {

    takeNumber();
});

btnDivider.addEventListener('click', () => {

    takeNumber();
});

btnMultiply.addEventListener('click', () => {

    takeNumber();
});

btnEqual.addEventListener('click', () => {

    num2 = parseFloat(calcDisplay.innerHTML);

    if (operator == "+") {
        result = num1 + num2;
        num1 = result;

    } else if (operator == "-") {
        result = num1 - num2;
        num1 = result;

    } else if (operator == "*") {
        result = num1 * num2;
        num1 = result;

    } else if(operator == "/" && (num1 == 0 || num2 ==0)) {
        result = "Can't divide by 0";

    } else {
        result = num1 / num2;
        num1 = result;
    }
    
    calcDisplay.innerHTML = result;
    btnDot.disabled = false;
    btnEqual.disabled = true;
});


/*       --------        */
/*   ---End: Events---   */



/*   ---Star: Functions---   */
/*       ------------        */

function printNumber(x) {
    calcDisplay.innerHTML += x;
}

function printDot(x) {

    btnDot.disabled = true;
    calcDisplay.innerHTML += x;
}

function cleanDisplay() {
    calcDisplay.innerHTML = "";

}

function selectedOperator(x) {
    operator = x;
}

function resetAll() {
    num1 = 0;
    num2 = 0;
    operator = '';
    result = 0;
    calcDisplay.innerHTML = "";
    btnDot.disabled = false;
    btnEqual.disabled = true;
}

function takeNumber() {
    if(num1 == 0) {
        num1 = parseFloat(calcDisplay.innerHTML);

        cleanDisplay();
        btnDot.disabled = false;
        btnEqual.disabled = false;

    } else {
        num2 = parseFloat(calcDisplay.innerHTML);
        cleanDisplay();
        btnDot.disabled = false;
        btnEqual.disabled = false;
    }
}

/*       -----------        */
/*   ---End: Functions---   */

