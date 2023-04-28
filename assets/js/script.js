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
    
    if(calcDisplay.innerHTML != ''){
        takeNumber();
    }    
});

btnMinus.addEventListener('click', () => {

    if(calcDisplay.innerHTML != ''){
        takeNumber();
    }  
});

btnDivider.addEventListener('click', () => {

    if(calcDisplay.innerHTML != ''){
        takeNumber();
    }  
});

btnMultiply.addEventListener('click', () => {

    if(calcDisplay.innerHTML != ''){
        takeNumber();
    }  
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

function theme1(){
    document.body.style.setProperty('--principalFontColor', '#ffffff');
    document.body.style.setProperty('--bgBodyColor', '#3b4664');
    document.body.style.setProperty('--bgDisplay', '#181f32');
    document.body.style.setProperty('--bgButtonPlace', '#252d44');
    document.body.style.setProperty('--bgBtn', '#eae3db');
    document.body.style.setProperty('--bgBtnResetDel', '#647299');
    document.body.style.setProperty('--bgBtnEqual', '#d13f30');
    document.body.style.setProperty('--fontNumberColor', '#444a59');
    document.body.style.setProperty('--btnShadow', '#b2a295');
    document.body.style.setProperty('--bgBtnResetDelShadow', '#424e75');
    document.body.style.setProperty('--bgBtnEqualShadow', '#8f2316');
    document.body.style.setProperty('--switchButtonBg', '#252d44');
    document.body.style.setProperty('--switchButton', '#d53d32');
    document.body.style.setProperty('--btnHover', '#ffffff');
    document.body.style.setProperty('--bgBtnResetDelHover', '#a2b3e1');
    document.body.style.setProperty('--bgBtnEqualHover', '#f96c5b');
    document.body.style.setProperty('--switchButtonHover', '#f76c5f');
    document.body.style.setProperty('--fontBtnEqualColor', '#ffffff');
}

function theme2(){
    document.body.style.setProperty('--principalFontColor', '#333329');
    document.body.style.setProperty('--bgBodyColor', '#e6e6e6');
    document.body.style.setProperty('--bgDisplay', '#eeeeee');
    document.body.style.setProperty('--bgButtonPlace', '#d3cdcd');
    document.body.style.setProperty('--bgBtn', '#e5e4e0');
    document.body.style.setProperty('--bgBtnResetDel', '#388187');
    document.body.style.setProperty('--bgBtnEqual', '#c85401');
    document.body.style.setProperty('--fontNumberColor', '#3d3d32');
    document.body.style.setProperty('--btnShadow', '#a79e90');
    document.body.style.setProperty('--bgBtnResetDelShadow', '#1d5c65');
    document.body.style.setProperty('--bgBtnEqualShadow', '#883a01');
    document.body.style.setProperty('--switchButtonBg', '#d4cdcd');
    document.body.style.setProperty('--switchButton', '#c45408');
    document.body.style.setProperty('--btnHover', '#ffffff');
    document.body.style.setProperty('--bgBtnResetDelHover', '#62b5bd');
    document.body.style.setProperty('--bgBtnEqualHover', '#ff8b38');
    document.body.style.setProperty('--switchButtonHover', '#f68d3a');
    document.body.style.setProperty('--fontBtnEqualColor', '#ffffff');
    document.body.style.setProperty('--fontBtnResetDelColor', '#ffffff');
}

function theme3(){
    document.body.style.setProperty('--principalFontColor', '#ffe43b');
    document.body.style.setProperty('--bgBodyColor', '#17062a');
    document.body.style.setProperty('--bgDisplay', '#1e0836');
    document.body.style.setProperty('--bgButtonPlace', '#1e0836');
    document.body.style.setProperty('--bgBtn', '#331b4d');
    document.body.style.setProperty('--bgBtnResetDel', '#56077c');
    document.body.style.setProperty('--bgBtnEqual', '#00decf');
    document.body.style.setProperty('--fontNumberColor', '#ffe43b');
    document.body.style.setProperty('--btnShadow', '#851c9c');
    document.body.style.setProperty('--bgBtnResetDelShadow', '#bf16f5');
    document.body.style.setProperty('--bgBtnEqualShadow', '#6efaf1');
    document.body.style.setProperty('--switchButtonBg', '#1e0837');
    document.body.style.setProperty('--switchButton', '#04e3d8');

    document.body.style.setProperty('--btnHover', '#6b34ac');
    document.body.style.setProperty('--bgBtnResetDelHover', '#8631b0');
    document.body.style.setProperty('--bgBtnEqualHover', '#94fff9');
    document.body.style.setProperty('--switchButtonHover', '#9bfffd');
    document.body.style.setProperty('--fontBtnEqualColor', '#01282b');
    document.body.style.setProperty('--fontBtnResetDelColor', '#ffffff');
}

/*       -----------        */
/*   ---End: Functions---   */