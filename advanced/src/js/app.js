import orderByProps from './tablets/order';

/* eslint-disable no-console */
const obj = { name: 'мечник', health: 10, level: 2, attack: 80, defence: 40 };
const order = ['name', 'level', 'health'];

const result = orderByProps(obj, order);
console.log(result);
