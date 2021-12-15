"use strict";
exports.__esModule = true;
var readline_sync_1 = require("readline-sync");
function main() {
    var firstStr = (0, readline_sync_1.question)('Enter the first number:\n');
    var operator = (0, readline_sync_1.question)('Enter operator:\n');
    var secondStr = (0, readline_sync_1.question)('Enter the second number:\n');
    var validInput = isNumber(firstStr) && isOperator(operator) && isNumber(secondStr);
    // const answer: number = 
    console.log(validInput);
    if (validInput) {
        var firstNum = parseInt(firstStr);
        var secondNum = parseInt(secondStr);
        // override Operator as the 
        var result = calculate(firstNum, operator, secondNum);
        console.log(result);
    }
    else {
        console.log('invalid input\n');
        main();
    }
}
function isNumber(str) {
    var mayBeNum = parseInt(str);
    var isNum = !isNaN(mayBeNum);
    return isNum;
}
function isOperator(str) {
    var isOp = false;
    if (str === '+' || str === '-' || str === '*' || str === '/')
        isOp = true;
    return isOp;
}
function calculate(firstNum, operator, secondNum) {
    switch (operator) {
        case '+':
            return firstNum + secondNum;
        case '-':
            return firstNum - secondNum;
        case '*':
            return firstNum * secondNum;
        case '/':
            return firstNum / secondNum;
    }
    return 0;
}
main();
