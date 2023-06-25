import Character from '../characters/character';

export default class Team {
  constructor() {
    this.characters = [];
  }

  // Добавление персонажа в команду
  addCharacter(character) {
    if (!(character instanceof Character)) {
      throw new Error('Invalid character. Only instances of Character class can be added.');
    }
    this.characters.push(character);
  }

  // Реализация генератора
  * [Symbol.iterator]() {
    for (let i = 0; i < this.characters.length; i++) {
      yield this.characters[i];
    }
  }
}
