import { question } from 'readline-sync';

type Operator = '+' | '-' | '*' | '/';

function main(): void{
    const firstStr: string = question('Enter the first number:\n');
    const operator: string = question('Enter operator:\n');
    const secondStr: string = question('Enter the second number:\n');

    const validInput: boolean = isNumber(firstStr) && isOperator(operator) && isNumber(secondStr);
    // console.log(validInput);
    if(validInput){
        const firstNum: number = parseInt(firstStr);
        const secondNum: number = parseInt(secondStr);
        // override Operator as the 
        const result = calculate(firstNum, operator as Operator, secondNum); 
        console.log(result);
    }
    else{
        console.log('invalid input\n');
        main();
    }
}

function isNumber(str: string): boolean{
    const mayBeNum = parseInt(str);
    const isNum: boolean = !isNaN(mayBeNum);
    return isNum;
}

function isOperator(str: String): boolean{
    var isOp: boolean = false;
    if(str === '+' || str === '-' || str === '*' || str === '/')
        isOp = true;
    return isOp;
}

function calculate(firstNum: number, operator: Operator, secondNum: number): number{
    switch(operator){
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