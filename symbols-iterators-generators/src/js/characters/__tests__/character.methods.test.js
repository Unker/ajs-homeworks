import Character from '../character';
import Bowman from '../bowman';

describe('Character', () => {
  let character;

  beforeEach(() => {
    character = new Bowman('Персонаж');
  });

  it('should increase level and update attack, defence, and health when calling levelUp', () => {
    character.levelUp();

    expect(character.level).toBe(2);
    expect(character.attack).toBe(30);
    expect(character.defence).toBe(30);
    expect(character.health).toBe(100);
  });

  it('should reduce health when calling damage', () => {
    character.damage(20);

    expect(character.health).toBe(85);
  });

  it('should set health to 0 when damage exceeds current health', () => {
    character.damage(200);

    expect(character.health).toBe(0);
  });

  it('should throw an error when trying to levelUp a dead character', () => {
    character.health = 0;

    expect(() => {
      character.levelUp();
    }).toThrow('Нельзя повысить уровень умершего персонажа.');
  });

  it('should throw an error when trying to damage a dead character', () => {
    character.health = 0;

    expect(() => {
      character.damage(10);
    }).toThrow('Нельзя нанести урон умершему персонажу.');
  });

  it('should throw an error when providing invalid name', () => {
    expect(() => {
      // eslint-disable-next-line no-new
      new Bowman('A');
    }).toThrow('Некорректное имя. Допустимая длина имени: от 2 до 10 символов.');

    expect(() => {
      // eslint-disable-next-line no-new
      new Bowman('VeryLongName');
    }).toThrow('Некорректное имя. Допустимая длина имени: от 2 до 10 символов.');
  });

  it('should throw an error when providing invalid type', () => {
    expect(() => {
      // eslint-disable-next-line no-new
      new Character('Персонаж', 'InvalidType');
    }).toThrow('Некорректный тип персонажа.');
  });

  it('should return available types', () => {
    const types = Character.getAvailableTypes().sort();

    expect(types).toStrictEqual(['Bowman', 'Swordsman', 'Magician', 'Daemon', 'Undead', 'Zombie'].sort());
  });
});
