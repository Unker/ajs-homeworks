const Game = require('./game').default;
const { GameSavingData, readGameSaving: loadGame, writeGameSaving: saveGame } = require('./game');

console.log('app worked');

const game = new Game();
game.start();
