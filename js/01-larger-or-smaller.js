let firstNum = parseInt(prompt('Enter your first number'));
let secondNum = parseInt(prompt('Enter your second number'));

if(firstNum > secondNum || firstNum == secondNum){
    document.write(`The first number: ${firstNum} is the largest number that was entered`);
    
}else{
    document.write(`The second number: ${secondNum} is the largest number that was entered`)
}