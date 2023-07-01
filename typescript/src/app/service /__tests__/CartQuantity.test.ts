import Buyable from '../../domain/Buyable';
import Movie, { Countries, Genre } from '../../domain/Movie';
import Phone from '../../domain/Phone';
import Cart from '../CartQuantity';

describe('Cart', () => {
  let cart: Cart;

  beforeEach(() => {
    cart = new Cart();
  });

  test('should add item to the cart', () => {
    const item = new Movie(
      123456,
      'Pacman',
      100,
      2012,
      [Countries.canada],
      'best movie',
      [Genre.horror, Genre.comedy, Genre.comedy],
      137,
    );

    cart.add(item);

    const expectedItem = {
      id: 123456,
      name: 'Pacman',
      price: 100,
      year: 2012,
      slogan: 'best movie',
      durationInMinutes: 137,
      countries: new Set(['Канада']),
      genres: new Set(['фильм ужасов', 'комедия']),
    };

    expect(cart.items.length).toBe(1);
    expect(cart.items).toContain(item);
    expect(cart.items[0]).toEqual(expectedItem);

    cart.add(item);
    expect(cart.items.length).toBe(1);
  });

  test('should increase quantity for non-unique item', () => {
    const item = new Phone(
      123,
      'iPhone',
      1000,
      'Apple',
      '11',
    );

    cart.add(item);
    cart.add(item);

    const expectedItem = {
      id: 123,
      name: 'iPhone',
      price: 1000,
      manufacturer: 'Apple',
      model: '11',
    };

    expect(cart.items.length).toBe(1);
    expect(cart.getQuantity(item.id)).toBe(2);
    expect(cart.items[0]).toEqual(expectedItem);
  });

  test('should remove item from the cart', () => {
    const item = new Phone(
      123,
      'iPhone',
      1000,
      'Apple',
      '11',
    );

    cart.add(item);
    cart.add(item);
    expect(cart.getQuantity(item.id)).toBe(2);

    cart.remove(item.id);
    expect(cart.getQuantity(item.id)).toBe(1);

    cart.remove(item.id);
    expect(cart.getQuantity(item.id)).toBe(0);
  });

  test('should delete item from the cart', () => {
    const item = new Phone(
      123,
      'iPhone',
      1000,
      'Apple',
      '11',
    );

    cart.add(item);
    expect(cart.items.length).toBe(1);

    cart.delete(item.id);
    expect(cart.items.length).toBe(0);
  });

  test('should calculate total cost of items', () => {
    const item1 = new Phone(
      123,
      'iPhone',
      1000,
      'Apple',
      '11',
    );
    const item2 = new Movie(
      123456,
      'Pacman',
      100,
      2012,
      [Countries.canada],
      'best movie',
      [Genre.horror, Genre.comedy, Genre.comedy],
      137,
    );

    cart.add(item1);
    cart.add(item1);
    cart.add(item2);

    const expectedTotalCost = 1000 * 2 + 100;
    const totalCost = cart.getTotalCost();

    expect(totalCost).toBe(expectedTotalCost);
  });

  test('should calculate total cost with discount', () => {
    const item = new Phone(
      123,
      'iPhone',
      1000,
      'Apple',
      '11',
    );
    const discount = 0.2;

    cart.add(item);
    cart.add(item);

    const expectedTotalCost = 1000 * 2 * (1 - discount);
    const totalCostWithDiscount = cart.getTotalCostWithDiscount(discount);

    expect(totalCostWithDiscount).toBe(expectedTotalCost);
  });

  test('should throw error for invalid discount', () => {
    const item: Buyable = {
      id: 1,
      name: 'Movie',
      price: 10,
    };
    const invalidDiscount = 1.5;

    cart.add(item);

    expect(() => cart.getTotalCostWithDiscount(invalidDiscount)).toThrow(
      'Discount should be greater than 0 and less than 1.',
    );
  });
});
