// Game Logic and Mechanics

class Game {
    constructor() {
        this.players = [];
        this.isRunning = false;
    }

    addPlayer(player) {
        this.players.push(player);
    }

    start() {
        this.isRunning = true;
        console.log('Game started!');
    }

    end() {
        this.isRunning = false;
        console.log('Game ended!');
    }

    update() {
        // Update game state
        if (this.isRunning) {
            console.log('Game is running...');
        }
    }
}

// Example usage:
const game = new Game();
game.addPlayer('Player 1');
game.start();
game.update();