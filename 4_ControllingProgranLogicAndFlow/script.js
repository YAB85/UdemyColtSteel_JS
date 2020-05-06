/******Comparison Operators */
/* console.log("Hello");
let x = 1;
console.log(x);
console.log(y);
var y;
y = 7; */

/* 
> // greater than
< // less than
>= // greater than or equal to
<= // less than or equal to
== // equality
=== // strict equality
!== // strict non-equality 
*/

/*****If statements */

/* let rating = -99;
if (rating === 3) {
    console.log("You are a superstar");
}else if (rating === 1) {
    console.log("You aren`t a superstar");
}else if (rating === 2) {
    console.log("You are a so...so");
} else {
    console.log("ha ha ha");
} */

/* let highScore = 1430;
let userScore = 1600;

if (userScore >= highScore) {
    console.log(`Congrats, you have the new high score of ${userScore}`);
    highScore = userScore;
}else {
    console.log(`Good game. Your score of ${userScore} did not beat the high score of ${highScore}`)

} */

/****Nesting */

/* let password='kitty1';

if(password.length >= 6){
    if(password.indexOf('') === -1){
        console.log('Valid Password!')
    } else {
        console.log('password is long enough, but cannot contain spaces');
    }
}else { 
    console.log('Password must be longer!');
} */

/********Truthy & Falsy Values */

/* let mystery = 0;

if(mystery) {
    console.log("Truthy");
}
else {
    console.log("Falsy");
} */

/******And && */

//console.log (4 > 2 && 'a' == 'b');

/* let password = 'chickenGal';

if(password.length >= 8 && password.indexOf('') === -1 ) {
    console.log('Valid password');
}
else {
    console.log('Invalid password');
}
 */

/* let num = 3;

if(num >= 1 && num <= 10) {
    console.log("ok")
}
else {
    console.log("bed");
}
 */

 /*******OR || */

/* let age = 76;

if(age < 6 || age >= 65) {
    console.log("You get in for free")
}else {
    console.log("That will be $10 please")
} */

/* let color = 'violet';
if(color === 'purple' || color === 'lilac' || color === 'violet') {
    console.log('Great choice');
}
 */

 /*****NOT ! */
/* let loggedInUser;

if(!loggedInUser) {
    console.log('Get out of here');
}
 */
let flavor = 'watermelon';

/* if(flavor !== 'grape' && flavor !== 'cherry') {
    console.log('we dont have that flavor')
} */

/* if(!(flavor === 'grape' || flavor === 'cherry')) {
    console.log('we dont have that flavor')
} */

/*****operator Precedence */

/* let x = 7;

console.log ((x == 7 || x === 3) && x > 10); */


/****The Switch statement */

/* let day = 9;

switch(day) {
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    case 4:
        console.log("Thursday");
        break;
    case 5:
        console.log("Friday");
        break;
    case 6:
        console.log("Saturday");
        break;
    case 7:
        console.log("Sunday");
        break;
    default: 
    console.log("Invalid day");
} */

/******Ternary operator */

//condition ? expIfTrue : expIfFalse;

//let num = 6;

//num === 7 ? console.log('lucky!') : console.log('Bad!'); 
let status = 'offline';

let color = status === 'offline' ? 'red' : 'green';
/* if (status === 'offline') {
    color = 'red';
}else {
    color = 'green';
} */