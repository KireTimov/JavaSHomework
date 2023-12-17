let numbersArray = [1, 5, 10, 15, 12];
let container = document.getElementById('container');
let ul = document.createElement('ul');  
container.append(ul) ;
let sum = 0;
let sumOfNumbers = document.createElement("h5");
for(i = 0; i < numbersArray.length; i++){
    let li = document.createElement('li');
    li.textContent = li.textContent + numbersArray[i];
    ul.append(li);
    sum = sum + numbersArray[i];
    
    
    sumOfNumbers.textContent = `The sum of the numbers is: ${sum}`;
}
container.append(sumOfNumbers);




    

