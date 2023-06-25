import Daemon from '../daemon';
import Magician from '../magician';

describe('AttackCalculator', () => {
  let daemon;
  let magician;

  beforeEach(() => {
    daemon = new Daemon('Lucifer');
    magician = new Magician('Gendalf');
  });

  test('should initialize with default values', () => {
    expect(daemon.name).toBe('Lucifer');
    expect(daemon.type).toBe('Daemon');
    expect(daemon.attack).toBe(10);
    expect(daemon.defence).toBe(40);
    expect(daemon.stoned).toBe(false);
    expect(daemon.distance).toBe(1);

    expect(magician.name).toBe('Gendalf');
    expect(magician.type).toBe('Magician');
    expect(magician.attack).toBe(10);
    expect(magician.defence).toBe(40);
    expect(magician.stoned).toBe(false);
    expect(magician.distance).toBe(1);
  });

  test('should calculate attack correctly', () => {
    daemon.attack = 100;
    daemon.distance = 1;
    expect(daemon.attack).toBe(100);
    expect(magician.attack).toBe(10);

    daemon.distance = 2;
    expect(daemon.attack).toBe(90);
    expect(magician.attack).toBe(10);

    daemon.distance = 5;
    expect(daemon.attack).toBe(60);

    daemon.stoned = true;
    expect(daemon.attack).toBe(48);
    expect(magician.attack).toBe(10);

    daemon.distance = 10;
    expect(daemon.attack).toBe(0);
  });

  test('should throw error when setting invalid attack value', () => {
    expect(() => {
      daemon.attack = -10;
    }).toThrow('Invalid attack value. Attack must be a non-negative number.');
  });

  test('should throw error when setting invalid distance value', () => {
    expect(() => {
      daemon.distance = -5;
    }).toThrow('Invalid distance value. Distance must be a non-negative number.');
  });
});
