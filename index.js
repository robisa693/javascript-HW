// Comment
console.log('Hello World');

//variables
//Cannot be reserved keywords, such as 'if' or 'true'
//Should ofc be meaningful
//Cannot start with a number, such as '1name'
//Cannot contain a space or hypen '-'
//Case sensitive
let firstName = "Roberto"; //Naming convenention
let lastName = "I";
let varName = 'Test';
console.log(varName);
//

let interestRate = 0.3;
interestRate = 1;
console.log(interestRate);
//Constants
//If we try to reassign a constant we will throw and error
//Use constants always if reassignment is not needed to avoid bugs
const interestRateConst = 0.3
console.log(interestRateConst);

/*There are two types
Primitives/Value Types
    String
    Number
    Boolean
    undefined
    Null
    Symbol
Reference Types
    Array
    Object
    Function/Class
    Map
    Set
*/
let age = 30; //Number Literal
let isApproved = true; //Boolean literal
let noName = undefined; //Undefined is default if no value is set
let oldValue = null; //Null to clear values

//Dynamic Typing
//Type of variables are determined at run time based on 
//the values we assign to them

//All numbers in JS are of type Number. There are no integers and floats


//Object
//Reminds me of a python dict
let person = {
    firstName: 'Roberto',
    age: 24
};
console.log(person);
//Access the Object
//Dot Notation
person.firstName = "Stephanie";
console.log(person.firstName);
//Bracket Notation
selection = "firstName"
person[selection] = "Roberto";
console.log(person.firstName);

//Arrays (are actually also predefined Objects)
let selectedColors = ['red', 'blue'];
selectedColors[2] = 'green';
selectedColors.push('1')
console.log(selectedColors);


//Function with parameter
//Perform a task
function greet(name, lastName="Smith") { //Same as in python you can declare a default value
    console.log("Hello "+name +' '+ lastName);
}
//Call Function with an argument
greet(firstName, lastName);
greet("Stephanie", "K");


//Calculate a value, return it
function square(number){
    return number*number;
}
let number = square(2);
console.log(number);
console.log(square(4));


//simple animation on click of #train h1
/* 
train.onclick = function() {
    let start = Date.now();
    let timer = setInterval(function() {
    let timePassed = Date.now() - start;
    train.style.left = timePassed / 10 + 'px';
    if (timePassed > 3000) clearInterval(timer);

}, 20);
}
*/