// Fish for Brainrots Game Logic

class FishForBrainrots {
    constructor() {
        this.brainrots = 0; // Amount of brainrots collected
        this.money = 0; // In-game currency
        this.isFishing = false; // Is the player currently fishing?
        this.offlineEarnings = 0; // Earnings while offline
        this.persistentState = this.loadState(); // Load saved game state
    }

    startFishing() {
        this.isFishing = true;
        console.log("Started fishing for brainrots!");
        this.fishForBrainrots();
    }

    fishForBrainrots() {
        const fishingInterval = setInterval(() => {
            if (!this.isFishing) {
                clearInterval(fishingInterval);
                console.log("Stopped fishing.");
                return;
            }
            const caughtBrainrot = Math.floor(Math.random() * 10) + 1; // Random catch
            this.brainrots += caughtBrainrot;
            this.money += caughtBrainrot * 2; // Each brainrot gives 2 money
            console.log(`Caught ${caughtBrainrot} brainrots! Total brainrots: ${this.brainrots}, Total money: ${this.money}`);
        }, 1000); // Fish every second
    }

    stopFishing() {
        this.isFishing = false;
    }

    earnWhileOffline(hours) {
        const earnings = hours * 5; // Earn 5 money per hour
        this.offlineEarnings += earnings;
        this.money += earnings;
        console.log(`Earned ${earnings} money while offline!`);
    }

    saveState() {
        const state = {
            brainrots: this.brainrots,
            money: this.money,
            offlineEarnings: this.offlineEarnings
        };
        localStorage.setItem('gameState', JSON.stringify(state));
        console.log("Game state saved.");
    }

    loadState() {
        const state = JSON.parse(localStorage.getItem('gameState'));
        if (state) {
            this.brainrots = state.brainrots;
            this.money = state.money;
            this.offlineEarnings = state.offlineEarnings;
            console.log("Game state loaded.");
        } else {
            console.log("No saved game state found.");
        }
    }

    resetGame() {
        this.brainrots = 0;
        this.money = 0;
        this.offlineEarnings = 0;
        this.saveState();
        console.log("Game has been reset.");
    }
}

// Example usage
const game = new FishForBrainrots();
game.startFishing();
