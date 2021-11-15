console.log("!!FIND PRİME NUMBERS!!")
function findPrimeNumbers(...numbers) {
    numbers.forEach((number) => {
        let status = true;
        for (let i = 2; i < number; i++) {
            if(number % i == 0){
                status = false;
            }
        }

        //Ternary//
        status ? console.log("PRİME NUMBER:" + number) : console.log("NOT PRİME:", number);
    });
}
findPrimeNumbers(2,9,3,1,20,4)

//question2


console.log("*friends number!!")
function friendNumbers(number1,number2) {
    let number1Division = [];
    let addition1 = 0;
    let addition2 = 0;

    for(let  i = 0; i< number1;i++){
        if (number1 % i == 0){
            number1Division.push(i);
        }
    }

    let number2Division = [];{
        for (let i = 0; i < number2; i++){
            if (number2 % i == 0){
                number2Division.push(i);
            }
        }
    }

    number1Division.forEach((number)=>{
        addition1 += number;
    })

    number2Division.forEach((number)=>{
        addition2 += number;
    })

    if (addition1 == number2 && addition2 == number1){
        console.log("these two friends are numbers:" + number1 + "*"+ number2);
    }
    else{
        console.log("These two numbers are not friend numbers:"+ number1 + "*"+ number2)
    }

    
}
friendNumbers(220,284)

//question3

console.log("!! 1000 PERFECT NUMBER!!")
function perfectNumber() {
    let perfectNumbers = [];

    for(let i = 6; i <= 1000; i++){
        let addition = 0;

        for(let j = 1; j <=i; j++){
            if(i%j == 0){
                addition += j;
            }
        }

        if(addition == i*2){
            perfectNumbers.push(i)
        }
    }
    console.log(perfectNumbers)   
}
perfectNumber()

//question4

console.log("!!1000 PRIME NUMBER!!")
function primeNumber() {
    let primeNumbers = []
    for (let i = 2; i <= 1000;i++){
        let situation = true ;
        for (let j =2;j <i; j++){
            if(i%j==0)
            situation=false;
        }
        situation?console.log(i):" ";
    }
    console.log(primeNumbers)
}
//primeNumber()
