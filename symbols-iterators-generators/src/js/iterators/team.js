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

  // Реализация итератора
  [Symbol.iterator]() {
    let index = 0;
    const characters = this.characters;

    return {
      next() {
        if (index < characters.length) {
          return { value: characters[index++], done: false };
        }
        return { done: true };
      }
    };
  }
}
