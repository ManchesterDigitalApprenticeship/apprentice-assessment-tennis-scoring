angular.module('tennis.service', []).factory('tennisService', tennisService);

function tennisService() {

    var player1Score = 0, player2Score = 0;

    return {
        getScore: getScore,
        scorePlayer1: scorePlayer1,
        scorePlayer2: scorePlayer2,
        reset: reset
    };

    // Produces the score line shown on the page
    function getScore() {
        if (isWon()) {
            return getWinningPlayer() + " wins";
        }
        return "player 1: " + player1Score + " - player 2: " + player2Score;
    }

    // Returns true or false if the game is won or not
    function isWon() {
      var difference = player1Score - player2Score;
      if (difference < 0) {
          difference *= -1;
      }
      return difference >= 2 && (player1Score > 3 || player2Score > 3);
   }

    // Works out which player has won the game 
    function getWinningPlayer() {
        if (player1Score > player2Score) {
            return "player 1";
        }
        return "player 2";
    }

    // Triggered when the player 1 score button is clicked
    function scorePlayer1() {
         player1Score++;
    }

    // Triggered when the player 2 score button is clicked
    function scorePlayer2() {
         player2Score++;
    }

    // Resets player scores
    function reset() {
        player1Score = 0;
        player2Score = 0;
    }
}
