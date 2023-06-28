import Cart from './service /Cart';
import Book from './domain/Book';
import Movie from './domain/Movie';
import { Countries, Genre } from './domain/Movie';

const cart = new Cart();
console.log(cart.items);

cart.add(new Book(1001, 'War and Piece', 'Leo Tolstoy', 2000, 1225));

console.log(cart.items);

const movie = new Movie(
  123456,
  'Pacman',
  100,
  2012,
  [Countries.canada],
  "best movie",
  [Genre.horror, Genre.comedy, Genre.comedy],
  137
);

console.log(movie.getInfo());
cart.add(movie);

console.log(cart.items);