/******Functions */
/* let x = 0;
function doSomething () {
    console.log(x);
     
     x += 1;

    console.log(x);

   
}

let y = 1;

doSomething(y); */

/* function rollDie () {
    let roll = Math.floor(Math.random()*6) + 1;
    for (let i = 1; i <= roll.length; i++) {
        console.log(roll);
    }
    //return roll;
} */


/* function rollDie () {
    let roll = Math.floor(Math.random()*6) + 1;
    console.log(`Rolled: ${roll}`);
    
    
}

function throwDice () {
    rollDie();
    rollDie();
    rollDie();
    rollDie();
    rollDie();
    rollDie();
}

console.log(throwDice()); */

/******Arguments */

/* function greet () {
    console.log('Hi');
}

function greetName (name) {
    console.log(`Hello ${name}`);
}

greetName('John');

function calcNum (x, y) {
    
    let calc = (x + y) / 2;
    console.log(calc);
}
calcNum(2, 3);
calcNum(24, 21); */

/* function rollDie () {
    let roll = Math.floor(Math.random()*6) + 1;
    console.log(`Rolled: ${roll}`);
    
    
}

function throwDice (numRolls) {
    for (let i = 0; i < numRolls; i++) {
        rollDie();
    }
} */

/*********Functions with Multiple Args */

/* function square (num) {
    console.log(num * num);
}

function sum (x, y) {
    console.log(x + y);
} */

/*****The return Statement */

/* function add(x, y) {
    return x + y;
} */


/* function isPurple(color) {
    if (color.toLowerCase() === 'purple'){
        return true;
    } else {
        return false;
    }
} */


/* function isPurple(color) {
    return (color.toLowerCase() === 'purple');
}

function containsPurple(arr) {
    for (let color of arr) {
        if (color === 'purple' || color === 'magenta') {
            return true;
        }
    }
    return false;
} */

/******Example use function */

/* function isValidPassword(password, username){
    if ((password.length < 8) || (password.indexOf(' ') !== -1) || (password.indexOf(username) !== -1) ) {
        return false;
    }
    return true;
}
 */

/****** 1 */
/* function isValidPassword(password, username){
    if(password.length < 8) {
        return false;
    }
    if(password.indexOf(' ') !== -1 ){ 
        return false;
    }
    if(password.indexOf(username) !== -1) {
        return false;
    }
    return true;
}

console.log(isValidPassword ('ssdadsad', 'Jack'));

/*******  2 */

/* function isValidPassword(password, username){
    const tooShort = password.length < 8;
    const hasSpace = password.indexOf(' ') !== -1;
    const tooSimilar = password.indexOf(username) !== -1;
       if(tooShort || hasSpace || tooSimilar) return false;
    return true;
} */

/******** 3 */

/* function isValidPassword(password, username){
    const tooShort = password.length < 8;
    const hasSpace = password.indexOf(' ') !== -1;
    const tooSimilar = password.indexOf(username) !== -1;
       if(!tooShort && !hasSpace && !tooSimilar) return true;
    return false;
} */

/********* 4  */
/* function isValidPassword(password, username){
    const tooShort = password.length < 8;
    const hasSpace = password.indexOf(' ') !== -1;
    const tooSimilar = password.indexOf(username) !== -1;
    return !tooShort && !hasSpace && !tooSimilar;
}
 */
/******** 5 */

/* function isValidPassword(password, username){
    return !(password.length < 8) && !(password.indexOf(' ') !== -1) && !(password.indexOf(username) !== -1);
}



console.log(isValidPassword ('ss d', 'Jack')); */


/******Exercise 2 */

/*******
 * Write a function to find the avarage value in an array of numbers
 * avg([0, 50]) //25
 * avg([75, 76, 80, 95, 100]) // 85.2
 */

let app = [0, 50, 60];
let avgSum = [75, 76, 80, 95, 100];


function avg(arr) {
    let total = 0;
    for (let i = 0; i < arr.length; i++){
        total += arr[i];
        
    }
    
    return total / arr.length;;
    
}

console.log(avg(app));
console.log(avg(avgSum));

/* 
console.log(avg(avgSum)); */

function avg(arr) {
    let total = 0;
    //loop over each num
    for (let num of arr) {
        //add them together
        total += num;
    }
    //divide by number of nums
    return total / arr.length;
}

let arr1 = [75, 76, 80, 95, 100];

console.log(avg(arr1));