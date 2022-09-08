console.log('javascript is connected');

/////////////////////  model   /////////////////////

let whole = document.querySelector('.whole');
let enter = document.querySelector('.enter');
let intro = document.querySelector('.intro');

let score = document.querySelector('.scores');
let playerGame = document.querySelector('.playerGame');

let question = document.querySelector('.question');
let answer1 = document.querySelector('.answer1');
let answer2 = document.querySelector('.answer2');
let answer3 = document.querySelector('.answer3');
let answer4 = document.querySelector('.answer4');

let quizCategory1 = document.querySelector('.Ctgry1');
let quizCategory2 = document.querySelector('.Ctgry2');
let quizCategory3 = document.querySelector('.Ctgry3');
let quizCategory4 = document.querySelector('.Ctgry4');

let start = document.querySelector('.start');
let restart = document.querySelector('.restart');
let exit = document.querySelector('exit');

let questionCash = {
	catg1: [
		'The brain of any computer system is',
		'What difference does the 5th generation computer have from other generation computers?',
		'Which of the following computer language is used for artificial intelligence?',
		"Which of the following is the 1's complement of 10?",
		'Which part interprets program instructions and initiate control operations',
	],
	catg2: [
		'What is the capital of Italy?',
		'Which river flows through London?',
		'On which continent is the Sahara Desert located?',
		'How tall is Mount Everest?',
		'In which US state can you find the city of Chicago?',
	],
	catg3: ['Question 1', 'Question 2', 'Question 3', 'Question 4', 'Question 5'],
	catg4: ['Question 1', 'Question 2', 'Question 3', 'Question 4', 'Question 5'],
};

let answerCash1 = {
	ansr1: [
		['ALU ', 'Memory ', 'Control unit ', 'CPU '],
		[
			'Technological advancement ',
			'Scientific code ',
			'Object Oriented Programming ',
			'All of the above ',
		],
		['FORTRAN ', 'PROLOG ', 'C', 'COBOL '],
		['01 ', '110 ', '11 ', '10 '],
		['Input ', 'Storage unit ', 'Logic unit ', 'Control unit '],
	],

	ansr2: [
		['Venice ', 'Florence ', 'Rome ', 'Naples '],
		['River Severn ', 'River Trent ', 'River Thames ', 'River Great Ouse '],
		['Asia ', 'South America ', 'Africa ', 'Europe '],
		['6,849 m ', '7,849 m ', '8,849 m ', '9,849 m '],
		['Mississippi ', 'Missouri ', 'Illinois ', 'Arizona '],
	],

	ansr3: ['Question 1', 'Question 2', 'Question 3', 'Question 4', 'Question 5'],

	ansr4: ['Question 1', 'Question 2', 'Question 3', 'Question 4', 'Question 5'],
};

let questioncashIdx = Math.floor(Math.random() * 5);
let questionTxt1;
let questionTxt2;
let questionTxt3;
let questionTxt4;

let ansrTxt1;
let ansrTxt2;
let ansrTxt3;
let ansrTxt4;

/////////////////////  control   /////////////////////

function loadingQestion1() {
	questionCashIdx = Math.floor(Math.random() * 5);
	questionTxt1 = questionCash.catg1[questionCashIdx];
	ansrTxt0 = answerCash1.ansr1[questionCashIdx][0];
	ansrTxt1 = answerCash1.ansr1[questionCashIdx][1];
	ansrTxt2 = answerCash1.ansr1[questionCashIdx][2];
	ansrTxt3 = answerCash1.ansr1[questionCashIdx][3];
	let qasked = (question.innerHTML = questionTxt1);
	let ansrgiven0 = (answer1.innerHTML = ansrTxt0);
	let ansrgiven1 = (answer2.innerHTML = ansrTxt1);
	let ansrgiven2 = (answer3.innerHTML = ansrTxt2);
	let ansrgiven3 = (answer4.innerHTML = ansrTxt3);
	return qasked, ansrgiven0, ansrgiven1, ansrgiven2, ansrgiven3;
}

function loadingQestion2() {
	questionCashIdx = Math.floor(Math.random() * 5);
	questionTxt2 = questionCash.catg2[questionCashIdx];
	ansrTxt0 = answerCash.ansr2[questionCashIdx][0];
	ansrTxt1 = answerCash.ansr2[questionCashIdx][1];
	ansrTxt2 = answerCash.ansr2[questionCashIdx][2];
	ansrTxt3 = answerCash.ansr2[questionCashIdx][3];
	let qasked = (question.innerHTML = questionTxt2);
	let ansrgiven0 = (answer1.innerHTML = ansrTxt0);
	let ansrgiven1 = (answer2.innerHTML = ansrTxt1);
	let ansrgiven2 = (answer3.innerHTML = ansrTxt2);
	let ansrgiven3 = (answer4.innerHTML = ansrTxt3);
	return qasked, ansrgiven0, ansrgiven1, ansrgiven2, ansrgiven3;
}

function loadingQestion3() {
	questionCashIdx = Math.floor(Math.random() * 5);
	questionTxt3 = questionCash.catg3[questionCashIdx];
	ansrTxt0 = answerCash.ansr3[questionCashIdx][0];
	ansrTxt1 = answerCash.ansr3[questionCashIdx][1];
	ansrTxt2 = answerCash.ansr3[questionCashIdx][2];
	ansrTxt3 = answerCash.ansr3[questionCashIdx][3];
	let qasked = (question.innerHTML = questionTxt3);
	let ansrgiven0 = (answer1.innerHTML = ansrTxt0);
	let ansrgiven1 = (answer2.innerHTML = ansrTxt1);
	let ansrgiven2 = (answer3.innerHTML = ansrTxt2);
	let ansrgiven3 = (answer4.innerHTML = ansrTxt3);
	return qasked, ansrgiven0, ansrgiven1, ansrgiven2, ansrgiven3;
}

function loadingQestion4() {
	questionCashIdx = Math.floor(Math.random() * 5);
	questionTxt3 = questionCash.catg4[questionCashIdx];
	ansrTxt0 = answerCash.ansr4[questionCashIdx][0];
	ansrTxt1 = answerCash.ansr4[questionCashIdx][1];
	ansrTxt2 = answerCash.ansr4[questionCashIdx][2];
	ansrTxt3 = answerCash.ansr4[questionCashIdx][3];
	let qasked = (question.innerHTML = questionTxt4);
	let ansrgiven0 = (answer1.innerHTML = ansrTxt0);
	let ansrgiven1 = (answer2.innerHTML = ansrTxt1);
	let ansrgiven2 = (answer3.innerHTML = ansrTxt2);
	let ansrgiven3 = (answer4.innerHTML = ansrTxt3);
	return qasked, ansrgiven0, ansrgiven1, ansrgiven2, ansrgiven3;
}

function loadingcategory() {
	return (question.innerHTML = 'Select your question category');
}

function open() {
	whole.style.visibility = 'visible';
	intro.style.display = 'none';
	enter.innerHTML = '&#9759; Enter &#9759;';
}

/////////////////////  view   /////////////////////

enter.addEventListener('click', open);
start.addEventListener('click', loadingcategory);
quizCategory1.addEventListener('click', loadingQestion1);
quizCategory2.addEventListener('click', loadingQestion2);
quizCategory3.addEventListener('click', loadingQestion3);
quizCategory4.addEventListener('click', loadingQestion4);
