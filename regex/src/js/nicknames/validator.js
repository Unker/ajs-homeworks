export default class Validator {
  validateUsername(username) {
    // Допустимы только латинские буквы, символы тире -, подчёркивания _ и цифры (0-9)
    const symbolRegex = /^[a-zA-Z0-9_-]+$/;
    // Имя не должно содержать подряд более трёх цифр
    const consecutiveDigitsRegex = /[0-9]{4}/;
    // Имя не должно начинаться и заканчиваться цифрами, 
    // символами подчёркивания или тире.
    const startsOrEndsWithSymbolRegex = /^[0-9_-]|[0-9_-]$/;

    if (!symbolRegex.test(username)) {
      return false;
    }

    if (consecutiveDigitsRegex.test(username)) {
      return false;
    }

    if (startsOrEndsWithSymbolRegex.test(username)) {
      return false;
    }

    return true;

  }
}