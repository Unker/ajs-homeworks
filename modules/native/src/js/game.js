const Character = require('./domain');

const _default = class Game {
  start() {
    console.log('game started');
  }
};

class GameSavingData {
}

function readGameSaving() {
}

function writeGameSaving() {
}

module.exports._default = _default;
module.exports = {
  GameSavingData,
  readGameSaving,
  writeGameSaving,
};
