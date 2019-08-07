/* 
NOTES:
- Every JavaScript object has a prototype property, which makes inheritance
possible in JavaScript;
- The prototype property of an object is where we put methods and properties
that we want other objects to inherit;
- The Constructor's prototype property is NOT the prototype of the 
Constructor itself, it's the prototype of ALL instances that are created 
through it;
- When a certain method (or property) is called, the search starts in the
object itself, and if it cannot be found, the search moves on to the object's
prototype. This continues until the method is found: prototype chain.
*/


// Function constructor

/*
var john = {
    name: 'John',
    yearOfBirth: 1990,
    job: 'teacher'
};
*/
/*
var Person = function(name, yearOfBirth, job) {
    this.name = name;
    this.yearOfBirth = yearOfBirth;
    this.job = job;
};

Person.prototype.calculateAge = function() {
    console.log(2019 - this.yearOfBirth);
};

Person.prototype.lastName = 'Smith';

var john = new Person('John', 1990, 'teacher');
var jane = new Person('Jane', 1969, 'designer');
var mark = new Person('Mark', 1948, 'retired');

john.calculateAge();
jane.calculateAge();
mark.calculateAge();

console.log(john.lastName);
console.log(jane.lastName);
console.log(mark.lastName);
*/

/*
PRACTICE: Create your own constructor function and add methods and properties
to its prototype.
*/
/*
var Bills = function(rent, studentLoans, phone, car) {
    this.rent = rent;
    this.studentLoans = studentLoans;
    this.phone = phone;
    this.car = car;
};

Bills.prototype.calculateTotal = function() {
    return this.rent + this.studentLoans + this.phone + this.car;
};

var july = new Bills(1230, 470, 85, 380);
console.log(july);
*/



// Object.create
/*
var personProto = {
    calculateAge: function() {
        console.log(2016 - this.yearOfBrith)
    }
};

var john = Object.create(personProto);
john.name = 'John';
john.yearOfBrith = 1990;
john.job = 'teacher';

var jane = Object.create(personProto, {
    name: { value: 'Jane' },
    yearOfBrith: { value: 1969 },
    job: { value: 'designer' }
});
*/


/*
// Primitives vs objects

// Primitives
var a = 23;
var b = a;
a = 46;
console.log(a);
console.log(b);

// Objects
var obj1 = {
    name: 'John',
    age: 26
};
var obj2 = obj1;
obj1.age = 30;
console.log(obj1.age);
console.log(obj2.age);

// Functions
var age = 27;
var obj = {
    name: 'Jonas',
    city: 'Lisbon'
};
function change(a, b) {
    a = 30;
    b.city = 'San Francisco';
}
change(age, obj);
console.log(age);
console.log(obj.city);
*/


/*
//////////////////////////////////
// Lecture: Passing functions as arguments

var years = [1990, 1965, 1937, 2005, 1998];

function arrayCalc(arr, fn) {
    var arrRes = [];
    for (var i = 0; i < arr.length; i++) {
        arrRes.push(fn(arr[i]));
    }
    return arrRes;
}

function calculateAge(el) {
    return 2016 - el;
}

function isFullAge(el) {
    return el >= 18;
}

function maxHeartRate(el) {
    if (el >= 18 && el <= 81) {
        return Math.round(206.9 - (0.67 * el));
    } else {
        return -1;
    }    
}

var ages = arrayCalc(years, calculateAge);
var fullAges = arrayCalc(ages, isFullAge);
var rates = arrayCalc(ages, maxHeartRate);

console.log(ages);
console.log(fullAges);
console.log(rates);
*/


/////////////////////////////////
// Lecture: Function returning functions
/*
function interviewQuestion(job) {
    if (job === 'designer') {
        return function(name) {
            console.log(name + ', can you please explain what UX design is?');
        }
    } else if (job === 'teacher') {
        return function(name) {
            console.log('What subject do you teach, ' + name + '?');
        }
    } else {
        return function(name) {
            console.log('Hello ' + name + ', what do you do?');
        }
    }
}

var teacherQuestion = interviewQuestion('teacher');
var designerQuestion = interviewQuestion('designer');

teacherQuestion('John');
designerQuestion('John');

interviewQuestion('teacher')('Mark');
*/


// practice function returning functions

function workout(day) {
    if (day === 'Monday') {
        return function(level) {
            console.log('It\'s ' + day + ', so let\'s do some ' + level + ' workout for our chest.');
        }
    } else if (day === 'Tuesday') {
        return function(level) {
            console.log('It\'s ' + day + ', so let\'s do some ' + level + ' workout for our back.');
        }
    } else {
        return function(level) {
            console.log('It\'s ' + day + ', so let\'s do some ' + level + ' workout for our legs.');
        }
    }
}

workout('Monday')('easy');
workout('Tuesday')('intense');
workout('Wednesday')('short');













































