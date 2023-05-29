export default class Validator {
  // Допустимы только латинские буквы, символы тире -, подчёркивания _ и цифры (0-9)
  static #symbolsRegex = /^[a-zA-Z0-9_-]+$/;

  // Имя не должно содержать подряд более трёх цифр
  static #consecutiveDigitsRegex = /[0-9]{4}/;

  // Имя не должно начинаться и заканчиваться цифрами,
  // символами подчёркивания или тире.
  static #startsOrEndsWithSymbolRegex = /^[0-9_-]|[0-9_-]$/;

  static validateUsername(username) {
    if (!Validator.#symbolsRegex.test(username)) {
      return false;
    }

    if (Validator.#consecutiveDigitsRegex.test(username)) {
      return false;
    }

    if (Validator.#startsOrEndsWithSymbolRegex.test(username)) {
      return false;
    }

    return true;
  }
}
