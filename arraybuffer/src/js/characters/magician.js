import Character from './character';
import { AttackCalculatorMixin } from './AttackCalculator';

export default class Magician extends AttackCalculatorMixin(Character) {

  constructor(name) {
    super(name, 'Magician');
    this.attack = 10;
    this.defence = 40;
    this.stoned = false;
    this.distance = 1;
  }
}
