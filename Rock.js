
/*

function computerPlay randomly returns 'Rock','Paper','Scissors' from array


array possibleOptions contains items 'Rock', 'Paper', 'Scissors'
possibleOptions

function playRound plays a single round of Rock paper scissors





If user selection beats computer selection, return 'SOandSo beats SoandSo, you win!'



else if computer selection beats user selection, 'return SoandSo beats SoandSo, you lose'.



function playRound plays a single round of Rock paper scissors.
            /*

            else if playerSelection equals rock and computerSelection equals paper return 'You Lose! Paper beats Rock'

            else if playerSelection equals paper and computerSelection equals rock return 'You Win! Paper beats Rock'

            else if playerSelection equals paper and computerSelection equals scissors return 'You lose! Scissors beats Paper'

            else if playerSelection equals scissors and computerSelection equals paper return 'You Win! Scissors beats Paper'

            else if playerSelection equals Scissors and computerSelection equals rock return 'You Lose! Rock beats Scissors'

            else if playerSelection equals rock and computerSelection equals scissors return 'You Win! Rock beats Scissors'

            else if playerSelection equals rock and computerSelection equals rock return 'Draw! Rock doesn't beat rock'

            else if playerSelection equals paper and computerSelection equals paper return 'Draw! Paper doesn't beat Paper'

            else if playerSelection equals scissors and computerSelection equals scissors return 'Draw! scissors doesn't beat scissors'

function game plays five rounds of playRound




array possibleOptions has options 'Rock', 'Paper', 'Scissors'
            */




    /*

    function computerPlay randomly returns 'Rock','Paper','Scissors' from array
    */

    let playerScore = parseInt(0);
    let computerScore = parseInt(0);
    let win = "You win"
    let lose = "You lose"
    let tie = "It is a tie"

     

        function computerPlay(possibleOptions){
            return randomOption;

        }



        var possibleOptions = ['Rock','Paper','Scissors'];


        const randomOption = possibleOptions[Math.floor(Math.random() * possibleOptions.length)]; 



        function  playRound(playerSelection, computerSeletion) {

            playerSelection = playerSelection.toLowerCase()
        computerSelection = computerSelection.toLowerCase()


           if (playerSelection === computerSelection) {
                alert('The result is a tie')
                return 'tie'


        }

            else  if (playerSelection === 'rock' && computerSelection === 'paper') {
            alert('You lost! paper beats rock')
             computerScore++;
            return 'lose'

        }

        else if (playerSelection === 'paper' && computerSelection === 'rock') {
            alert('You Win! Paper beats Rock')
            playerScore++;
            return 'win'
        }

        else if (playerSelection === 'paper' && computerSelection === 'scissors') {
            alert('You lost! Scissors beats Paper')
            computerScore++;
            return 'lose'
        }



        else if (playerSelection === 'scissors' && computerSelection === 'paper') {
               alert('You win! Scissors beats Paper')
               playerScore++;
               return 'win'

        }

        else if (playerSelection === 'scissors' && computerSelection === 'rock') {
               alert('You lose! Rock beats Scissors')
               computerScore++;
               return 'lose'

        }

        else if (playerSelection === 'rock' && computerSelection === 'scissors') {
               alert('You win! Rock beats Scissors')
               playerScore++;
               return 'win'
        }

        }


        let playerSelection = prompt("rock, paper or scissors?")
        var computerSelection = computerPlay(randomOption)
        playRound(playerSelection, computerSelection)

    /*

    function game calls playRound 5 times

    function game keeps score

    function game reports loser/winner at the end

    console.log displays results of each round and the winner at the end


    */


    for(var i=0;i<5;i++){
      let playerSelection = prompt("Rock, Paper, Or, Scissors?");
      const computerSelection = computerPlay(randomOption)
      console.log(playRound(playerSelection, computerSelection))
      console.log("your score = " + playerScore);
      console.log("Computer's score = " + computerScore);
    }


