import Validator from "../validator";

describe('Validator', () => {
  let validator = new Validator();

  it('should return false for incorrect syblols', () => {
    expect(validator.validateUsername('us er')).toBe(false);
    expect(validator.validateUsername('us+er')).toBe(false);
    expect(validator.validateUsername('usйer')).toBe(false);
    expect(validator.validateUsername('us\ner')).toBe(false);
  });
  
  it('should return false for a bad beginning of a username', () => {
    expect(validator.validateUsername('-username')).toBe(false);
    expect(validator.validateUsername('_username')).toBe(false);
    expect(validator.validateUsername('123username')).toBe(false);
  });

  it('should return false for bad username ending', () => {
    expect(validator.validateUsername('user-')).toBe(false);
    expect(validator.validateUsername('user_')).toBe(false);
    expect(validator.validateUsername('user123')).toBe(false);
  });
  
  it('should return false for a long sequence of digits', () => {
    expect(validator.validateUsername('us1234er')).toBe(false);
    expect(validator.validateUsername('user_0000aaa')).toBe(false);
  });

  it('should return true for a valid username', () => {
    expect(validator.validateUsername('my_username')).toBe(true);
    expect(validator.validateUsername('another-user')).toBe(true);
    expect(validator.validateUsername('user-----name')).toBe(true);
    expect(validator.validateUsername('user')).toBe(true);
  });
  
});
