// Exercise 1
console.log('Exercise 1');
function findType(value){
    let typeOfValue = typeof value;
    console.log(`The type is ${typeOfValue}`);
}
findType({});
findType('')
findType(5)
findType(5>2)
findType()

console.log('Exercise 2');
// Exercise 2
let value1 = 55;
let value2 = "Hi";
let value3 = 5>2;
let value4
let value5 = {};

console.log('The typeof is', typeof value1);
console.log('The typeof is', typeof value2);
console.log('The typeof is', typeof value3);
console.log('The typeof is', typeof value4);
console.log('The typeof is', typeof value5);

console.log('============================');
// Exercise 3
console.log('Exercise 3');
// "Write a JavaScript program to get the difference between a given number and 13, if the number is greater than 13 double the difference as a result.Make sure you use a function! Ex. Input: 20 ==> Output: 14",

function difference(number){
    let difference = Math.abs(number - 13);

    if(number > 13){
       return difference = difference * 2;
    }
    
}

let inputNumber = 20;
 let result = difference(inputNumber);
 console.log(`Input is ${inputNumber} and result is ${result}`);
console.log('==================');
// Exercise 4
console.log('Exercise 4');
// Write a JavaScript program that will find out which of two inserted integers is closer to 100. Make sure to alert the user if a negative number is inserted!Make sure you use a function!Ex. Input1: 20Input2: 80Output: 80 is closer to 100;

function closeNumber(){
    let num1 = 20;
    let num2 = 80;
    let number = 100;
    if(number - num1 > number - num2){
        console.log('num2 is closer to 100');
    }else if(number - num1 < number - num2){
        console.log('num1 is closer to 100');
    }else{
        console.log('Both numbers are equally close to 100');
    }
}
closeNumber();

// Exercise 5

console.log('Exercise 5');
function bobSalary(){
    let salary = 1000;
    let expenses1 = 375;
    let expenses2 = 250;
    let result = salary - expenses1 - expenses2;
    let result1 = expenses1 + expenses2;
    console.log('Money left :', result);
    console.log('Money for expenses:', result1);
}
bobSalary();
console.log('=================');
// Exercise 6
// One student has 5 exams in the first semester. Student name is Bob Bobsky. His/Her grades for all of the exams are Math = 10, English = 6, Science = 8, Sport = 9, Chemistry = 6 respectively. The professor told the students that for passing the first semester they must have average of 8. The student needs to know whether they have passed the semester or not. Alert on screen if the student pass or not! Print on the screen all of the subjects and the student name aswell.
console.log('Exercise 6');
function grades(){
let name = 'Bob Bobsky';
let math = 10;
let english = 6;
let science = 8;
let sport = 9;
let chemistry = 6;
let result =(math+english+science+sport+chemistry)/5;
if(result >= 8){
    console.log(`${name}  with grades: Math:${math} English:${english} Science:${science} Sport:${sport} Chemistry:${chemistry} passed the semester`);
}else{
    console.log(`${name} with grades: Math:${math} English:${english} Science:${science} Sport:${sport} Chemistry:${chemistry} have result ${result} and didn't passed the semester.`);
}
}
grades();

console.log('Exercise 7');
// Exercise 7
// Write a JavaScript program to check whether a given positive number is a multiple of 3 or 7. If the number is divisible by 3, then write 'Fizz' in the console, if the number is divisible by 7, then write 'Buzz' in the console, and if the number is divisible by 3 and 7, write 'FizzBuzz' in the console

function numberCheck(){
    let number = 21;
   if(number / 3 && number / 7){
        console.log('FizzBuzz');
    }else if(number / 3){
        console.log("Fizz");
    }else if(number / 7){
        console.log("Buzz");
    }

}
numberCheck();

// Write a simple JavaScript program to join all elements of the an array into a string. The array should have at least 5 elements
console.log('Exercise 8');
let arr = [1,5,7,9,2];
let joinelementss = arr.join(', ');
console.log(joinelementss);

let array = ['Banana', 'Mandarina', 'Orange', 'Apple', 'Mango'];
let arrayjoin = array.join(',');
console.log(arrayjoin);

// Make an array of ten elements. Make sure four of them to be: Null, undefined, NaN, “ ” and false (JavaScript falsy values). Create a function that will work for every array in the world :) and it will remove all the falsy values from the array.
console.log('Exercise 9');



    


//Exercise 10
console.log('Exercise 10');

let button = document.getElementById('button');
button.addEventListener('click', function storyTeller(){

    let who = document.getElementById('who').value;
    let what = document.getElementById('what').value;
    let when = document.getElementById('when').value;

    let story = who + " " + what + " " + when + ".";

    // document.getElementById('story').innerHTML = story;
    console.log(story);
});


