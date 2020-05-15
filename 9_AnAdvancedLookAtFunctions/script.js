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
/* function add(x, y) {
    return x + y;
}


/****Function declaration */
/* const subtract = function (x, y) {
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
}    */ 

/* function callThreeTimes(f) {
    f();
    f();
    f();
}*/

/* function cry() {
    console.log("Boo hoo I`m so happy!");
} 


function rage() {
    console.log("I`m so so happy!");
} 

function repeatNTomes(action, num){
    for(let i = 0; i < num; i++) {
        action();
    }
} */

//repeatNTomes(cry, 13);

/* function pickOne(f1, f2) {
    let rand = Math.random();
    console.log(rand);
    if(rand < 0.5) {
        f1();
    }else {
        f2();
    }
}

pickOne(cry, rage); */

/*******Functions as Return Values */

/* function multiplyBy (num){
    return function(x) {
        return x * num;
    }
}

const triple = multiplyBy(3);
const double = multiplyBy(2);

console.log(triple(4));
console.log(double(2)); */



/* function multiplyBy (num){
    const f =  function() {
        console.log("Hi");
    }
    return f;
} */

//const isChild = makeBetweenFunc(0, 18);

//isChild(5)//false

/* function makeBetweenFunc(x,y){
    return function(num) {
        return num >= x && num <= y;
    }
};

const isChild = makeBetweenFunc(0, 18);

console.log(isChild(-1));

const isInNineties = makeBetweenFunc(1990, 2000);

console.log(isInNineties(2001)); */

/*******Callback function */

/* function grumps(){
    alert("Hello, my friend");
}

setTimeout(grumps,5000); */



/* const btn = document.querySelector('button');
btn.addEventListener('click', function() {
    alert('Why did you click me?');
})

setTimeout(function(){
        console.log("hello");
},5000); */


/*****Hoisting */
/* console.log(animal);
var animal = 'Tapir'; */
//console.log(animal);

/* function howl() {
    console.log("Awooooooo");
}

howl(); */
hoot();

var hoot = function () {
    console.log("Hooo hooo");
}

hoot();