// import functions and grab DOM elements

// let state

// set event listeners 
  // get user input
  // use user input to update state 
  // update DOM to reflect the new state
const userInput = document.getElementById('user-input');
// console.log(userInput);
const submit = document.getElementById('submit');
// console.log(submit);
const answer = document.getElementById('answer');
//console.log(answer);

const answers = [
    'I must rest here a moment',
    'It may be your task to find the Cracks of Doom',
    'He that breaks a thing to find out what it is, has left the path of wisdom.',
    'Deep is the abyss',
    'The treacherous are ever distrustful.',
    'Go in peace',
    'It is wisdom to recognize necessity',
    'All we have to decide is what to do with the time that is given us',
    'Even the very wise cannot see all ends',
    'On the morning of the third day, look to the east'
];

const inputBox = document.getElementById('input-box');
const outputBox = document.getElementById('output-box');
const userQuestion = document.getElementById('user-question');
const reset = document.getElementById('reset');
const ballBackground = document.getElementById('ball-background');


submit.addEventListener('click', () => {
    const question = userInput.value;
    userQuestion.textContent = question;
    inputBox.classList.add('fade-out');
    setTimeout(() => {
        inputBox.classList.add('hidden');
    }, 4800); 
    setTimeout(() => {
        outputBox.classList.add('fade-in');
        outputBox.classList.remove('transparent');
    }, 4801);
    setTimeout(() => {     
        ballBackground.classList.add('shake');
    }, 7799);
    setTimeout(() => {
        answer.classList.add('fade-in');
        answer.classList.remove('transparent');
    }, 8500);
    const answerIndexRandom = Math.floor(Math.random() * answers.length);
    const randomAnswer = answers[answerIndexRandom];
    answer.textContent = randomAnswer;
});

reset.addEventListener('click', () => {
    inputBox.classList.remove('hidden');
    inputBox.classList.remove('fade-out');
    outputBox.classList.remove('fade-in');
    outputBox.classList.add('transparent');
    answer.classList.remove('fade-in');
    answer.classList.add('transparent');
    ballBackground.classList.remove('shake');
});