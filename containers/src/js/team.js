import Character from './characters/character';

export default class Team {
  constructor() {
    this.members = new Set();
  }

  add(character) {
    if (!(character instanceof Character)) {
      throw new Error('Объект не принадлежит классу Character');
    }
    if (this.members.has(character)) {
      throw new Error('Персонаж уже находится в команде');
    }
    this.members.add(character);
  }

  addAll(...characters) {
    characters.forEach((character) => {
      this.members.add(character);
    });
  }

  toArray() {
    return Array.from(this.members);
  }
}
