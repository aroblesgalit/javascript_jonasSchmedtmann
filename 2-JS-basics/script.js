/******************************
* Variables and data types
*/
/*
var firstName = 'John';
console.log(firstName);

var lastName = 'Smith';
var age = 28;

var fullAge = true;
console.log(fullAge);

var job;
console.log(job);

job = 'Teacher';
console.log(job);

// Variable naming rules
var $3years = 3;
var johnMark = 'John and Mark';
*/


/******************************
* Variable mutation and type coercion
*/
/*
var firstName = 'John';
var age = 28;

// Type coercion
console.log(firstName + ' ' + age);

var job, isMarried;
job = 'teacher';
isMarried = false;

console.log(firstName + ' is a ' + age + ' year old ' + job + '. Is he married? ' + isMarried);

// Variable mutation
age = 'twenty eight';
job = 'driver';

alert(firstName + ' is a ' + age + ' year old ' + job + '. Is he married? ' + isMarried);

var lastName = prompt('What is his last name?');
console.log(firstName + ' ' + lastName);
*/


/******************************
* Basic operators
*/
/*
var year, yearJohn, yearMark;

now = 2018;
ageJohn = 28;
ageMark = 33

// Math operators
yearJohn = now - ageJohn;
yearMark = now - ageMark;

console.log('John ' + yearJohn + ' -- ' + 'Mark ' + yearMark);

console.log(now + 2);
console.log(now * 2);
console.log(now / 2);

// Logical operators
var johnOlder = ageJohn < ageMark;
console.log(johnOlder);

// typeof operator
console.log(typeof johnOlder);
console.log(typeof ageJohn);
console.log(typeof 'Mark is older than John');
var x;
console.log(typeof x);
*/


/******************************
* Operator precedence
*/
/*
var now = 2018;
var yearJohn = 1989;
var fullAge = 18;

// Multiple operators
var isFullAge = now - yearJohn >= fullAge; // true
console.log(isFullAge);

// Grouping
var ageJohn = now - yearJohn;
var ageMark = 35;
var average = (ageJohn + ageMark) / 2;
console.log(average);

// Multiple assignments
var x, y;
x = y = (3 + 5) * 4 - 6; // 8 * 4 - 6 // 32 -6 // 26
console.log(x, y);

// More operators
x *= 2;
console.log(x);
x += 10;
console.log(x);
x--;
console.log(x);
*/


/******************************
* CODING CHALLENGE 1
*/

/*
Mark and John are trying to compare their BMI (Body Mass Index), which is
calculated using the formula: BMI = mass / height^2 = mass / (height * height).
(mass in kg and height in meter).

1. Store Mark's and John's mass and height in variables
2. Calculate both their BMIs
3. Create a boolean variable containing information about whether Mark has a
    higher BMI than John.
4. Print a string to the console containing the variable from step 3. (Something
    like "is Mark's BMI higher than John's? true").

GOOD LUCK :)
*/

/*
My solution
*/
/*
// 1
var johnMass, johnHeight, johnBMI, markMass, markHeight, markBMI, markHigher;
johnMass = 92;
johnHeight = 1.95;
markMass = 78;
markHeight = 1.69;

// 2
johnBMI = johnMass / (johnHeight * johnHeight);
markBMI = markMass /(markHeight * markHeight);
console.log(johnBMI, markBMI);

// 3
markHigher = markBMI > johnBMI;

// 4
console.log('Is Mark\'s BMI higher than John\'s? ' + markHigher);
*/

/*
Instructor's solution
*/
/*
var massMark = 78; // kg
var heightMark = 1.69 // meters

var massJohn = 92;
var heightJohn = 1.95;

var BMIMark = massMark / (heightMark * heightMark);
var BMIJohn = massJohn/ (heightJohn * heightJohn);
console.log(johnBMI, markBMI);

var markHigherBMI = BMIMark > BMIJohn;
console.log('Is Mark\'s BMI higher than John\'s? ' + markHigherBMI);
*/


/******************************
* If / else statements
*/
/*
var firstName = 'John';
var civilStatus = 'single';

if (civilStatus === 'married') {
    console.log(firstName + ' is married!');
} else {
    console.log(firstName + ' will hopefully marry soon :)');
}

var isMarried = true;
if (isMarried) {
    console.log(firstName + ' is married!');
} else {
    console.log(firstName + ' will hopefully marry soon :)');
}


var massMark = 78; // kg
var heightMark = 1.69 // meters

var massJohn = 92;
var heightJohn = 1.95;

var BMIMark = massMark / (heightMark * heightMark);
var BMIJohn = massJohn/ (heightJohn * heightJohn);

if (BMIMark > BMIJohn) {
    console.log('Mark\'s BMI is higher than John\'s.');
} else {
    console.log('John\'s BMI is higher than Mark\'s.');
}
*/



/******************************
* Boolean logic
*/
/*
var firstName = 'John';
var age = 20;

if (age < 13) {
    console.log(firstName + ' is a boy.');
} else if (age >=13 && age < 20) {
    console.log(firstName + ' is a teenager.');
} else if (age >= 20 && age < 30) {
    console.log(firstName + ' is a young man.');
} else {
    console.log(firstName + ' is a man.');
}
*/



/******************************
* The Ternary Operator and Switch Statements
*/
/*
// Ternary Operator
var firstName = 'John';
var age = 14;

age >= 18 ? console.log(firstName + ' drinks beer.') : console.log(firstName + ' drinks juice.');

var drink = age >= 18 ? 'beer' : 'juice';
console.log(drink);
*/
/*
if (age >= 18) {
    var drink = 'beer';
} else {
    var drink = 'juice';
}
*/
/*
// Switch Statements
var job = 'instructor';
switch (job) {
    case 'teacher':
    case 'instructor':
        console.log(firstName + ' teaches kids how to code.');
        break;
    case 'driver':
        console.log(firstName + ' drives an uber in Lisbon.');
        break;
    case 'designer':
        console.log(firstName + ' designs beautiful websites.');
        break;
    default:
        console.log(firstName + ' does something else.');
}   

age = 56;
switch (true) {
    case age < 13:
        console.log(firstName + ' is a boy.');
        break;
    case age >=13 && age < 20:
        console.log(firstName + ' is a teenager.');
        break;
    case age >= 20 && age < 30:
        console.log(firstName + ' is a young man.');
        break;
    default:
        console.log(firstName + ' is a man.');
}
*/



/******************************
* Truthy and Falsy values and equality operators
*/

// falsy values: undefined, null, 0, '', NaN
// truthy values: NOT falsy values
/*
var height;

height = 23;

if (height || height === 0) {
    console.log('Variable is defined');
} else {
    console.log('Variable has NOT been defined');
}

// Equality operators
if (height == '23') {
    console.log('The == operator does type coercion!');
}
*/



/******************************
* CODING CHALLENGE 2
*/

/*
John and Mike both play basketball in different teams. In the latest 3 games,
John's team scored 89, 120 and 103 points, while Mike's team scored 116, 94
and 123 points.

1. Calculate the average score for each team
2. Decide which teams wins in average (highest average score), and print the
winner to the console. Also include the average score in the output.
3. Then change the scores to show different winners. Don't forget to take into
account there might be a draw (the same average score)

4. EXTRA: Mary also plays basketball, and her team scored 97, 134 and 105
points. Like before, log the average winner to the console. HINT: you will
need the && operator to take the decision. If you can't solve this one, just
watch the solution, it's no problem :)
5. Like before, change the scores to generate different winners, keeping in
mind there might be draws.

GOOD LUCK :)
*/


/*
My solution
*/
/*
// 1
var avgJohn = (89 + 120 + 103) / 3;
var avgMike = (116 + 94 + 123) / 3;
console.log('John: ' + avgJohn + ' - ' + 'Mike: ' + avgMike);

// 2
if (avgJohn > avgMike) {
    console.log('John\'s team wins in average with a value of ' + avgJohn);
} else if (avgJohn === avgMike) {
    console.log('Both team has the same average score of ' + avgJohn + '. It\'s a draw!');
} else {
    console.log('Mike\'s team wins in average with a value of ' + avgMike);
}

// 3
var avgJohn = (94 + 120 + 113) / 3;
var avgMike = (110 + 94 + 102) / 3;
console.log('John: ' + avgJohn + ' - ' + 'Mike: ' + avgMike);

if (avgJohn > avgMike) {
    console.log('John\'s team wins in average with a value of ' + avgJohn);
} else if (avgJohn === avgMike) {
    console.log('Both team has the same average score of ' + avgJohn + '. It\'s a draw!');
} else {
    console.log('Mike\'s team wins in average with a value of ' + avgMike);
}

// 4
var avgJohn = (94 + 120 + 113) / 3;
var avgMike = (110 + 94 + 102) / 3;
var avgMary = (97 + 134 + 105) / 3;
console.log('John: ' + avgJohn + ' - ' + 'Mike: ' + avgMike + ' - ' + 'Mary: ' + avgMary);

if (avgJohn > avgMike && avgJohn > avgMary) {
    console.log('John\'s team wins in average with a value of ' + avgJohn);
} else if (avgMary > avgMike && avgMary > avgJohn) {
    console.log('Mary\'s team wins in average with a value of ' + avgMary);
} else if (avgJohn === avgMike && avgJohn === avgMary) {
    console.log('All 3 team has the same average score of ' + avgJohn + '. It\'s a draw!');
} else {
    console.log('Mike\'s team wins in average with a value of ' + avgMike);
}

// 5
var avgJohn = (94 + 120 + 113) / 3;
var avgMike = (115 + 105 + 107) / 3;
var avgMary = (97 + 125 + 105) / 3;
console.log('John: ' + avgJohn + ' - ' + 'Mike: ' + avgMike + ' - ' + 'Mary: ' + avgMary);

if (avgJohn > avgMike && avgJohn > avgMary) {
    console.log('John\'s team wins in average with a value of ' + avgJohn);
} else if (avgMary > avgMike && avgMary > avgJohn) {
    console.log('Mary\'s team wins in average with a value of ' + avgMary);
} else if (avgJohn === avgMike && avgJohn === avgMary) {
    console.log('All 3 team has the same average score of ' + avgJohn + '. It\'s a draw!');
} else {
    console.log('Mike\'s team wins in average with a value of ' + avgMike);
}
*/


/*
Instructor's solution
*/

var scoreJohn = (189 + 120 + 103) / 3;
var scoreMike = (129 + 94 + 123) / 3;
var scoreMary = (97 + 134 + 105) / 3;
console.log(scoreJohn, scoreMike, scoreMary);

if (scoreJohn > scoreMike && scoreJohn > scoreMary) {
    console.log('John\'s team wins with ' + scoreJohn + ' points');
} else if (scoreMike > scoreJohn && scoreMike > scoreMary) {
    console.log('Mike\'s team wins with ' + scoreMike + ' points');
} else if (scoreMary > scoreJohn && scoreMary > scoreMike) {
    console.log('Mary\'s team wins with ' + scoreMary + ' points');
} else {
    console.log('There is a draw');
}

/*
if (scoreJohn > scoreMike) {
    console.log('John\'s team wins with ' + scoreJohn + ' points');
} else if (scoreMike > scoreJohn) {
    console.log('Mike\'s team wins with ' + scoreMike + ' points');
} else {
    console.log('There is a draw');
}
*/












