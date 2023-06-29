import Cart from '../Cart';
import Buyable from '../../domain/Buyable';

describe('Cart', () => {
  let cart: Cart;

  beforeEach(() => {
    cart = new Cart();
  });

  it('should add an item to the cart', () => {
    const item: Buyable = {
      id: 1,
      name: 'Product 1',
      price: 10,
    };

    cart.add(item);

    expect(cart.items).toHaveLength(1);
    expect(cart.items[0]).toEqual(item);
  });

  it('should return a copy of items in the cart', () => {
    const item1: Buyable = {
      id: 1,
      name: 'Product 1',
      price: 10,
    };

    const item2: Buyable = {
      id: 2,
      name: 'Product 2',
      price: 20,
    };

    cart.add(item1);
    cart.add(item2);

    const itemsCart = cart.items;

    expect(itemsCart).toHaveLength(2);
    expect(itemsCart).toEqual(expect.arrayContaining([item1, item2]));

    // Modifying the returned items array should not affect the cart
    itemsCart.pop();

    expect(cart.items).toHaveLength(2);
  });

  describe('remove', () => {
    test('should remove an item from the cart', () => {
      const item1 = { id: 10, name: 'Item 1', price: 10 };
      cart.add(item1);
      const item2 = { id: 20, name: 'Item 1', price: 10 };
      cart.add(item2);
      cart.remove(item1.id);
      expect(cart.items).not.toContain(item1);
    });

    test('should not remove any item if the provided id does not exist', () => {
      const item = { id: 1, name: 'Item 1', price: 10 };
      cart.add(item);
      cart.remove(999);
      expect(cart.items).toContain(item);
    });
  });

  describe('getTotalCost', () => {
    test('should return 0 for an empty cart', () => {
      expect(cart.getTotalCost()).toBe(0);
    });

    test('should return the total cost of items in the cart', () => {
      const item1 = { id: 1, name: 'Item 1', price: 10 };
      const item2 = { id: 2, name: 'Item 2', price: 20 };
      const item3 = { id: 3, name: 'Item 3', price: 30 };
      cart.add(item1);
      cart.add(item2);
      cart.add(item3);
      expect(cart.getTotalCost()).toBe(60);
    });
  });

  describe('getTotalCostWithDiscount', () => {
    test('should throw an error if discount is less than or equal to 0', () => {
      expect(() => cart.getTotalCostWithDiscount(0)).toThrow(
        'Discount should be greater than 0 and less than 1.',
      );
    });

    test('should throw an error if discount is greater than or equal to 1', () => {
      expect(() => cart.getTotalCostWithDiscount(1)).toThrow(
        'Discount should be greater than 0 and less than 1.',
      );
    });

    test('should return the total cost with discount applied', () => {
      const item1 = { id: 1, name: 'Item 1', price: 10 };
      const item2 = { id: 2, name: 'Item 2', price: 20 };
      const item3 = { id: 3, name: 'Item 3', price: 30 };
      cart.add(item1);
      cart.add(item2);
      cart.add(item3);
      expect(cart.getTotalCostWithDiscount(0.2)).toBe(48);
    });
  });
});
