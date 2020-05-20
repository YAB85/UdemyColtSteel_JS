/* function multiply(x, y) {
	/* if (typeof y === 'undefined') {
        y = 1;
    }
	return x * y;
} */

/*function multiply(x, y) {
    y = typeof y === 'undefined' ? 1 : y
    return x * y;
} */

/* function multiply(x, y = 1) {
    return x * y;
}

const greet = (person, greeting = 'hi') => {
    console.log(`${greeting}, ${person}!`)
}

const blah = (x, y = [1, 2, 3]) => {
    console.log(x, y);
} */

/* const greet = (person, greeting = 'hi', punctuation = '!') => {
	console.log(`${greeting}, ${person}, ${punctuation}`);
}; */

/******Spread */

/* const nums = [ 9, 3, 2, 8 ];
console.log(Math.max(...nums));

function giveMeFour(a, b, c, d) {
	console.log('a', a);
	console.log('b', b);
	console.log('c', c);
	console.log('d', d);
}

const colors = [ 'red', 'orange', 'yellow', 'green' ];

giveMeFour(colors);

const word = 'COAT';

giveMeFour(...word); */

/* const nums1 = [ 1, 2, 3 ];
const nums2 = [ 4, 5, 6 ];

const newArr = [ nums1, 'Hello', nums2 ];

const words = 'abcdefh';

//const newWords = words.split('');
const newWords = [ ...words ]; */

/* const feline = {
	legs: 4,
	family: 'Felidae'
};

const canine = {
	family: 'Felidae',
	furry: true
};

const dog = {
	...canine,
	isPet: true,
	aborable: true
};

const houseCat = {
	...feline,
	isGrumpy: true,
	personality: 'unpredictable'
};

const catDog = {
	...canine,
	...feline
};

const catDogClone = {
	...catDog
}; */

/******Arguments */

/* function sum() {
	const argsArr = [ ...arguments ];
	return argsArr.reduce((total, currVal) => {
		return total + currVal;
	});
} */

/**********Rest */

/* function sum(...nums) {
	return nums.reduce((total, currVal) => {
		return total + currVal;
	});
}

function fullName(first, last, ...titles) {
	console.log('first', first);
	console.log('last', last);
	console.log('titles', titles);
} */

/*****Destructuring */

/* const raceResult = [
	'Eliud Kipchoge',
	'Feyise Lelisa',
	'Galen Rupp',
	'Ghirmay Ghebreslassie',
	'Alphonce Simbu',
	'Jared Ward'
]; */

//to create new value with first three elements in the array

/* const gold = raceResult[0];
const silver = raceResult[1];
const bronze = raceResult[2]; */

/* const [ gold, silver, bronze ] = raceResult;
const [ first, , , , fourth ] = raceResult; */

const runner = {
	first: 'Eliud',
	last: 'Kipchoge',
	country: 'Kenya',
	title: 'Elder of the Order of the Golden Heart of Kenya'
};

//const { first, last, time } = runner;
//const { country: nation, title: honorific } = runner;
//const { first, last, ...other } = runner;

/* const results = [
	{
		first: 'Eliud',
		last: 'Kipchoge',
		country: 'Kenya'
	},
	{
		first: 'Feyisa',
		last: 'Liloka',
		country: 'Poland'
	},
	{
		first: 'Max',
		last: 'Pain',
		country: 'USA'
	}
]; */

//const [ , { country } ] = results;
//const [ { first: goldWinner }, { country } ] = results;

/* function print(person) {
	const { first, last, title } = person;
	console.log(`${first}, ${last}, ${title}`);
} */
function print({ first, last, title }) {
	console.log(`${first}, ${last}, ${title}`);
}
