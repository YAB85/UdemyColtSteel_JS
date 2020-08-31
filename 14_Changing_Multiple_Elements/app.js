// Select all LI's on the page:
//const allLis = document.querySelectorAll('li');

// One option, a regular for loop:
/* for (let i = 0; i < allLis.length; i++) {
  allLis[i].innerText = 'WE ARE THE CHAMPIONS!'
}
 */
//Another option using for...of:
/* for (let li of allLis) {
  li.innerHTML = 'WE ARE <b>THE CHAMPIONS</b>'
} */
/* 
const p = document.querySelector('#main');
const ul = document.querySelector('ul');
const form = document.querySelector('form');

const inputs = document.querySelectorAll('input');

const a = document.querySelector('a');
const img = document.querySelector('img');
const range = document.querySelector('input[type="range"]');

const firstLi = document.querySelector('li'); */

//const allLis = document.querySelectorAll('li');
//const colors = [ 'red', 'orange', 'yellow', 'green', 'blue', 'purple' ];

/* for (let i = 0; i < allLis.length; i++) {
	allLis[i].innerText = 'We are the Champions';
} */

/* allLis.forEach((li, i) => {
	const color = colors[i];
	li.style.color = color;
});

const h1 = document.querySelector('h1'); */

/* let arr1 = [ 1, 2, 3, 4, 5 ];

let arr2 = [ 'one', 'two', 'three', 'four', 'five' ];
let arr = [];
arr.forEach((el, i) => {
	const arr3 = arr2[i];
	arr = arr1 + arr3;
	console.log(arr);
}); */

const li = document.querySelector('li');

const styles = getComputedStyle(li);

const h1 = document.querySelector('h1');

const compStyles = getComputedStyle(h1);

const todo = document.querySelector('#todos .todo');

/* todo.style.color = 'gray';
todo.style.textDecoration = 'line-through';
todo.style.opacity = '50%'; */

const newH2 = document.createElement('h2');

const newImg = document.createElement('img');
newImg.src =
	'https://images.unsplash.com/photo-1598121291092-d84e4017b09c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1164&q=80';

newImg.style.width = '300px';
document.body.appendChild(newImg);

const newLink = document.createElement('a');

newLink.innerText = 'Mr. Bubz Video! CLICK MEEE!';
newLink.href = 'Https://www.youtube.com/watch?v=QQNL83fhWJU';

const firstP = document.querySelector('p');
firstP.appendChild(newLink);

const parentUl = document.querySelector('ul');

const newLi = document.createElement('li');

newLi.innerText = 'I AM A NEW LI';

const firstLi = document.querySelector('li.todo');

const lastUl = document.querySelectorAll('li.todo')[3];
const lastTodo = document.querySelectorAll('li.todo')[2];
