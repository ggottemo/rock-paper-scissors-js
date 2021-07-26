const div = document.createElement('div');
const CHOICES = ['ROCK', 'PAPER', 'SCISSORS'];

var playerScore = 0;
var computerScore = 0;

for ( let i = 0; i < 3; i++){ //Adds buttons for each choice to DOM
	let button = document.createElement('button');
	button.textContent = CHOICES[i];
	button.classList.add('choice-btn');
	button.setAttribute('id', CHOICES[i].toLowerCase())
	button.setAttribute('style', 'margin: auto; border: 1px solid black; margin-left: 3vw; cursor: pointer; width: 100px; height:30px; margin-top: 40%;')
	button.addEventListener('click', () => console.log(game(button.getAttribute('id'), computerPlay())));
	div.appendChild(button);
}
const body = document.querySelector('body');
body.appendChild(div);

var scoreDiv = document.createElement('div');
scoreDiv.setAttribute('id', 'score');
body.appendChild(scoreDiv);
//Update Score 
function updateScore(gameResult) {
	switch(gameResult) {
		case 'W':
		playerScore++; break;
		case 'L':
		computerScore++; break;
		case'Tie':
		break;
	}
	let scoreDiv = document.querySelector('#score');
	scoreDiv.setAttribute('style', 'border: 2px solid black; background-color: gray; margin-left: 60%; padding-left: 2vw;');
	
	
	scoreDiv.textContent = `Player Score: '${window.playerScore} ' \n Computer Score: '${window.computerScore}'`;
	
	body.appendChild(scoreDiv);

}


 //Randomly picks computer's choice
function computerPlay(){
	let random = Math.floor(Math.random()* 3)

	switch(random){
		case 0:
		return 'rock';
		break;

		case 1:
		return 'scissors';
		break;

		case 2:
		return 'paper';
		break;
	}

}
//playerChoice
function playerChoice() {
	let isValid = false;
	let input = 'test'
	while(isValid == false){
	input = window.prompt('Rock, Paper, or Scissors?');
	input.toLowerCase();
	
	if (input == 'rock' || input == 'paper' || input == 'scissors')
		isValid = true;
	
	}
	return input;
}

//plays a round an return whether the player wins or loses
function playRound(playerChoice, computerChoice){
	if (playerChoice == computerChoice) {
		return "Tie"
	}
	if (playerChoice == 'rock'){
		if(computerChoice == 'paper')
			return "L"
		else if(computerChoice == 'scissors')
			return 'W'
	}

	else if (playerChoice == 'paper'){
		if(computerChoice == 'rock')
			return 'W'
		else if(computerChoice == 'scissors')
			return 'L'
	}

	else if (playerChoice == 'scissors'){
		if(computerChoice == 'rock')
			return 'L'
		else if(computerChoice == 'paper')
			return 'W'
	}

}

//game - plays 5 rounds and determines a winner.
function game(playerChoice, computerChoice){
	updateScore(playRound(playerChoice, computerChoice));
	victoryDiv = document.createElement('div');
 	
	if (playerScore >= 5 && playerScore > computerScore){
		victoryDiv.textContent = `You won with '${playerScore}' victories.`;
		body.appendChild(victoryDiv);
	}
	if(computerScore >= 5 && computerScore > playerScore){
		victoryDiv.textContent =`You lost with '${computerScore}' losses.`;
		body.appendChild(victoryDiv);
	}

}

