/* console.log('hi');


/*****for Each */
/* const nums = [9, 8, 7, 6, 5, 4, 3, 2, 1];

nums.forEach(function(n){
    console.log(n * n);
}); */

/* nums.forEach(function (el){
    if(el % 2 === 0){
        console.log(el);
    }
}) */

/* const numbers = [20, 21, 22, 23, 24, 25, 26, 27]; */

/* numbers.forEach(function (num) {
    console.log(num * 2);
}) */

/* function printTriple(n) {
    console.log(n * 3);
};

numbers.forEach(printTriple); */

/* const books = [
    {
    title: 'Hello from Moon',
    authors: ["Eric Bachman"],
    rating: 4.87
    },
    {
    title: 'Look at the window',
    authors: ["Richard Hendrix"],
    rating: 4.01
    },
    {
    title: 'A Gentleman in Moskow',
    authors: ["Amor Towler"],
    rating: 4.36
    },
];

books.forEach(function (book) {
    console.log(book.title.toUpperCase());
});

for (let book of books) {
    console.log(book.title.toUpperCase());
};

for (let i = 0; i <books.length; i++) {
    console.log(books[i].title.toUpperCase());
} */

/* const nums = [9, 8, 7, 6, 5, 4, 3, 2, 1];

nums.forEach(function (num, idx) {
    console.log(idx, num);
}) */

/*****Map */

/* const nums = [9, 8, 7, 6, 5, 4, 3, 2, 1];


const doubles = nums.map(function (n) {
    return n * n;
});
console.log(doubles);

const numDetails = nums.map(function (n) {
    return {
        value: n, 
        isEven: n % 2 === 0
    }
});
console.log(numDetails); */

/* const words = ['asap', 'byob', 'vrip', 'diy'];
const reverWords = words.map(function (word) {
    return word.toUpperCase().split('').reverse().join('.');
});

console.log(reverWords);

const books = [
    {
    title: 'Hello from Moon',
    authors: ["Eric Bachman"],
    rating: 4.87
    },
    {
    title: 'Look at the window',
    authors: ["Richard Hendrix"],
    rating: 4.01
    },
    {
    title: 'A Gentleman in Moskow',
    authors: ["Amor Towler"],
    rating: 4.36
    },
];

const titles = books.map(function (b){
    return b.title;
});

console.log(titles); */

/******Arrow functions */

/* const square = (x) => {
    return x * x;
} */

/* const isEven = (num) => {
    return num % 2 === 0;
}; */

/* const isEven = num => {
    return num % 2 === 0;
};



const multiply = (x,y) => {
    return x * y;
};
 */

/* const isEven = function (num) {
    return num % 2 === 0;
};

const isEven = (num) => {
    return num % 2 === 0;
};

const isEven = num => {
    return num % 2 === 0;
};

const isEven = num => {
     num % 2 === 0;
};

const isEven = num => num % 2 === 0; */

/* const nums = [1, 2, 3, 4, 5, 6, 7, 8];

const double1 = nums.map(function (n) {
    return n * 2;
});

const double2 = nums.map(n => {
    return  n * 3});

const double3 = nums.map(n => n * 4);

const partiyList = nums.map((n) => (
    n % 2 === 0 ? 'even' : 'odd'
)); */

/*****Find */

/* let movies = [
    "The Fantastic Mr.Fox",
    "Mr. and Mrs. Smith",
    "Mrs. Doubtfire",
    "Mr.Deeds"
]

const movie = movies.find(movie => {
    return movie.includes('Mrs.');
});

const movie2 = movies.find(m => m.indexOf("Mrs") === 0);



const books = [
    {
    title: 'Hello from Moon',
    authors: ["Eric Bachman"],
    rating: 4.87
    },
    {
    title: 'Look at the window',
    authors: ["Richard Hendrix"],
    rating: 4.01
    },
    {
    title: 'A Gentleman in Moskow',
    authors: ["Amor Towler"],
    rating: 4.36
  },
];

const goodBook = books.find(b => b.rating >= 4.3);
 */

/******Filter */

/* const nums = [9, 8, 7, 6, 5, 4, 3, 2, 1];

const odds = nums.filter(n => {
    return n % 2 === 1;
});

const smallNums = nums.filter(n => n < 5); */

/*****Every & Some */

/* const words = ["dog", "dig", "log", "bag", "wag"];

words.every(word => {
    return word.length === 3;
});

words.every(word => word[0] === 'd');

words.every(w => {
    let last_letter = w[w.length - 1];
    return last_letter === 'g';
}) */

/*******Some */
/* const words = ["dog", "jello", "log", 'cupcake', "bag", "wag"];

words.some(word => {
    return word.length > 4;
});

words.some(word => word[0] === 'Z');

words.some(w => w.includes('cake')); */

/*****Sort */

/* const prices = [ 400.5, 3000, 99.99, 35.99, 12.0, 9500 ];

const badSort = prices.slice().sort();

const ascSort = prices.slice().sort((a, b) => a - b);
const descSort = prices.slice().sort((a, b) => b - a); */

/****Reduce */

//const nums = [ 3, 4, 5, 6, 7 ];

/* const nums2 = nums.reduce((accumulator, currentValue) => {
	return accumulator + currentValue;
});*/

/* nums.reduce((total, currentVal) => {
	return total * currentVal;
}); */

const grades = [87, 64, 96, 92, 88, 99, 73, 70, 64];

/* const maxGrade = grades.reduce((max, currentVal) => {
	if (currentVal > max) return currentVal;
	return max;
}); */

const maxGrade = grades.reduce((max, currentVal) => {
    return Math.max(max, currentVal);
});

const minGrade = grades.reduce((min, currentVal) => {
    return Math.min(min, currentVal);
});

const votes = ['y', 'y', 'n', 'y', 'n', 'y', 'absent', 'n', 'y', 'n', 'n', 'n', 'y', 'y'];

const result = votes.reduce((tally, val) => {
    if (tally[val]) {
        tally[val]++;
    } else {
        tally[val] = 1;
    }
    return tally;
}, {});


/* const result = votes.reduce((tally, val) => {
    tally[val] = (tally[val] || 0) + 1;
    return tally;
}, {}); */