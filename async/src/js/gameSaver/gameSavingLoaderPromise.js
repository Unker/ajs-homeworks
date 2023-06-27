import read from './reader';
import json from './parser';
import GameSaving from './GameSaving';

export default class GameSavingLoaderPromise {
  static load() {
    return read()
      .then((data) => json(data))
      .then((jsonData) => new GameSaving(JSON.parse(jsonData)))
      .catch(new Error('Failed to load game saving'));
  }
}
