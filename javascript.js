

let num1 = "";
let num2 = "";
let operator = "";
let isSecondNumber = false;

const numbers = document.querySelectorAll(".number");
const operators = document.querySelectorAll(".operator");
const equal = document.querySelector("#equal");
const resultDisplay = document.querySelector("#result");
const operationDisplay = document.querySelector("#operation");
const clear = document.querySelector("#clear");
const del = document.querySelector("#delete");
const dot = document.querySelector("#dot");


numbers.forEach(button => {
    button.addEventListener("click", ()=>{
        if(!isSecondNumber){
            num1 += button.textContent;
            resultDisplay.textContent = num1;
            operationDisplay.textContent = num1;
        }else{
            num2 += button.textContent;
            resultDisplay.textContent = num2;
            operationDisplay.textContent = `${num1} ${operator}`;
        }
    })
})

operators.forEach(button =>{
    button.addEventListener("click", () =>{
        
        if(num1 && num2 && operator){
            equal.click();
        }

        operator = button.textContent;
        isSecondNumber = true;
        operationDisplay.textContent = `${num1} ${operator}`;
    })
})

equal.addEventListener("click", () => {
    const number1 = Number(num1);
    const number2 = Number(num2);
    let res = 0;


    if (!operator || num2 === "") return;


    if (operator === '÷' && number2 === 0) {
        operationDisplay.textContent = `${num1} ${operator} ${num2}`;
        resultDisplay.textContent = "Zero Division Error";
        num1 = "";
        num2 = "";
        operator = "";
        isSecondNumber = false;
        return;
    }

    switch (operator) {
        case '+': res = number1 + number2; break;
        case '-': res = number1 - number2; break;
        case '*': res = number1 * number2; break;
        case '÷': res = number1 / number2; break;
    }

    operationDisplay.textContent = `${num1} ${operator} ${num2}`;
    resultDisplay.textContent = res;

    num1 = res.toString();
    num2 = "";
    operator = "";
    isSecondNumber = false;
});

clear.addEventListener("click", () => {
    num1 = "";
    num2 = "";
    operator = "";
    isSecondNumber = false;

    operationDisplay.textContent = "";
    resultDisplay.textContent = "";
});

del.addEventListener("click", () => {

    if(!isSecondNumber){
        num1 = num1.slice(0, -1);
        resultDisplay.textContent = num1 || "0";
    }else{
        num2 = num2.slice(0, -1);
        resultDisplay.textContent = num2 || "0";
    }
});

dot.addEventListener("click", () => {

    if(!isSecondNumber){
        if(!num1.includes(".")){
            num1 = num1 === "" ? "0." : num1 + ".";
            resultDisplay.textContent = num1;
        }
    }else {
        if(!num2.includes(".")){
            num2 = num2 === "" ? "0." : num2 + ".";
            resultDisplay.textContent = num2;
        }
    }

});