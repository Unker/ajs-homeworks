import Buyable from '../domain/Buyable';

export default class Cart {
  private _items: Buyable[] = [];

  add(item: Buyable): void {
    this._items.push(item);
  }

  get items(): Buyable[] {
    return [...this._items];
  }

  remove(id: number): void {
    const index = this._items.findIndex(item => item.id === id);
    if (index !== -1) {
      this._items.splice(index, 1);
    }
  }

  getTotalCost(): number {
    return this._items.reduce((total, item) => total + item.price, 0);
  }

  getTotalCostWithDiscount(discount: number): number {
    if (discount <= 0 || discount >= 1) {
      throw new Error('Discount should be greater than 0 and less than 1.');
    }
    return this.getTotalCost() * (1 - discount);
  }
}
