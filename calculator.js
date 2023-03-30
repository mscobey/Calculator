//basic math functions
function add(a,b){
    return a+b;
}

function subtract(a,b){
    return a-b;
}

function multiply(a,b){
    return a*b;
}

function divide(a,b){
    return a/b;
}
function operate(a,b,operator){
    switch(operator){
        case '+':
            return add(a,b);
            break;
        case '-':
            return subtract(a,b);
            break;
        case '*':
            return multiply(a,b);
            break;
        default:
            return divide(a,b);
            break;
    }
}
//display
let display = document.getElementById('screen');
//display.innerHTML = '5+3';

function clearDisplay(){
    display.innerHTML='';
    operatorPressed=false;
}
function zeroDisplay(){
    display.innerHTML=0;
    firstNum = secondNum = total = '';
}
function toDisplay(val){
    display.innerHTML+=val;
}
//running values
let firstNum='';
let secondNum='';
let total='';
let operator;
let operatorPressed = false;

for(let i =0;i<10;i++){
    document.getElementById(`${i}`).addEventListener('click',()=>{
        if(operatorPressed){
            secondNum+= `${i}`;
            toDisplay(i);
        }
        else{
            firstNum+= `${i}`;
            toDisplay(i);
        }
    });
}

document.getElementById('clear').addEventListener('click',()=>{
    zeroDisplay();
});
document.getElementById('add').addEventListener('click',()=>{
    if(operatorPressed){
        total=operate(Number(firstNum),Number(secondNum),operator);
        firstNum=total;
        secondNum=0;
        clearDisplay();
        toDisplay(total);
        operatorPressed=false;
    }
    toDisplay('+');
    operator='+';
    operatorPressed=true;
});
document.getElementById('subtract').addEventListener('click',()=>{
    if(operatorPressed){
        total=operate(Number(firstNum),Number(secondNum),operator);
        firstNum=total;
        secondNum=0;
        clearDisplay();
        toDisplay(total);
        operatorPressed=false;
    }
    toDisplay('-');
    operator='-';
    operatorPressed=true;
});
document.getElementById('multiply').addEventListener('click',()=>{
    if(operatorPressed){
        total=operate(Number(firstNum),Number(secondNum.replace(' ','')),operator);
        firstNum=total;
        secondNum=0;
        clearDisplay();
        toDisplay(total);
        operatorPressed=false;

    }
    toDisplay('*');
    operator='*';
    operatorPressed=true;
});
document.getElementById('divide').addEventListener('click',()=>{
    if(operatorPressed){
        total=operate(Number(firstNum),Number(secondNum),operator);
        firstNum=total;
        secondNum=0;
        clearDisplay();
        toDisplay(total);
        operatorPressed=false;
    }
    toDisplay('/');
    operator='/';
    operatorPressed=true;
});
document.getElementById('equals').addEventListener('click',()=>{
    total=operate(Number(firstNum),Number(secondNum),operator);
    firstNum=total;
    secondNum=0;
    clearDisplay();
    toDisplay(total);
});
let decPressed=false;
document.getElementById('decimal').addEventListener('click',()=>{
    if(operatorPressed&&!decPressed){
        secondNum+= '.';
        decPressed=true;
        toDisplay('.');
    }
    else if(!decPressed){
        firstNum+= '.';
        decPressed=true;
        toDisplay('.');
    }
});