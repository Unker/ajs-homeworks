import Settings from '../settings';

describe('Settings', () => {
  let settings;

  beforeEach(() => {
    settings = new Settings();
  });

  test('должен возвращать текущие настройки, объединенные с настройками по умолчанию', () => {
    settings.set('music', 'pop');
    settings.set('difficulty', 'hard');

    const expectedSettings = new Map([
      ['theme', 'dark'],
      ['music', 'pop'],
      ['difficulty', 'hard'],
    ]);

    expect(settings.get()).toEqual(expectedSettings);
  });

  test('должен возвращать только настройки по умолчанию, если пользовательские настройки не установлены', () => {
    const expectedSettings = new Map([
      ['theme', 'dark'],
      ['music', 'trance'],
      ['difficulty', 'easy'],
    ]);

    expect(settings.get()).toEqual(expectedSettings);
  });
});
