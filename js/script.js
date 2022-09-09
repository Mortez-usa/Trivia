/////////////////////  model   /////////////////////

let whole = document.querySelector('.whole');
let enter = document.querySelector('.enter');
let intro = document.querySelector('.intro');

let score = document.querySelector('.scores');
let playerGame = document.querySelector('.playerGame');

let question = document.querySelector('.question');
let answerFor1 = document.querySelector('.answer1');
let answerFor2 = document.querySelector('.answer2');
let answerFor3 = document.querySelector('.answer3');
let answerFor4 = document.querySelector('.answer4');

let quizCategory1 = document.querySelector('.Ctgry1');
let quizCategory2 = document.querySelector('.Ctgry2');
let quizCategory3 = document.querySelector('.Ctgry3');
let quizCategory4 = document.querySelector('.Ctgry4');

let start = document.querySelector('.start');
let restart = document.querySelector('.restart');
let exit = document.querySelector('.exit');

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
	catg3: [
		'Javascript is an _______ language?',
		'Which of the following keywords is used to define a variable in Javascript?',
		'Which of the following methods is used to access HTML elements using Javascript?',
		'Upon encountering empty statements, what does the Javascript Interpreter do?',
		'Which of the following methods can be used to display data in some form using Javascript?',
	],
	catg4: [
		'General Assembly has _________ campuses',
		'General Assembly has _________ hiring partners',
		'General Assembly has _________ alumni netwok',
		'General Assembly has _________ trained employees ',
		'General Assembly focused on _________',
	],
};

let answerCash = {
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
		['Mississippi ', 'Illinois ', 'Missouri ', 'Arizona '],
	],

	ansr3: [
		['Object-Oriented', 'Object-Based', 'Procedural', 'none of the above'],
		['var', 'let', 'Both A and B', 'None of Above'],
		[
			'getElementById',
			'getElementByClassName',
			'Both A and B',
			'None of the above',
		],
		[
			'Throw an error',
			'Ignores the staements',
			'Gives a warning',
			'None of the above',
		],
		['document.write()', 'console.log', 'window.alert()', 'All of the above'],
	],

	ansr4: [
		['5+', '10+', '20+', '30+'],
		['17000+', '18000+', '19000+', '20000+'],
		['4000+', '8000+', '50000+', '70000+'],
		['25000+', '30000+', '400+', '10000+'],
		[
			'developing programs and financing options',
			'increasing hiring rate',
			'expanding campuses',
			'online courses',
		],
	],
};

let questioncashIdx;
let questionTxt1;
let questionTxt2;
let questionTxt3;
let questionTxt4;

let ansrTxt0;
let ansrTxt1;
let ansrTxt2;
let ansrTxt3;

let rightAnswer;
let arrayOFAnswers = [ansrTxt0, ansrTxt1, ansrTxt2, ansrTxt3];
let arrayOfRightAnswer = [
	[4, 2, 3, 4, 1],
	[1, 2, 3, 4, 3],
	[1, 2, 3, 4, 1],
	[1, 2, 3, 4, 2],
];
let arrayAnswerFor = [answerFor1, answerFor2, answerFor3, answerFor4];

let categoryNum;
let turnGreen;
/////////////////////  control   /////////////////////

function loadingQestion1() {
	questionCashIdx = Math.floor(Math.random() * 5);
	questionTxt1 = questionCash.catg1[questionCashIdx];
	ansrTxt0 = answerCash.ansr1[questionCashIdx][0];
	ansrTxt1 = answerCash.ansr1[questionCashIdx][1];
	ansrTxt2 = answerCash.ansr1[questionCashIdx][2];
	ansrTxt3 = answerCash.ansr1[questionCashIdx][3];
	let qasked = (question.innerHTML = questionTxt1);
	let ansrgiven0 = (answerFor1.innerHTML = ansrTxt0);
	let ansrgiven1 = (answerFor2.innerHTML = ansrTxt1);
	let ansrgiven2 = (answerFor3.innerHTML = ansrTxt2);
	let ansrgiven3 = (answerFor4.innerHTML = ansrTxt3);
	categoryNum = 0;
	answerFor1.style.backgroundColor = 'beige';
	answerFor2.style.backgroundColor = 'beige';
	answerFor3.style.backgroundColor = 'beige';
	answerFor4.style.backgroundColor = 'beige';
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
	let ansrgiven0 = (answerFor1.innerHTML = ansrTxt0);
	let ansrgiven1 = (answerFor2.innerHTML = ansrTxt1);
	let ansrgiven2 = (answerFor3.innerHTML = ansrTxt2);
	let ansrgiven3 = (answerFor4.innerHTML = ansrTxt3);
	categoryNum = 1;
	answerFor1.style.backgroundColor = 'beige';
	answerFor2.style.backgroundColor = 'beige';
	answerFor3.style.backgroundColor = 'beige';
	answerFor4.style.backgroundColor = 'beige';
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
	let ansrgiven0 = (answerFor1.innerHTML = ansrTxt0);
	let ansrgiven1 = (answerFor2.innerHTML = ansrTxt1);
	let ansrgiven2 = (answerFor3.innerHTML = ansrTxt2);
	let ansrgiven3 = (answerFor4.innerHTML = ansrTxt3);
	categoryNum = 2;
	answerFor1.style.backgroundColor = 'beige';
	answerFor2.style.backgroundColor = 'beige';
	answerFor3.style.backgroundColor = 'beige';
	answerFor4.style.backgroundColor = 'beige';
	return qasked, ansrgiven0, ansrgiven1, ansrgiven2, ansrgiven3;
}

function loadingQestion4() {
	questionCashIdx = Math.floor(Math.random() * 5);
	questionTxt4 = questionCash.catg4[questionCashIdx];
	ansrTxt0 = answerCash.ansr4[questionCashIdx][0];
	ansrTxt1 = answerCash.ansr4[questionCashIdx][1];
	ansrTxt2 = answerCash.ansr4[questionCashIdx][2];
	ansrTxt3 = answerCash.ansr4[questionCashIdx][3];
	let qasked = (question.innerHTML = questionTxt4);
	let ansrgiven0 = (answerFor1.innerHTML = ansrTxt0);
	let ansrgiven1 = (answerFor2.innerHTML = ansrTxt1);
	let ansrgiven2 = (answerFor3.innerHTML = ansrTxt2);
	let ansrgiven3 = (answerFor4.innerHTML = ansrTxt3);
	categoryNum = 3;
	answerFor1.style.backgroundColor = 'beige';
	answerFor2.style.backgroundColor = 'beige';
	answerFor3.style.backgroundColor = 'beige';
	answerFor4.style.backgroundColor = 'beige';
	return qasked, ansrgiven0, ansrgiven1, ansrgiven2, ansrgiven3;
}

function showingRightAnswer() {
	turnGreen =
		arrayAnswerFor[arrayOfRightAnswer[categoryNum][questionCashIdx] - 1];
	answerFor1.style.backgroundColor = '#a23327';
	answerFor2.style.backgroundColor = '#a23327';
	answerFor3.style.backgroundColor = '#a23327';
	answerFor4.style.backgroundColor = '#a23327';
	turnGreen.style.backgroundColor = 'green';
	if (categoryNum == 0) {
		let set = setTimeout(loadingQestion1, 2000);
	}
	if (categoryNum == 1) {
		let set = setTimeout(loadingQestion2, 2000);
	}
	if (categoryNum == 2) {
		let set = setTimeout(loadingQestion3, 2000);
	}
	if (categoryNum == 3) {
		let set = setTimeout(loadingQestion4, 2000);
		console.log(turnGreen);
	}
}

function loadingcategory() {
	return (question.innerHTML = 'Select your question category');
}

function init() {
	whole.style.visibility = 'visible';
	intro.style.display = 'none';
	enter.innerHTML = '&#9759; Enter &#9759;';
}

function close() {
	whole.style.display = 'none';
	intro.style.display = 'none';
}

function restartGame() {
	return location.reload();
}

/////////////////////  view   /////////////////////

enter.addEventListener('click', init);
start.addEventListener('click', loadingcategory);
exit.addEventListener('click', close);
restart.addEventListener('click', restartGame);

quizCategory1.addEventListener('click', loadingQestion1);
quizCategory2.addEventListener('click', loadingQestion2);
quizCategory3.addEventListener('click', loadingQestion3);
quizCategory4.addEventListener('click', loadingQestion4);

answerFor1.addEventListener('click', showingRightAnswer);
answerFor2.addEventListener('click', showingRightAnswer);
answerFor3.addEventListener('click', showingRightAnswer);
answerFor4.addEventListener('click', showingRightAnswer);
