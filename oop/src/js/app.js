import Character from './characters/character';
import Bowman from './characters/bowman';
import Swordsman from './characters/swordsman';

/* eslint-disable no-console */
const character = new Character('Лучник', 'Bowman');
console.log(character);

const bowman = new Bowman('Лучник');
console.log(bowman);

const swordsman = new Swordsman('Мечник');
console.log(swordsman);
