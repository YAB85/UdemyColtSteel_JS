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

const nums = [1, 2, 3, 4, 5, 6, 7, 8];

const double1 = nums.map(function (n) {
    return n * 2;
});

const double2 = nums.map(n => {
    return  n * 3});

const double3 = nums.map(n => n * 4);

const partiyList = nums.map((n) => (
    n % 2 === 0 ? 'even' : 'odd'
));

