import Movie, { Genre, Countries } from '../Movie';

describe('Movie class', () => {
  const movie: Movie = new Movie(
    1,
    'Movie 1',
    10,
    2012,
    [Countries.usa, Countries.usa, Countries.russuia],
    'the best movie',
    [Genre.scienceFiction, Genre.adventure, Genre.adventure],
    137
  );

  it('should return correct movie information', () => {
    const movieInfo = movie.getInfo();

    expect(movieInfo).toEqual({
      year: 2012,
      countries: "США, Россия",
      slogan: 'the best movie',
      genres: "научная фантастика, фильм о приключениях",
      duration: '137 мин./02:17',
    });
  });
});
