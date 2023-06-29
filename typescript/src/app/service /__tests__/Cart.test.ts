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

    const items = cart.items;

    expect(items).toHaveLength(2);
    expect(items).toEqual(expect.arrayContaining([item1, item2]));

    // Modifying the returned items array should not affect the cart
    items.pop();

    expect(cart.items).toHaveLength(2);
  });
});
