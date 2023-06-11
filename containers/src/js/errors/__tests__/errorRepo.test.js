import ErrorRepository from '../errorRepo';

describe('ErrorRepository', () => {
  let errorRepo;

  beforeEach(() => {
    errorRepo = new ErrorRepository();
  });

  test('должен возвращать текст ошибки по коду', () => {
    errorRepo.addError(1, 'Ошибка 1: Неправильное имя пользователя');
    errorRepo.addError(2, 'Ошибка 2: Неверный пароль');

    expect(errorRepo.translate(1)).toBe('Ошибка 1: Неправильное имя пользователя');
    expect(errorRepo.translate(2)).toBe('Ошибка 2: Неверный пароль');
  });

  test('должен возвращать "Unknown error" для несуществующего кода', () => {
    expect(errorRepo.translate(99)).toBe('Unknown error');
  });
});
