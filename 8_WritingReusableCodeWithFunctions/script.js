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

function square (num) {
    console.log(num * num);
}

function sum (x, y) {
    console.log(x + y);
}

