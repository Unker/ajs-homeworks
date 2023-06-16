export const AttackCalculatorMixin = (BaseClass) => {
  return class extends BaseClass {
    constructor(...args) {
      super(...args);
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
      if (typeof value === 'number' && value > 0) {
        this._distance = value;
      } else {
        throw new Error('Invalid distance value. Distance must be a non-negative number.');
      }
    }
  };
}
