function computerPlay(){ //Randomly picks computer's choice
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
function game(){
	let playerScore = 0;
	let computerScore = 0;

	for(let i = 0; i < 5; i++){
		result = playRound(playerChoice(), computerPlay());
		if( result  == 'W'){
			playerScore++;
			document.write('You won a round! \n');
		}
		else if (result == 'Tie'){
			document.write('Tie');
		}
		else{
			computerScore++;
			document.write('You lost a round \n');
		}
	}

	if(playerScore > computerScore)
		return 'You win!'
	else
		return 'You lost!'
}

document.write(game());