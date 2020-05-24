/* const getStats = (arr) => {
	const max = Math.max(...arr);
	const min = Math.min(...arr);
	const sum = arr.reduce((sum, r) => sum + r);
	const avg = sum / arr.length;
	return {
		max: max,
		min: min,
		sum: sum,
		avg: avg
	}
} */

/* const getStats = (arr) => {
	const max = Math.max(...arr);
	const min = Math.min(...arr);
	const sum = arr.reduce((sum, r) => sum + r);
	const avg = sum / arr.length;
	return {
		max,
		min,
		sum,
		avg
	}
}

const reviews = [4.5, 5.0, 3.44, 2.8, 3.5, 4.0, 3.5];

const stats = getStats(reviews); */
/*************Computed Properties */
/* const role = 'host';
const person = 'Jools Holland';
const role2 = 'Director';
const person2 = 'James Cameron'; */

//const team = {}; //put role + person

/* team[role] = person;
team[role2] = person2; */

/* const team = {
	[role]: person,
	[role2]: person2
} */

/* function addProp(obj, k, v) {
	const copy = {
		...obj
	};
	copy[k] = v;
	return copy;
} */

/* const addProp = (obj, k, v) => {
	return {
		...obj,
		[k]: v
	}
}

const res = addProp(team, 'happy', ':)'); */

/*****Adding Methods to Object */

/* const math = {
	multiply: function (x, y) {
		return x * y;
	},
	divide: function (x, y) {
		return x / y;
	},
	square: function (x) {
		return x * x;
	}
}; */

/* let a = (1, 5 - 1) * 2;

alert(a); */

/* let sillyString = 'hAy, hoW Are yOu!';
let lowerCase = sillyString.toLowerCase();
console.log(lowerCase);
let newString = lowerCase.split(' ');

/* for (let i = 0; i <= sillyString.length; i+=){

} */
/* let firstWord = newString[0];
let firstLetter = firstWord[0].toUpperCase();
console.log(firstLetter);
let newWord = ;
console.log(newWord); */
let randomBodyParts = [ 'eyes', 'nose', 'skull' ];
let randomAdjectives = [ 'вонючая', 'унылая', 'дурацкая' ];
let randomWords = [ 'муха', 'выдра', 'дубина', 'мартышка', 'крыса' ];

let randomBodyPart = randomBodyParts[Math.floor(Math.random() * 3)];
let randomAdjective = randomAdjectives[Math.floor(Math.random() * 3)];
let randomWord = randomWords[Math.floor(Math.random() * 5)];

let randomInsult = 'You have a ' + randomBodyPart + ' like as ' + randomAdjective + ' ' + randomWord + '!!!';

console.log(randomInsult);
