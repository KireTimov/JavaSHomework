
//Exercise 1
console.log('Exercise 1');
function animal(nameOfTheAnimal, kindOfTheAnimal){
    this.name = nameOfTheAnimal;
    this.kind = kindOfTheAnimal;

    this.speak = function(greeting){
        return `${this.kind} named ${this.name} says: ${greeting}'`;
    }
    
}
let myAnimal = new animal('Max' , 'Dog');
console.log(myAnimal.speak('Hey bro!!'));

// Exercise 2
console.log('Exercise 2');

function book(title, author, readingStatus){
    this.title = title;
    this.author = author;
    this.readingStatus = readingStatus;

    this.status = function(){
        if(this.readingStatus){
            console.log(`You have already read ${this.title} from ${this.author}.`);
        }else{
            console.log(`You should read ${this.title} from ${this.author}.`);
        }
    }

}
let myBook1 = new book('Crime and punishment' , ' Fyodor Dostoevsky', true);
let myBook2 = new book('War and peace', 'Leo Tolstoy', false);
let myBook3 = new book('The death of Ivan Ilyich', 'Leo Tolstoy', false);
let myBook4 = new book('Dead souls', 'Nikolai Gogol', true);
let myBook5 = new book('The brothers Karamazov', 'Fyodor Dostoevsky', true);
myBook1.status();
myBook2.status();
myBook3.status();
myBook4.status();
myBook5.status();

// Exercise 3
console.log('Exercise 3');



function userCredentials(firstName, lastName, email, password){
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
    this.password = password;

   
}
      
let users = [];
let button1 = document.getElementById('button1');
button1.addEventListener('click', function register(){
    let firstName = document.getElementById('firstName').value;
    let lastName = document.getElementById('lastName').value;
    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;
    
    let newUser = new userCredentials(firstName, lastName, email, password);
    users.unshift(newUser);
    console.log('Successfully registered' , users);
    
});




