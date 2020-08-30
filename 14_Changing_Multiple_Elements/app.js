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

const allLis = document.querySelectorAll('li');
const colors = [ 'red', 'orange', 'yellow', 'green', 'blue', 'purple' ];

/* for (let i = 0; i < allLis.length; i++) {
	allLis[i].innerText = 'We are the Champions';
} */

allLis.forEach((li, i) => {
	const color = colors[i];
	li.style.color = color;
});

const h1 = document.querySelector('h1');
