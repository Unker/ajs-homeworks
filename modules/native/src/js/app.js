import Game, { GameSavingData, readGameSaving as loadGame, writeGameSaving as saveGame } from './game.js';

console.log('app worked');

const game = new Game();
game.start();
