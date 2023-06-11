export default class Settings {
  constructor() {
    this.defaultSettings = new Map([
      ['theme', 'dark'],
      ['music', 'trance'],
      ['difficulty', 'easy'],
    ]);
    this.userSettings = new Map();
  }

  set(name, value) {
    this.userSettings.set(name, value);
  }

  get() {
    return new Map([...this.defaultSettings, ...this.userSettings]);
  }
}
