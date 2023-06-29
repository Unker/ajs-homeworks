import Buyable from './Buyable';

export enum Genre {
  romanceComedy = 'романтическая комедия',
  scienceFiction = 'научная фантастика',
  horror = 'фильм ужасов',
  documentary = 'документальный фильм',
  comedy = 'комедия',
  adventure = 'фильм о приключениях',
}

export enum Countries {
  russuia = 'Россия',
  usa = 'США',
  canada = 'Канада',
}

export default class Movie implements Buyable {
  private countries: Set<Countries>;

  private genres: Set<Genre>;

  constructor(
    readonly id: number,
    readonly name: string,
    readonly price: number,
    private year: number,
    countries: Countries[],
    private slogan: string,
    genres: Genre[],
    private durationInMinutes: number,
  ) {
    this.year = year;
    this.countries = new Set(countries);
    this.slogan = slogan;
    this.genres = new Set(genres);
    this.durationInMinutes = durationInMinutes;
  }

  public getInfo(): Record<string, string | number | string[] | Set<Genre> | Set<Countries>> {
    return {
      year: this.year,
      countries: this.countries,
      slogan: this.slogan,
      genres: this.genres,
      duration: this.formatDuration(),
    };
  }

  private formatDuration(): string {
    const hours = Math.floor(this.durationInMinutes / 60);
    const minutes = this.durationInMinutes % 60;
    return `${this.durationInMinutes} мин./${Movie.padZero(hours)}:${Movie.padZero(minutes)}`;
  }

  private static padZero(value: number): string {
    return value.toString().padStart(2, '0');
  }
}
