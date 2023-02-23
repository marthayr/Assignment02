let grade = parseInt(prompt('Enter your score (from 1 to 100)'));

if(grade > 100 || grade < 1){ // check if number is not between 1-100
    alert('number must be between 1 and 100');
    let grade = parseInt(prompt('Enter your score (from 1 to 100)'))
    if(grade >= 60 && grade <= 69){
        console.log('You Recieved a D');
    }else if(grade >= 70 && grade <= 79){
        console.log('You Recieved a C');
    }else if(grade >= 80 && grade <=89){
        console.log('You Recieved a B');
    }else if(grade >= 90 && grade <=100){
        console.log('You Recieved an A');
    }else if(grade < 60){
        console.log('You recieved an F');
    }
}
if(grade >= 60 && grade <= 69){
    console.log('You Recieved a D');
}else if(grade >= 70 && grade <= 79){
    console.log('You Recieved a C');
}else if(grade >= 80 && grade <=89){
    console.log('You Recieved a B');
}else if(grade >= 90 && grade <=100){
    console.log('You Recieved an A');
}else if(grade < 60){
    console.log('You recieved an F');
}