import getBuffer from '../getBuffer';
import ArrayBufferConverter from '../arrayBufferConverter';

describe('ArrayBufferConverter', () => {
  let arrayBufferConverter;

  beforeEach(() => {
    arrayBufferConverter = new ArrayBufferConverter();
  });

  it('should load data into the array buffer', () => {
    const buffer = getBuffer();
    arrayBufferConverter.load(buffer);

    expect(arrayBufferConverter.buffer).toEqual(buffer);
  });

  it('should convert array buffer to string', () => {
    const expectedString = '{"data":{"user":{"id":1,"name":"Hitman","level":10}}}';
    const buffer = getBuffer();
    arrayBufferConverter.load(buffer);
    const result = arrayBufferConverter.toString();

    expect(result).toEqual(expectedString);
  });

  test('should throw error when the buffer is empty', () => {
    expect(() => {
      arrayBufferConverter.toString();
    }).toThrow('ArrayBuffer is not loaded.');
  });
});
