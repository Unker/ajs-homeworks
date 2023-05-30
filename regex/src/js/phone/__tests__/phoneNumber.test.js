import normalizePhoneNumber from '../phoneNumber';

describe('normalizePhoneNumber', () => {
  it('normalizePhoneNumber should normalize phone numbers correctly', () => {
    expect(normalizePhoneNumber('8 (927) 000-00-00')).toBe('+79270000000');
    expect(normalizePhoneNumber('+7 960 000 00 00')).toBe('+79600000000');
    expect(normalizePhoneNumber('+86 000 000 0000')).toBe('+860000000000');
    expect(normalizePhoneNumber('+1234567890')).toBe('+1234567890');
    expect(normalizePhoneNumber('+12   3	(123)123')).toBe('+123123123');
    expect(normalizePhoneNumber('+123-123123')).toBe('+123123123');
    expect(normalizePhoneNumber('823123123123')).toBe('+723123123123');
  });
  
  it('normalizePhoneNumber should return null for invalid phone numbers', () => {
    expect(normalizePhoneNumber('abc')).toBe(null);
    expect(normalizePhoneNumber('8 (927) 000-00-a00')).toBe(null);
    expect(normalizePhoneNumber('')).toBe(null);
    expect(normalizePhoneNumber('1234567890123')).toBe(null);
    expect(normalizePhoneNumber('+1234567890123456')).toBe(null);
    expect(normalizePhoneNumber('123(123)123')).toBe(null);
    expect(normalizePhoneNumber('(123)12311')).toBe(null);
    expect(normalizePhoneNumber('+(123)12311')).toBe(null);
  });
});
