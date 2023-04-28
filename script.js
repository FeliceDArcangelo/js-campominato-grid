const write = document.querySelector('.write');
const grid = document.querySelector('.grid');
const btnPlay = document.querySelector('#playbtn');
const selectLevel = document.querySelector('#level');

let boxs;
let arrBomb;
let punteggio;


btnPlay.addEventListener('click', function() {
	write.classList.add('hidden');
	grid.classList.remove('hidden');
	boxs = parseInt(selectLevel.value);
	grid.style.setProperty('--squaresPieses', Math.sqrt(boxs));
	arrBomb = randomArray(1, boxs, 16);
	punteggio= 0;
	setGrid(boxs, grid);
});

function setGrid(boxs, container) {
	const dimension = Math.sqrt(boxs);
	container.innerHTML = '';
	for (let i = 1; i <= boxs; i++) {
		let cell = document.createElement('div');
		cell.innerHTML = i;
		cell.classList.add('box');
		container.append(cell);
		cell.addEventListener('click', click);
	}
}

function randomArray(min, max, numEle) {
	let arr = [];
	for (let i = 0; i < numEle; i++) {
		let randomNum;
		do {
			randomNum = getRandom (min, max);
		} while (arr.includes(randomNum))
		arr.push(randomNum);
	}
	return arr;
}

function getRandom(min, max) {
	return Math.floor(Math.random() * (max - min + 1) ) + min;
}

function click() {
	const numbox = parseInt(this.innerHTML);
	this.removeEventListener('click', click);
	if (arrBomb.includes(numbox)) {
		this.classList.add('bomb');
	} else {
		this.classList.add('clicked');
		score++;
	}
}