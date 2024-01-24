// Exercise 1
console.log('Exercise 1');
function digits(num){
    let number = Math.abs(num).toString();
    return number.length;

}


function evenOrOdd(num){
    if(num % 2 === 0){
        return('Even');
    }else if(num% 2 !== 0){
        return('Odd');
    }

}


function positiveOrNegative(num){
    if(num > 0){
        return('Positive');
    }else if(num < 0){
        return('Negative');
    }
}


function allThreeFunctions(number){
    
return(`The number ${number} has ${digits(number)} digits, it is ${evenOrOdd(number)}, and it is ${positiveOrNegative(number)}.`);
}
let result = allThreeFunctions(-55);
console.log( result );

//Exercise 2
console.log('Exercise 2');

let changeTextSizeAndColor = () => {
    let textSizeInput = document.getElementById("textSize").value;
    let colorInput = document.getElementById("colorInput").value;
    let changingText = document.getElementById("changingText");
    
    
    changingText.style.fontSize = `${textSizeInput}px`; // Za ova na krajot "px" vidov ideja deka moze da se iskoristi, ako ne stavam px, % ili vh i slicno, nema da go zgolemuva fontot. Se nadevam deka ne e problem sto go iskoristiv.
    changingText.style.color = colorInput;
};
let button = document.getElementById("button");
button.addEventListener("click", changeTextSizeAndColor);
// changeTextSizeAndColor();



// Exercise 3
console.log('Exercise 3');
let anonymousFunction = function(number1){
    let square = number1 * number1;
    return square;
}
console.log(anonymousFunction(5));

// Exercise 4
console.log("Exercise 4");
(function() {
    let factorial = (number) => {
        if (number <= 0) {
            console.log("It is not working for negative numbers and for 0.");
            return;
        }

        let result = 1;
        for (let i = 1; i <= number; i++) {
            result *= i;
        }

        return result;
    };

    
   let givenNumber = 9;

    
    console.log(`Factorial of ${givenNumber} is: ${factorial(givenNumber)}`);
})();

// Exercise 5
console.log("Exercise 5");
let reversedString = (string) =>{
    
    for(let i = string.length - 1; i>=0; i--){
       let stringInReverse = string[i];
       console.log(stringInReverse);
    }

};
reversedString('Helo');

//Exercise 6
console.log("Exercise 6");

let array = [-10, 5, 7894, NaN, 'Hello world', -Infinity, false, [Object, Object], 25, name => Hello `${name}`, -Infinity, ['hi', 28, -93, true], { name: 'Bob', age: 23, }, undefined, 14, null, 159, 0, -11];

let filteredArray = (array) => {
    let positiveNumbersArr = [];

    for (let i = 0; i < array.length; i++) {
        let element = array[i];

        if (typeof(element) === "number" && element > 0) {
            positiveNumbersArr.push(element);
        }
    }

    let result1 = 1;
    for (i = 0; i < positiveNumbersArr.length; i++) {
        result1 = result1 * positiveNumbersArr[i];
    }

    console.log(`Multiplied: ${result1}`);
    return positiveNumbersArr;
}

filteredArray(array);



// Exercise 7
