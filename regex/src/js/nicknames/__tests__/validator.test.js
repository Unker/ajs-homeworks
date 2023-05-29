import Validator from '../validator';

describe('Validator', () => {
  it('should return false for incorrect syblols', () => {
    expect(Validator.validateUsername('us er')).toBe(false);
    expect(Validator.validateUsername('us+er')).toBe(false);
    expect(Validator.validateUsername('usйer')).toBe(false);
    expect(Validator.validateUsername('us\ner')).toBe(false);
  });

  it('should return false for a bad beginning of a username', () => {
    expect(Validator.validateUsername('-username')).toBe(false);
    expect(Validator.validateUsername('_username')).toBe(false);
    expect(Validator.validateUsername('123username')).toBe(false);
  });

  it('should return false for bad username ending', () => {
    expect(Validator.validateUsername('user-')).toBe(false);
    expect(Validator.validateUsername('user_')).toBe(false);
    expect(Validator.validateUsername('user123')).toBe(false);
  });

  it('should return false for a long sequence of digits', () => {
    expect(Validator.validateUsername('us1234er')).toBe(false);
    expect(Validator.validateUsername('user_0000aaa')).toBe(false);
  });

  it('should return true for a valid username', () => {
    expect(Validator.validateUsername('my_username')).toBe(true);
    expect(Validator.validateUsername('another-user')).toBe(true);
    expect(Validator.validateUsername('user-----name')).toBe(true);
    expect(Validator.validateUsername('user')).toBe(true);
  });
});
