console.log('Is this thing on?');
console.log("\n\n");


/*
The Fortune Teller
Why pay a fortune teller when you can just program your fortune yourself?

Store the following into variables: number of children, partner's name, geographic location, job title.
Output your fortune to the screen like so: "You will be a X in Y, and married to Z with N kids."
*/
console.log("--------------------");
console.log("The Fortune Teller;");
let n = 0;
const z = 'Caitlin';
let y = 'Sydney';
let x = 'Developer';
console.log("You will be a " + x + " in " + y + ", and married to " + z + " with " + n + " kids.")
console.log(`You will be a ${x} in ${y}, and married to ${z} with ${n} kids.`);
console.log("--------------------");
console.log("\n\n");


/*
The Age Calculator
Forgot how old someone is? Calculate it!

Store the current year in a variable.
Store their birth year in a variable.
Calculate their 2 possible ages based on the stored values.
Output them to the screen like so: "They are either NN or NN", substituting the values.
*/
console.log("--------------------");
console.log("The Age Calculator;");
let currentYear = 2019;
const birthYear = 1989;
let birthDatePassed = currentYear - birthYear;
let birthDateNotPassed = birthDatePassed - 1;
console.log("They are either, " + birthDateNotPassed + " or " + birthDatePassed + ".");
console.log("--------------------");
console.log("\n\n");

/*
The Lifetime Supply Calculator
Ever wonder how much a "lifetime supply" of your favorite snack is? Wonder no more!

Store your current age into a variable.
Store a maximum age into a variable.
Store an estimated amount per day (as a number).
Calculate how many you would eat total for the rest of your life.
Output the result to the screen like so: "You will need NN to last you until the ripe old age of X".
*/
console.log("--------------------");
console.log("The Coffee Calculator;");
let myCurrentAge = 29;
let myMaxAge = 85;
let estimatedAmountPerDay = 2;
let totalConsumed = (myMaxAge - myCurrentAge) * estimatedAmountPerDay * 365.25 // includes etiamte for leap year.;
console.log("You will need " + totalConsumed + " cups of coffee to last you until the ripe old age of " + myMaxAge + ".");
console.log("--------------------");
console.log("\n\n");

/*
The Geometrizer
Calculate properties of a circle, using the definitions here.

Store a radius into a variable.
Calculate the circumference based on the radius, and output "The circumference is NN".
Calculate the area based on the radius, and output "The area is NN".
*/
console.log("--------------------");
console.log("The Geometrizer;");
const radius = 11;
const calculatedCircumference = 2 * Math.PI * radius;
console.log("The circumference is " + calculatedCircumference + ".");
const calculatedArea = Math.PI * Math.pow(radius, 2);
console.log("The area is " + calculatedArea + ".");
console.log("--------------------");
console.log("\n\n");

/*
The Temperature Converter
It's hot out! Let's make a converter based on the steps here.

Store a celsius temperature into a variable.
Convert it to fahrenheit and output "NN°C is NN°F".
Now store a fahrenheit temperature into a variable.
Convert it to celsius and output "NN°F is NN°C."
*/
console.log("--------------------");
console.log("The Temperature Converter;");
const celciusTemp = 24;
const conversionToF = (celciusTemp * 9 / 5) + 32;
console.log(`${celciusTemp}°C is equal to ${conversionToF}°F.`);
const fahrenheitTemp = 75.2;
const conversionToC = (fahrenheitTemp - 32) * 5 / 9;
console.log(`${fahrenheitTemp}°F is equal to ${conversionToC}°C.`);
console.log("--------------------");
