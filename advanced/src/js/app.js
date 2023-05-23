import orderByProps from './tablets/order';
import extractSpecialAttacks from './tablets/destructuring';

/* eslint-disable no-console */
const obj = {
  name: 'мечник', health: 10, level: 2, attack: 80, defence: 40,
};
const order = ['name', 'level', 'health'];

const result = orderByProps(obj, order);
console.log(result);

const character = {
  name: 'Лучник',
  type: 'Bowman',
  health: 50,
  level: 3,
  attack: 40,
  defence: 10,
  special: [
    {
      id: 8,
      name: 'Двойной выстрел',
      icon: 'http://...',
      description: 'Двойной выстрел наносит двойной урон'
    }, 
    {
      id: 9,
      name: 'Нокаутирующий удар',
      icon: 'http://...'
      // <- обратите внимание, описание "засекречено"
    }
  ]	
}

console.log(extractSpecialAttacks(character));
