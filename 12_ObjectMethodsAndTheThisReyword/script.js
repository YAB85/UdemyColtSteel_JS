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
	multiply: function(x, y) {
		return x * y;
	},
	divide: function(x, y) {
		return x / y;
	},
	square: function(x) {
		return x * x;
	}
}; */

/**********Methods Shorthand Syntax */

/* const auth = {
	username: 'TommyBot',
	login: () => {
		console.log()
	}
	login() {
		console.log('Logged you in!')
	},
	logout() {
		console.log("Goodbye")
	}
} */

/**********Intro to Keyword THIS */

/* function sayHi() {
	console.log('Hi');
	console.log(this);
}

const person = {
	first: 'Cherilyn',
	last: 'Sarkisian',
	nickName: 'Cher',
	fullName() {
		const { first, last, nickName } = this;

		return `${first} ${last} AKA ${nickName}`;
	},
	printBio() {
		const fullName = this.fullName();
		console.log(`${fullName} is a person!`);
	}
}; */

/********Annoyomatic Demo */

const annoyer = {
	phrases: [ 'literally', 'cray cray', 'I can`t even', 'Totes!', 'YOLO', 'Can`t Stop, Won`t Stop' ],
	pickPhrase() {
		const { phrases } = this;
		const idx = Math.floor(Math.random() * phrases.length);
		return phrases[idx];
	},
	start() {
		this.timerId = setInterval(() => {
			console.log(this.pickPhrase());
		}, 3000);
	},
	stop() {
		clearInterval(this.timerId);
	}
};
