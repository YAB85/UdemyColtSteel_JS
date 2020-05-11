/******Loops */
/******For loops */



/* for (let i = 1; i <= 50; i++) {
 console.log (`${i}x${i} = ${i*i}`)
  //let y = new Array(x);
  
  //console.log(x.slice(" - "));
} */

/* let animals = ["Cat", "Fish", "Lemur", "Varan"]

for (let i = 0; i < animals.length; importScripts++){
  animals[i] = animals[i] + " - is a beautiful animals";

  console.log(animals[i]);
  
}  */

/* let x = 3;
while (x < 10000) {
  console.log(x);
  console.log("Hello");
  x = x * 3;
} */

/* const examScores = [98, 77, 84, 91, 57, 66];

for (let i = 0; i < examScores.length; i++ ) {
  console.log(i, examScores[i]);
} */

/* const myStudents = [
  {
    firstName : 'Zeus',
    grade     : 86
  },
  {
    firstName : 'Mike',
    grade     : 22
  },
  {
    firstName : 'Leon',
    grade     : 21
  },
  {
    firstName : 'Wolf',
    grade     : 81
  },
];

let total = 0;

for (let i = 0; i < myStudents.length; i++ ) {
  let student = myStudents[i];
  total += student.grade;
  total = (total / myStudents.length);
};
console.log(total);

const word = 'stressed';

let reversedWord = '';

for(let i = word.length - 1; i >= 0; i--) {
  reversedWord += word[i];
}

console.log(reversedWord); */

/****Nested For Loops */

/* for(let i = 1; i <= 10; i++) {
  console.log("Level 1", i);
  for(let j = 10; j >= 0 ; j -= 2) {
    console.log(' Level 2', j);
  }

}; */

/* const gameBoard = [
  [4, 32, 8, 4],
  [64, 8, 32, 2],
  [8, 32, 16, 4],
  [2, 8, 4, 2],
];

let totalScore = 0;
for(let i = 0; i < gameBoard.length; i++){
    let row = gameBoard[i];
    for(let j = 0; j < row.length; j++) {
     totalScore += row[j];
    }
} */

/******While loops */

/* let num = 0; 
while (num < 10) {
  console.log(num);
  num++;
} */

/* const target = Math.floor(Math.random() * 10);
let guess = Math.floor(Math.random() * 10);

while(guess !== target) {
    console.log(`Start -> Target: ${target} Guess: ${guess}`);
    guess = Math.floor(Math.random() * 10);
}
console.log(`End -> Target: ${target} Guess: ${guess}`);
console.log(`Congrats you win!!`); */

/******While break *****/

/* const target = Math.floor(Math.random() * 10);
let guess = Math.floor(Math.random() * 10);

while (true) {
  if (target === guess) break; 
    console.log(`Start -> Target: ${target} Guess: ${guess}`);
    guess = Math.floor(Math.random() * 10);
  
}
console.log(`End -> Target: ${target} Guess: ${guess}`);
console.log(`Congrats you win!!`); */

/*******For*/

/* const subreddits = [ 'soccer', 'popheads', 'cringe', 'books'];

for(let sub of subreddits) {
  console.log(sub);
}

for (let char of 'cockadoodloop') {
  console.log(char.toUpperCase());
} */

const magicSquare = [
  [2, 7, 6],
  [9, 5, 1],
  [4, 3, 8],
];

/* for(let i = 0; i < magicSquare.length; i++){
  let row = magicSquare[i];
  let sum = 0;
  for(let j = 0; j < row.length; j++) {
   sum += row[j];
  }
  console.log(`${row} summed to ${sum}`);
} */

/* for (let row of magicSquare){
  let sum = 0;
  for(let num of row) {
    sum += num;
  }

  console.log(`${row} summed to ${sum}`);
} */

/* const words1 = ['mail', 'milk', 'bath', 'black'];
const words2 = ['box', 'shake', 'tub', 'berry'];

for(let i = 0; i < words1.length; i++) {
    console.log(words1[i], words2[i]);
} */

/******For Loops for Object */

/* const movieReviews = {
    Arrival : 9.5,
    Alien : 9,
    Amelie : 8,
    'In Bruges' : 9,
    Amadeus : 10,
    'Kill Bill' : 9,
    'Little Miss Sunshine' : 8.5,
    Coraline : 7.5
};

for(let movie of Object.keys(movieReviews)) {
    console.log(movie, movieReviews[movie]);
};

const ratings = Object.values(movieReviews);
let total = 0;
for (let r of ratings) {
  total += r;
}
let avg = total / ratings.length;
console.log(avg); */

/* const jeopardyWinnings = {
  regularPlay : 2522700,
  watsonChallenge : 2522700,
  tournamentOfCampions : 2522700,
  battleOfTheDecades : 2522700,
};

for (let prop in jeopardyWinnings) {
  console.log(prop);
} 


let total = 0;
for (let prop in jeopardyWinnings) {
  total += jeopardyWinnings[prop];
}

console.log(`Ken Jennings Total Earnings: ${total}`); */
/* for (let i = 0; i < 25; i = i+3){
  if(i === 6) continue;
  console.log(i);
} */

/* let c = ['Hello', 3 , true];

let out = document.getElementById('out');

let str = '';

for (let i = 0; i < c.length; i++) {
  if (c[i] !== undefined) str += `${i} - ${c[i]} <br>`;
}
out.innerHTML = str; */