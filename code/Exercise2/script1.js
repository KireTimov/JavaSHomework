
// Exercise 1

let n1,n2;
	  n1 = prompt('enter the first number:');
	  n2 = prompt('enter the second number:');
	if(n1>n2)
	{
           console.log(n1+' is Larger number');
	}
	else
	{
	       console.log(n2+' is Larger number');
	}

    // Exercise 2

    let num1,num2,num3;
        num1 = prompt('enter the first number');
        num2 = prompt('enter the second number');
        num3 = prompt('enter the third number');
        if(num1>num2 && num1>num3){
            console.log(num1+ 'is larger number');

        } else if(num2>num1 && num2>num3){
            console.log(num2+ ' is larger number')
        }else{
            console.log(num3+ ' is larger number')
        }

     //Exercise 3
     
     const number = prompt('Enter number');
     if(number > 0){
        console.log('Your number is positive');
     } else if (number == 0 ){
        console.log('Your number is zero');
     } else{
        console.log('Your number is negative');
     }


    //  Exercise 4

    let day = prompt('Type a number from 1 to 7');
    if(day == 1){
        console.log('Today is Monday');
    }else if(day == 2){
        console.log('Today is Tuesday');
    }else if(day == 3){
        console.log('Today is Wednesday');
    }else if(day == 4){
        console.log('Today is Thursday');
    }else if(day == 5){
        console.log('Today is Friday');
    }else if(day == 6){
        console.log('Today is Saturday');
    }else if(day == 7){
        console.log('Today is Sunday');
    }else{
        console.log('Type a number from 1 to 7')
    }
    
    // Exercise 5

    let number1 = prompt('Enter a value');
    if(isNaN (number1)){
        console.log(number1 , "Is not a number");
    }else{
        console.log(number1 , "Is a number");
    }

    // Exercise 6

    let computer =parseInt(prompt('Enter your score'));
    let physics =  parseInt(prompt('Enter your score'));
    let chemistry =parseInt( prompt('Enter your score'));
    let math =parseInt( prompt('Enter your score'));
    let biology =parseInt( prompt('Enter your score'));
    let percentage = (computer + physics + chemistry + math + biology) / 5;
    if(percentage >=90){
        console.log('Grade A');
    }else if(percentage >=80){
        console.log('Grade B');
    }else if(percentage >=70){
        console.log('Grade C');
    }else if(percentage >=60){
        console.log('Grade D');
    }else if(percentage >=40){
        console.log('Grade E')
    }else if(percentage < 40){
        console.log('Grade F')
    }

    // Exercise 1 from the presentation

    

    let fridayCash =  prompt('How much cash you have?');
    if(fridayCash >= 50){
        console.log('If you have' , fridayCash , 'you can go to a restaurant and cinema');
    }else if(fridayCash  >= 35){
        console.log( 'If you have' , fridayCash , 'you can choose one between restaurant and cinema');
    }else if(fridayCash >=15){
        console.log( 'If you have' , fridayCash ,'you can go on coffee');
    }else if(fridayCash < 10) {
        console.log('If you have' , fridayCash , 'You can buy popcorn and watch a movie at home');
    }

    // Homework from the presentation

   const year = parseInt(prompt('Enter your birthyear'));
   const sign = (year - 4) % 12;
   if(sign == 0){
    console.log('Rat');
   }else if(sign == 1){
    console.log('Ox');
   }else if(sign == 2){
    console.log('Tiger');
   }else if(sign == 3){
    console.log('Rabbit');
   }else if(sign == 4){
    console.log('Dragon');
   }else if(sign == 5){
    console.log('Snake');
   }else if(sign == 6){
    console.log('Horse');
   }else if(sign == 7){
    console.log('Goat');
   }else if(sign == 8){
    console.log('Monkey');
   }else if(sign == 9){
    console.log('Rooster');
   }else if(sign == 10){
    console.log('Dog');
   }else if(sign == 11){
    console.log("Pig")
   }







    
    
    


    







        