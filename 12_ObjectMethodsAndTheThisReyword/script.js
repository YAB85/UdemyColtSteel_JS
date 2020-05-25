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
/* let randomBodyParts = [ 'eyes', 'nose', 'skull' ];
let randomAdjectives = [ 'вонючая', 'унылая', 'дурацкая' ];
let randomWords = [ 'муха', 'выдра', 'дубина', 'мартышка', 'крыса' ];

let randomBodyPart = randomBodyParts[Math.floor(Math.random() * 3)];
let randomAdjective = randomAdjectives[Math.floor(Math.random() * 3)];
let randomWord = randomWords[Math.floor(Math.random() * 5)]; */

/* let randomInsult = 'You have a ' + randomBodyPart + ' like as ' + randomAdjective + ' ' + randomWord + '!!!'; */

/* let randomInsult = [ 'You have a', randomBodyPart, 'like as', randomAdjective, randomWord, '!!!' ].join(' ');

console.log(randomInsult); */

/* let arr = [ 3, 2, 1 ].join(' больше,' + ' чем' + ' ');

console.log(arr); */

function camelize(str) {
	//let newCamelCase;
	return str.split('-').map((word, index) => (0 ? word : word[0].toUpperCase() + word.slice(1))).join('');
}

let newWord = 'background-color';

console.log(camelize(newWord));

/* let admin, name;
name = 'John';
admin = name;

console.log(admin);

let planet = 'Earth'; // ourPlanetName
let userName; // currentUserName */

/* let name = 'Ilya';
alert(`hello ${1}`); // hello 1
alert(`hello ${'name'}`); // hello name
alert(`hello ${name}`); // hello Ilya */

/* console.log('' + 1 + 0); // 10
console.log('' - 1 + 0); // -1
console.log(true + false); //1
console.log(6 / '3'); // 2
console.log('2' * '3'); // 6
console.log(4 + 5 + 'px'); //45px -> 9px!
console.log('4' - 2); // 2
console.log('$' + 4 + 5); // $45
console.log('4px' - 2); // 4px2 -> NaN!
console.log(7 / 0); // Infinity
console.log('  -9  ' + 5); // -9 5!
console.log('  -9  ' - 5); // - 14
console.log(null + 1); // 1
console.log(undefined + 1); //Infinity -> NaN!
console.log(' \t \n' - 2); // -2 */

/* let a = 1;
let b = 1;

let c = ++a;
let d = b++;

console.log(a); //2
console.log(b); //2
console.log(c); //2
console.log(d); //1 */

/* let a = 2;
let x = 1 + (a *= 2);

console.log(a); // 4
console.log(x); // 5 */

/* console.log(5 > 4); // true
console.log('ананас' > 'яблоко'); //false
console.log('2' > '12'); //true 1...2..9,10,11,12.13
console.log(undefined == null); //true
console.log(undefined === null); // false
console.log(null == '\n0\n'); // false
console.log(null === +'\n0\n'); // false */

/* let userName = prompt('What is your name?', '');
alert(userName); */

if ('0') {
	alert('Hello');
}
