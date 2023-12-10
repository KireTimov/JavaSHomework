
console.log('______Exercise 1______')
// Exercise 1

function findType(value) {
    const typeOfValue = typeof value;
   
    console.log(`The type is  ${typeOfValue}`);
  }
findType ({}); 
findType(''); 
findType(5);
findType(true); 
findType(); 

console.log('______Exercise 2______')

// Exercise 2

function conversionYears(humanYears){
    humanYears = prompt('How old are you?');
    let result = humanYears * 7  ;
    return result;
    
}
let result = conversionYears();
console.log(`You are ${result} in dog years`);



// Exercise 3


console.log('______Exercise 3______')


let balance = 500;
let cashOut=prompt("What is the amount of money you would like to take out?");
let parseCashOut=(parseInt(cashOut));
let moneyTakenOut = balance - parseCashOut;
function cashMachine (moneyTakenOut){
   if (cashOut > balance){
      console.log(`You dont have enough money on your card.`)
   }
    else if (cashOut <= balance){
       moneyTakenOut= balance - cashOut;
       console.log(` The transaction was successfull. You have ${moneyTakenOut} $ left.`);
   }
   return moneyTakenOut;
  }
  let withdrawn = cashMachine(moneyTakenOut);











