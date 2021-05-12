let Questions = [
	{
		question: 'What is the scientific name of a butterfly?',
		answers: ['Apis', 'Coleoptera', 'Formicidae', 'Rhopalocera'],
		correctIndex: 3,
	},
	{
		question: 'How hot is the surface of the sun?',
		answers: ['1,233 K', '5,778 K', '12,130 K', '101,300 K'],
		correctIndex: 1,
	},
	{
		question: 'Who are the actors in The Internship?',
		answers: [
			'Ben Stiller, Jonah Hill',
			'Courteney Cox, Matt LeBlanc',
			'Kaley Cuoco, Jim Parsons',
			'Vince Vaughn, Owen Wilson',
		],
		correctIndex: 3,
	},
	{
		question: 'What is the capital of Spain?',
		answers: ['Berlin', 'Buenos Aires', 'Madrid', 'San Juan'],
		correctIndex: 2,
	},
	{
		question:
			'What are the school colors of the University of Texas at Austin?',
		answers: [
			'Black, Red',
			'Blue, Orange',
			'White, Burnt Orange',
			'White, Old gold, Gold',
		],
		correctIndex: 2,
	},
	{
		question: 'What is 70 degrees Fahrenheit in Celsius?',
		answers: ['18.8889', '20', '21.1111', '158'],
		correctIndex: 2,
	},
	{
		question: 'When was Mahatma Gandhi born?',
		answers: [
			'October 2, 1869',
			'December 15, 1872',
			'July 18, 1918',
			'January 15, 1929',
		],
		correctIndex: 0,
	},
	{
		question: 'How far is the moon from Earth?',
		answers: [
			'7,918 miles (12,742 km)',
			'86,881 miles (139,822 km)',
			'238,400 miles (384,400 km)',
			'35,980,000 miles (57,910,000 km)',
		],
		correctIndex: 2,
	},
	{
		question: 'What is 65 times 52?',
		answers: ['117', '3120', '3380', '3520'],
		correctIndex: 2,
	},
	{
		question: 'How tall is Mount Everest?',
		answers: [
			'6,683 ft (2,037 m)',
			'7,918 ft (2,413 m)',
			'19,341 ft (5,895 m)',
			'29,029 ft (8,847 m)',
		],
		correctIndex: 3,
	},
	{
		question: 'When did The Avengers come out?',
		answers: ['May 2, 2008', 'May 4, 2012', 'May 3, 2013', 'April 4, 2014'],
		correctIndex: 1,
	},
	{
		question: 'What is 48,879 in hexidecimal?',
		answers: ['0x18C1', '0xBEEF', '0xDEAD', '0x12D591'],
		correctIndex: 1,
	},
];

let start = document.getElementById('start');
start.addEventListener('click', function (e) {
	let target = e.currentTarget;
	let parent = target.parentNode.parentNode;
	parent.style.display = 'none';

	let screen = document.getElementsByClassName('screen')[0];
	screen.style.display = 'Flex';
	counter = 0;
	nextQuestion(counter);
});

let counter = 0;
let finalScores = 0;

function nextQuestion() {
	let qsNo = document.getElementById('qsNo');
	qsNo.innerHTML = counter + 1;

	let qsTotal = document.getElementById('qsTotal');
	qsTotal.innerHTML = Questions.length;

	let qsStat = document.getElementById('qsStat');
	qsStat.innerHTML = Questions[counter].question;

	let c1 = document.getElementById('c1');
	c1.innerHTML = Questions[counter].answers[1];

	let c2 = document.getElementById('c2');
	c2.innerHTML = Questions[counter].answers[2];

	let c3 = document.getElementById('c3');
	c3.innerHTML = Questions[counter].answers[3];

	let answer = Questions[counter].correctIndex;
}

let next = document.getElementById('next');
next.addEventListener('click', (e) => {
	if (counter < Questions.length - 2) {
		counter++;
		nextQuestion(counter);
	} else if (counter < Questions.length - 1) {
		counter++;
		nextQuestion(counter);

		let target = e.currentTarget;
		target.innerHTML = 'Finish';
		getScore();
	}
});

function getScore() {
	let next = document.getElementById('next');
	next.innerHTML = 'Next';

	let scoreScreen = document.getElementsByClassName('score')[0];
	scoreScreen.style.display = 'flex';

	let screen = document.getElementsByClassName('screen')[0];
	screen.style.display = 'none';

	let totalScore = document.getElementById('totalScores');
	totalScore.innerHTML = Questions.length;

	console.log(Questions.length);

	let retakeBut = document.getElementById('retake');
	retakeBut.addEventListener('click', retakeQuiz);
}

function retakeQuiz() {
	let scoreScreen = document.getElementsByClassName('score')[0];
	scoreScreen.style.display = 'none';

	let start = document.getElementsByClassName('start')[0];
	start.style.display = 'flex';
}
