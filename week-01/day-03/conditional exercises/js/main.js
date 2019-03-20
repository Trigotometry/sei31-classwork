/*
What number's bigger?
Write a function named greaterNum that:

takes 2 arguments, both numbers.
returns whichever number is the greater (higher) number.
Call that function 2 times with different number pairs, and log the output to make sure it works (e.g. "The greater number of 5 and 10 is 10.").
*/

const greaterNum = function(num1, num2) {

  if (num1 > num2) {
    return num1;
  } else {
    return num2;
  }

};
// function called
console.log(`The greater number of 5 and 10 is ${ greaterNum(5, 10) }.`);
console.log(`The greater number of 9 and 3 is ${ greaterNum(9, 3) }.`);

console.log("--------------------\n\n");



/*
The World Translator
Write a function named helloWorld that:

takes 1 argument, a language code (e.g. "es", "de", "en")
returns "Hello, World" for the given language, for atleast 3 languages. It should default to returning English.
Call that function for each of the supported languages and log the result to make sure it works.
*/

const helloWorld = function(languageCode) {
  if (languageCode === "de") {
    console.log("Hallo, Welt.");
    return languageCode;
  } else if (languageCode === "es") {
    console.log("Hola, Mundo.");
    return languageCode;
  } else {
    return console.log("Hello World.");
  };
};
// function called
// console.log( helloWorld('de') );
helloWorld("de");
helloWorld("es");
helloWorld("en");
helloWorld("pleiadean");

console.log("--------------------\n\n");



/*
The Grade Assigner
Write a function named assignGrade that:

takes 1 argument, a number score.
returns a grade for the score, either "A", "B", "C", "D", or "F".
Call that function for a few different scores and log the result to make sure it works.
*/

const assignGrade = function(score) {
  let string = ''
  if (score >= 90 && score <= 100) {
    string += 'A';
  };
  if (score >= 80 && score < 90) {
    string += 'B';
  };
  if (score >= 70 && score < 80) {
    string += 'C'
  };
  if (score >= 60 && score < 70) {
    string += 'D'
  };
  if (score >= 50 && score <60) {
    string += 'F'
  };
  return string;
};
// function called
console.log(assignGrade(90));
console.log(assignGrade(75));
console.log(assignGrade(50));

console.log("--------------------\n\n");



/*
The Pluralizer
Write a function named pluralize that:

takes 2 arguments, a noun and a number.
returns the number and pluralized form, like "5 cats" or "1 dog".
Call that function for a few different scores and log the result to make sure it works.
*/

const pluralizer = function(noun, number) {
  if (number === 1) {
    return noun;
  }
  if (number > 1) {
    const addPlural = noun.concat('s');
    return addPlural;
  }
  return noun;
};

console.log( pluralizer('cat', 1) );
