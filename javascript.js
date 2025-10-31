

let num1 = "";
let num2 = "";
let operator = "";
let isSecondNumber = false;

const numbers = document.querySelectorAll(".number");
const operators = document.querySelectorAll(".operator");
const display = document.querySelector("#display");
const equal = document.querySelector("#equal");


numbers.forEach(button => {
    button.addEventListener("click", ()=>{
        if(!isSecondNumber){
            num1 += button.textContent;
            display.textContent = num1;
        }else{
            num2 += button.textContent;
            display.textContent = num2;
        }
    })
})

operators.forEach(button =>{
    button.addEventListener("click", () =>{
        operator = button.textContent;
        isSecondNumber = true;
    })
})

equal.addEventListener("click", () => {
    number1 = Number(num1);
    number2 = Number(num2);
    let res = 0;

    switch(operator){
        case '+': res = number1 + number2;
            break;
        case '-': res = number1 - number2;
            break;
        case '*': res = number1 * number2;
            break;
        case '÷': 
            if(number2 === 0){
                res = "Zero Division Error";
                break;
            }
            res = number1 / number2;
            break;
    }

    num1 = res.toString();
    num2 = "";
    operator = "";
    isSecondNumber = false;

    display.textContent = res;
})