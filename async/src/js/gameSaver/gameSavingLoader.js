import read from './reader';
import json from './parser';
import GameSaving from './GameSaving';

export default class GameSavingLoader {
  static async load() {
    try {
      const data = await read();
      const jsonData = await json(data);
      const gameSaving = new GameSaving(JSON.parse(jsonData));
      return gameSaving;
    } catch (error) {
      throw new Error('Failed to load game saving');
    }
  }
}
