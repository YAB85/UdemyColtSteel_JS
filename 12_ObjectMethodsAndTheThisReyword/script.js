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

/* const annoyer = {
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
}; */

/*********Deck of Cards */

/* function makeDeck() {
	const deck = [];
	
		}
	}
	return deck;
} */

/* function drawCard(deck) {
	return deck.pop();
} */

/* const myDeck = makeDeck();
const card1 = drawCard(myDeck); */

/* const myDeck = {
	deck: [],
	drawCards: [],
	suits: [ 'hearts', 'diamonds', 'spades', 'clubs' ],
	values: '2,3,4,5,6,7,8,9,10,J,Q,K,A',
	initializeDeck() {
		const { suits, values, deck } = this;
		for (let value of values.split(',')) {
			for (let suit of suits) {
				deck.push({
					value,
					suit
				});
			}
		}
		//return deck;
	},
	drawCard() {
		const card = this.deck.pop();
		this.drawCards.push(card);
		return card;
	},
	drawMultiple(numCards) {
		const cards = [];
		for (let i = 0; i < numCards; i++) {
			cards.push(this.drawCard());
		}
		return cards;
	},
	shuffle(arr) {
		const { deck } = this;
		//loop over array backwards
		for (let i = deck.length - 1; i > 0; i--) {
			//pick random index before current element
			let j = Math.floor(Math.random() * (i + 1));
			//swap
			[ deck[i], deck[j] ] = [ deck[j], deck[i] ];
			console.log(arr);
		}
	}
}; */

/* const firstDeck = initializeDeck();
const drawnCards = [];
shuffle(firstDeck);
const hand1 = drawMultiple(2, firstDeck, drawCards);
const hand2 = drawMultiple(2, firstDeck, drawCards);
const pokerHand = drawMultiple(5, firstDeck, drawCards); */

const makeDeck = () => {
	return {
		deck: [],
		drawCards: [],
		suits: [ 'hearts', 'diamonds', 'spades', 'clubs' ],
		values: '2,3,4,5,6,7,8,9,10,J,Q,K,A',
		initializeDeck() {
			const { suits, values, deck } = this;
			for (let value of values.split(',')) {
				for (let suit of suits) {
					deck.push({
						value,
						suit
					});
				}
			}
			//return deck;
		},
		drawCard() {
			const card = this.deck.pop();
			this.drawCards.push(card);
			return card;
		},
		drawMultiple(numCards) {
			const cards = [];
			for (let i = 0; i < numCards; i++) {
				cards.push(this.drawCard());
			}
			return cards;
		},
		shuffle(arr) {
			const { deck } = this;
			//loop over array backwards
			for (let i = deck.length - 1; i > 0; i--) {
				//pick random index before current element
				let j = Math.floor(Math.random() * (i + 1));
				//swap
				[ deck[i], deck[j] ] = [ deck[j], deck[i] ];
				console.log(arr);
			}
		}
	};
};

const myDeck = makeDeck();
myDeck.initializeDeck();
myDeck.shuffle();
const h1 = myDeck.drawMultiple(2);
const h2 = myDeck.drawMultiple(2);
const h3 = myDeck.drawMultiple(5);

const deck2 = makeDeck();
deck2.initializeDeck();
