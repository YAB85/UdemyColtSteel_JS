/*****Scope */

//console.log('hi');

/* function lol() {
    var color = 'teal';
    let person = 'Tom';
    const age = 45;
    console.log(age);
}
function chain() {
    var color = 'teal';
    let person = 'Tom';
    const age = 19;
    console.log(age);
}

lol();
chain(); */
//console.log(color);
//console.log(person);
//console.log(age);

/* let bird = 'mandarin duck';

function birdWatch() {
    //let bird = 'golden pheasant'
    console.log(bird);
}
birdWatch();

console.log(bird); */

/*****Block scoped */

/* if(true) {
    const animal = 'eel';
    console.log(animal);
}
console.log(animal); */

/* let animals = ['grizzly bear', 'panda beer', 'spectacled beer'];
var i = 10;
for (var i = 0; i < animals.length; i++) {
    console.log(i, animals[i]);
}
console.log(i); */

/* let animals = ['grizzly bear', 'panda beer', 'spectacled beer'];
var i = 10;
for (let i = 0; i < animals.length; i++) {
    console.log(i, animals[i]);
}
console.log(i); */

//[1, 3, 5]
//[2, 6, 10]

/* function doubleArr (arr) {
    const result = [];
    for(let num of arr) {
        let double = num * 2;
        result.push(double);
    }
    console.log(double);
    return result;
}
 */
/****Lexical scope */

/* function outer() {
    let hero = 'Black Panther';

    function inner() {
        let cryForHelp = `${hero}, please save me!`;
        console.log(cryForHelp);
      }

      inner();
} */

/* let movie = "Aliens"

function outer() {
    //let movie = 'Alien';

    function inner() {
        //let movie = 'Forrest Gump';
        function  extraInner() {  
            console.log(movie.toUpperCase());

        }
        //extraInner();
      }
    inner();
} */

/******Function expressions */

/* const square = function (num) {
    return num * num;
}

square(7);


/***Function declaration */
/*function add() {
    return;
} */


/* function add(x, y) {
    return x + y;
}

const sum = function (x, y) {
    return x + y;
} */

/*******Higher Order Functions */

/* function statement*///
function add(x, y) {
    return x + y;
}


/****Function declaration */
const subtract = function (x, y) {
    return x - y;
}

function multiply (x, y) {
    return x * y;
}


const divide = function (x, y) {
    return x / y;
}


const operations = [add, subtract, multiply, divide];

for(let func of operations) {
    let result = func(40, 5);
    console.log(result);
}

const thing = {
   doSomething: multiply
}   