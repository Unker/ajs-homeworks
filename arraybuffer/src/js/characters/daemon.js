import Character from './character';
import { AttackCalculatorMixin } from './AttackCalculator';

export default class Daemon extends AttackCalculatorMixin(Character) {
  constructor(name) {
    super(name, 'Daemon');
    this.attack = 10;
    this.defence = 40;
    this.stoned = false;
    this.distance = 1;
  }
}
