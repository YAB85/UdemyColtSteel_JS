/********Creating Array */

/* let shoppingList = ['cereal', 'cheese','ice'];

let num = [45, 45, 34, 12];

let myCollection = [12, 'dog', true, null, NaN];

let def = new Array(1,2, 3123, 23, 2342);
 */
/*****Array indice */

/* console.log(num[1]);
console.log(num.length);

console.log(num.length - 1);


console.log(def[313]); */


/*****Modifying Array */

/* let shoppingList = ['Cheddar Cheese', '2% Milk'];

shoppingList[1]='Whole Milk';
shoppingList[2]='Ice Cream';

console.log(shoppingList);


 */
/* let words = "Hello mY FrIend";

let arr = new Array(words);

console.log(arr);

for (let i = 0; i < arr.length; i++) {
                let newArr = arr[i].toLowerCase();
            }     
console.log(arr.join()); */
/*****Push and pop */

//let topSongs = ['First Time Ever I Saw Your Face', 'God Only Knows', 'A Day In the Life'];


/* topSongs.push('Fortunate Son');
topSongs.push('Pop');
topSongs.pop();
*/

/* let x = [];
x.unshift('big plates');
x.unshift('small cups');
x.unshift('medium fork');
x.unshift('');
console.log(x);
x.shift();

console.log(x); */

/******Concat */

/* let fruits = ['apple', 'banana'];

let veggies = ['asparagus', 'brussel sprouts'];

console.log(fruits.concat(veggies));
console.log(veggies.concat(fruits));
console.log(veggies.join()); */

/******Includes and indexOf */

/* let x = [1, 2, 3, 4, 5, 6, 7];

console.log(x.includes(2)); */

/* let ingredients = [
    'water',
    'corn starch',
    'flour',
    'cheese',
    'brown sugar',
    'shrimp',
    'water',
    'ell',
    'butter',
    'ell'
];

if(ingredients.indexOf('flour')) {
    console.log('I am gluten free, I cannot eat that!')
}

console.log(ingredients.indexOf('water', 7)) */

/* const beasts = ['ant', 'bison', 'camel', 'duck', 'bison'];

console.log(beasts.indexOf('bison'));
// expected output: 1

// start from index 2
console.log(beasts.indexOf('bison', 2));
// expected output: 4

console.log(beasts.indexOf('giraffe'));
// expected output: -1 */

/*****Join and reverse */

/* let letters = ['T', 'C', 'E', 'P', 'S', 'E', 'R'];

console.log(letters.reverse());
console.log(letters);
console.log(letters.join('')); */

/*****Slice */

/* let animals = ['shark', 'salmon', 'whale', 'bear', 'lizard', 'tortoise'];

let swimmers = animals.slice(0, 3);

let mammals = animals.slice(2, 4);

let reptiles = animals.slice(4);

let quadruped = animals.slice(-3, -1);

console.log(quadruped);



console.log(swimmers); */

/******Splice */

/* let myFish = ['angel', 'clown', 'mandarin', 'sturgeon']
let removed = myFish.splice(0, 1);



let animals = ['shark', 'salmon', 'whale', 'bear', 'lizard', 'tortoise'];
animals.splice(1, 0, 'octopus');

animals.splice(3, 2);

console.log(animals); */

/*****Sort */

let num = [1, 12, 42, 1000, 35];

console.log(num.sort());