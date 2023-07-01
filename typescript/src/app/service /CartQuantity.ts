import Buyable from '../domain/Buyable';

export enum UniqueClasses {
  Movie = 'Movie',
  Book = 'Book',
}

interface CartItem {
  item: Buyable;
  unique: boolean;
  quantity: number;
}

export default class Cart {
  private _items: Map<number, CartItem> = new Map();

  add(item: Buyable): void {
    if (this._items.has(item.id)) {
      const existingItem = this._items.get(item.id)!;
      if (existingItem.unique) {
        existingItem.quantity = 1;
      } else {
        existingItem.quantity += 1;
      }
    } else {
      const className = item.constructor.name;
      const unique = UniqueClasses[className as keyof typeof UniqueClasses] !== undefined;
      this._items.set(item.id, { item, quantity: 1, unique });
    }
  }

  remove(id: number): void {
    if (this._items.has(id)) {
      const existingItem = this._items.get(id)!;
      existingItem.quantity -= 1;
      if (existingItem.quantity <= 0) {
        this._items.delete(id);
      }
    }
  }

  delete(id: number): void {
    this._items.delete(id);
  }

  get items(): Buyable[] {
    return Array.from(this._items.values(), (item) => item.item);
  }

  getQuantity(id: number): number {
    if (this._items.has(id)) {
      const existingItem = this._items.get(id)!;
      return existingItem.quantity;
    }
    return 0;
  }

  getTotalCost(): number {
    let totalCost = 0;
    for (const { item, quantity } of this._items.values()) {
      totalCost += item.price * quantity;
    }
    return totalCost;
  }

  getTotalCostWithDiscount(discount: number): number {
    if (discount <= 0 || discount >= 1) {
      throw new Error('Discount should be greater than 0 and less than 1.');
    }
    const totalCost = this.getTotalCost();
    return totalCost * (1 - discount);
  }
}
