// Exercise 1
console.log("Exercise 1");
function tellStory(array) {
  
  console.log(`This is ${array[0]}, ${array[0]} is an amazing person. Today he is ${array[1]} because he is ${array[2]}. The end.`);
}

let story = ["Jim", "happy", "playing football"];
tellStory(story);

console.log("Exercise 2");


// Exercise 2



function sumOfNumbers(array) {
    let sum = 0;
    for (i = 0; i < array.length; i++) {
      sum = sum + array[i];
    }
    return sum;
  }
  
  let numArray = [1, 2, 3, 4, 5];
  let sum = sumOfNumbers(numArray);
  console.log('The sum of the 5 numbers is:', sum);
  
  // Exercise 3
  
  console.log("Exercise 3");

  function arrayOfStrings(array){
    
    console.log(`${array[0]} ${array[1]} ${array[2]} ${array[3]} ${array[4]}`);    
    

  }
  let strings = ['Hello', 'there', 'students', 'of', 'SEDC!'];
  arrayOfStrings(strings);

  console.log("Exercise 4");
//   Exercise 4

function number(){
  for (let i = 1; i <= 20; i++){
   if (i % 2 === 0){
    console.log((i - 1) + " " + i);
   }      
}
}

number();

//   Exercise 5

console.log("Exercise 5");


function sumMaxMin(arrayOfNumbers) {

    maximum = numbers[0];
    minimum = numbers[0];
    for(i = 1; i < arrayOfNumbers.length; i++ )
    if(arrayOfNumbers[i] > maximum){
      maximum = arrayOfNumbers[i];
    }else if(arrayOfNumbers[i] < minimum){
      minimum = arrayOfNumbers[i];
      
    }
     let sum = maximum + minimum;
    console.log( `Max number is: ${maximum}, Min number is: ${minimum}, The sum of max and min is: ${sum}`);
  }
  

  let numbers = [3, 5, 6, 8, 11];
  sumMaxMin(numbers);
  
  

  console.log("Exercise 6");
//   Exercise 6

function fullNames(firstName, lastName) {
    
    const fullNames = [];
    for ( i = 0; i < firstName.length; i++) {
      const fullName = `${i + 1} ${firstName[i]} ${lastName[i]}`;
      fullNames.push(fullName);
    }
  
    return fullNames;
  }
  
  let firstName = ["Bob", "Jill"];
  let lastName = ["Gregory", "Wurtz"];
  const result1 = fullNames(firstName, lastName);
  console.log(result1);



