/*
The even/odd reporter
Write a for loop that will iterate from 0 to 20.
For each iteration, it will check if the current number is even or odd, and report that to the screen (e.g. "2 is even").
*/

for (var i = 0; i <= 20; i += 1) {
  if (i === 0) {
    console.log(`${ i } is neither odd nor even.`);
  }
  else if (i % 2 === 0) {
    console.log(`${ i } is even.`);
  }
  else {
    console.log(`${ i } is odd.`);
  }
}

console.log("--------------------\n\n");


/*
Multiplication Tables
Write a for loop that will iterate from 0 to 10.
For each iteration of the for loop, it will multiply the number by 9 and log the result (e.g. "2 * 9 = 18").

Bonus: Use a nested for loop to show the tables for every multiplier from 1 to 10 (100 results total).
*/

for (var i = 1; i <= 10; i += 1) {
  for (var j = 1; j <= 10; j += 1) {
    console.log(`${ i } * ${ j } = ${ i * 9 }`);
  }
}


/*
The Grade Assigner
Check the results of assignGrade function from the conditionals exercise for every value from 60 to 100 - so your log should show "For 89, you got a B. For 90, you got an A.", etc.
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

for (var score = 50; score <= 100 ; score += 1) {
  console.log(`For ${ score }, you got a grade of ${ assignGrade(score) }.`);
};
  // function called
console.log(assignGrade(90));
console.log(assignGrade(75));
console.log(assignGrade(50));
