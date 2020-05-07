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

const gameBoard = [
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
}