import Cart from '../Cart';
import Movie, { Genre, Countries } from '../../domain/Movie';

describe('Cart', () => {
  let cart: Cart;
  let movie: Movie;

  beforeEach(() => {
    cart = new Cart();
    movie = new Movie(
      1,
      'Movie 1',
      10,
      2012,
      [Countries.usa, Countries.usa, Countries.russuia],
      'the best movie',
      [Genre.scienceFiction, Genre.adventure, Genre.adventure],
      137,
    );
  });

  it('should add a movie to the cart', () => {
    cart.add(movie);
    expect(cart.items).toContain(movie);
  });
});
