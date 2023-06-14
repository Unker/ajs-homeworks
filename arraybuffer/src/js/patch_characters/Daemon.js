import Character from '../characters/character';

export default class Daemon extends Character {
  constructor(name) {
    super(name, 'Daemon');
    this.attack = 10;
    this.defence = 40;
    this.stoned = false;
    this.distance = 0;
  }

  get stoned() {
    return this._stoned;
  }

  set stoned(value) {
    if (value === false) {
      this._stoned = false;
    } else {
      this._stoned = true;
    }
  }

  get attack() {
    if (this.distance === 0) {
      throw new Error('Invalid distance value. Distance not setted.');
    }

    const distanceAttack = this._attack * (1 - (this.distance - 1) * 0.1);
    const stonedModifier = this.stoned ? Math.log2(this.distance) * 5 : 0;
    const totalAttack = Math.round(distanceAttack - stonedModifier);

    return totalAttack > 0 ? totalAttack : 0;
  }

  set attack(value) {
    if (typeof value === 'number' && value >= 0) {
      this._attack = value;
    } else {
      throw new Error('Invalid attack value. Attack must be a non-negative number.');
    }
  }

  get distance() {
    return this._distance;
  }

  set distance(value) {
    if (typeof value === 'number' && value >= 0) {
      this._distance = value;
    } else {
      throw new Error('Invalid distance value. Distance must be a non-negative number.');
    }
  }
}
