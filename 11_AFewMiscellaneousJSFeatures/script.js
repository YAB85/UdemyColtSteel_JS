function multiply(x, y) {
	/* if (typeof y === 'undefined') {
        y = 1;
    } */
	return x * y;
}

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

const feline = {
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
};

/******Arguments */

function sum() {
	return arguments.reduce((total, currVal) => {
		return total + currVal;
	});
}
