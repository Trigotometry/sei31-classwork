console.log('Is this thing on?');
console.log("\n\n");


/*
The Fortune Teller
Why pay a fortune teller when you can just program your fortune yourself?

Write a function named tellFortune that:

takes 4 arguments: number of children, partner's name, geographic location, job title.
outputs your fortune to the screen like so: "You will be a X in Y, and married to Z with N kids."
Call that function 3 times with 3 different values for the arguments.
*/
console.log("--------------------");
console.log("The Fortune Teller;");

const tellFortune = function(childrenBirthed, partnerName, geoLocation, jobTitle) {
  const fortune = `You will be a ${jobTitle} in ${geoLocation}, and married to ${partnerName} with ${childrenBirthed} kids.`;
  return fortune;
}
// calling the function.
console.log( tellFortune(0, "Caitlin", "Sydney", "Developer") );
const firstFortune = tellFortune(12, "Glen", "Glasgow", "Gardener");
tellFortune(8, "Jim", "New York", "Marketer");

console.log("--------------------");
console.log("\n\n");


/*
The Puppy Age Calculator
You know how old your dog is in human years, but what about dog years? Calculate it!

Write a function named calculateDogAge that:

takes 1 argument: your puppy's age.
calculates your dog's age based on the conversion rate of 1 human year to 7 dog years.
outputs the result to the screen like so: "Your doggie is NN years old in dog years!"
Call the function three times with different sets of values.
Bonus: Add an additional argument to the function that takes the conversion rate of human to dog years.
*/
console.log("--------------------");
console.log("The Dog Years Calculator;");

const calculateDogAge = function(puppyAge, dogYearsPerHumanYear=7) {
  const dogYears = puppyAge * dogYearsPerHumanYear;
  console.log(`Your doggie is ${dogYears} years old in dog years!`);
  return dogYears;
}
// calling the function.
calculateDogAge(7);
calculateDogAge(17);
calculateDogAge(10, 20);

console.log("--------------------");
console.log("\n\n");

/*
The Lifetime Supply Calculator
Ever wonder how much a "lifetime supply" of your favorite snack is? Wonder no more!

Write a function named calculateSupply that:

takes 2 arguments: age, amount per day.
calculates the amount consumed for rest of the life (based on a constant max age).
outputs the result to the screen like so: "You will need NN to last you until the ripe old age of X"
Call that function three times, passing in different values each time.
Bonus: Accept floating point values for amount per day, and round the result to a round number.
*/
console.log("--------------------");
console.log("The Coffee Supply Calculator;");

const calculateCoffeConsumption = function(currentAge, amountPerDay) {
  const maxAge = 85;
  const lifeConsumption = (maxAge - currentAge) * Math.ceil(amountPerDay) * 365;
  console.log(`You will need ${lifeConsumption} cups of coffee to last you until the ripe old age of ${maxAge}.`);
  return lifeConsumption;
}
// calling the function.
calculateCoffeConsumption(29, 2.5);
calculateCoffeConsumption(80, 1.111);
calculateCoffeConsumption(0, 1);

console.log("--------------------");
console.log("\n\n");

/*
The Geometrizer


Create a function called calcCircumfrence:

Pass the radius to the function.
Calculate the circumference based on the radius, and output "The circumference is NN".

Create a function called calcArea:

Pass the radius to the function.
Calculate the area based on the radius, and output "The area is NN".
*/
console.log("--------------------");
console.log("The Geometrizer;");
const calcCircumfrence = function(radius) {
  const calculatedCircumference = 2 * Math.PI * radius;
  console.log(`The circumference is ${calculatedCircumference}`);
  return  calculatedCircumference;
}
// calling the function.
calcCircumfrence(11);

const calcArea = function(radius) {
  const calculatedArea = Math.PI * Math.pow(radius, 2);
  console.log(`The area is ${calculatedArea}`);
  return calculatedArea;
}
// calling the function.
calcArea(24);
console.log("--------------------");
console.log("\n\n");

/*
The Temperature Converter
It's hot out! Let's make a converter.

Create a function called celsiusToFahrenheit:

Store a celsius temperature into a variable.
Convert it to fahrenheit and output "NN°C is NN°F".
Create a function called fahrenheitToCelsius:
Now store a fahrenheit temperature into a variable.

Convert it to celsius and output "NN°F is NN°C."
*/
console.log("--------------------");
console.log("The Temperature Converter;");
const celsiusToFahrenheit = function(celsius) {
  const convertToFahrenheit = (celsius * 9 / 5) + 32;
  console.log(`${celsius}°C is equal to ${convertToFahrenheit}°F.`);
  return convertToFahrenheit;
}
celsiusToFahrenheit(24);

const fahrenheitToCelsius = function(fahrenheit) {
  const convertToCelsius = (fahrenheit - 32) * 5 / 9;
  console.log(`${fahrenheit}°F is equal to ${convertToCelsius}°C.`);
  return convertToCelsius;
}
fahrenheitToCelsius(75.2);

cels

console.log("--------------------");
