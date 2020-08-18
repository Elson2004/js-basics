//NOTE: JavaScript uses camel casing in writing code related to naming functions and variables and others

console.log('Hello World');
console.log(2 * 4);
console.log(10 % 4);

//checking the length of the string I've written
console.log('I am going to check the number of characters I have typed into the console.'.length);
console.log('I am going to check the number of    characters I      have typed into the console.'.trim());
console.log('the story of the jungle book'.toUpperCase());

//the code below is for selecting a number from 0 and and less than one and when multiplied by a figure gives a range for the numbers
console.log(Math.random() );
//the code below will give a range from 0 to 50
console.log(Math.random() * 50);

//math.floor rounds the number to whole number less than what was given ....it can also be associated with floor (ground)
console.log(Math.floor(Math.random() * 60));

//math.floor rounds the number to whole number greater than what was given ....it can also be associated with ceil (top (ceiling) )
console.log(Math.ceil(Math.random() * 100));

//creating variables

//the code below will show (undefined)nothing  since it undefined
let price;
console.log(price);
//now the price has been given a value below
price = 'trying this out';
console.log(price);

//working with JavaScript variables
price = 500;
console.log(price);

const newName = 'Elson';
console.log(`My name is ${newName}`);
//or
console.log('My name is ' + newName);

//the "typeof" is used for checking the data type  of the input
console.log(typeof newName);

//developing a program for for giving updates temperature of the various temperature units
const kelvin = 6 ;
console.log(kelvin);
//the temperature in kelvin into celsius
const celsius = kelvin + 273;
console.log(celsius);
//the temperature into fahrenheit 
const fahrenheit = celsius * (9/5) + 32;
console.log(Math.floor(fahrenheit));

let kilometers = 40;
console.log(kilometers);

let meters = kilometers * 100;
console.log(meters);

let centimeters = meters * 100;
console.log(centimeters);

//the 'let' allows us to reuse the varible created for different things whilst the 'constant' doesn't 
//'let' and 'var' are literally the  same in terms of use
kilometers = 50;  
console.log(kilometers);
meters = kilometers * 100;
console.log(meters);
console.log(centimeters);

let millilitres = 5000;
console.log(millilitres);

let centilitres = millilitres / 100;
console.log(centilitres);

let litres = centilitres / 10; 
console.log(litres);

