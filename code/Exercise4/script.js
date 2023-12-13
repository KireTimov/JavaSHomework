// Exercise 1
console.log("Exercise 1")

function tellStory(name,mood,activity){

    const story = `This is ${name}. ${name} is an amazing person. Today he is feeling ${mood}. He is ${activity} today.The end`;
    console.log(story);
}
tellStory('Jim', 'fantastic', 'playing football');

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

  function arrayOfStrings(string, string1 ,string2, string3, string4){
    const result = `${string} ${string1} ${string2} ${string3} ${string4}`;
    console.log(result);    
    

  }
  arrayOfStrings('Hello','there','students','of','SEDC!');

  console.log("Exercise 4");
//   Exercise 4

for (let i = 1; i <= 20; i++) {
    if (i % 2 === 0) {
      console.log(i , "\n");
    } else {
      console.log(i , " ");
    }
}

//   Exercise 5

console.log("Exercise 5");

function sumMaxMin(array) {
   
    const maximum = Math.max(...array);
    const minimum = Math.min(...array);
    const sum = maximum + minimum;
  
    return `Max number is: ${maximum}, Min number is: ${minimum}, The sum of max and min is: ${sum}`;
  }
  

  let numbers = [3, 5, 6, 8, 11];
  const result = sumMaxMin(numbers);
  console.log(result); 


  console.log("Exercise 6");
//   Exercise 6

function fullNames(firstName, lastName) {
    
    const fullNames = [];
    for ( i = 0; i < firstName.length; i++) {
      const fullName = `${i + 1} ${firstName[i]} ${lastName[i]}`;
      fullNames.unshift(fullName);
    }
  
    return fullNames;
  }
  
  let firstName = ["Bob", "Jill"];
  let lastName = ["Gregory", "Wurtz"];
  const result1 = fullNames(firstName, lastName);
  console.log(result1);





