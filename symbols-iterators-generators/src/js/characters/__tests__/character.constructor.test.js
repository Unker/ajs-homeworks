import Bowman from '../bowman';
import Swordsman from '../swordsman';
import Magician from '../magician';
import Daemon from '../daemon';
import Undead from '../undead';
import Zombie from '../zombie';

describe('Character classes', () => {
  /* eslint-disable object-curly-newline */
  const classData = [
    { Class: Bowman, type: 'Bowman', attack: 25, defence: 25 },
    { Class: Swordsman, type: 'Swordsman', attack: 40, defence: 10 },
    { Class: Magician, type: 'Magician', attack: 10, defence: 40 },
    { Class: Daemon, type: 'Daemon', attack: 10, defence: 40 },
    { Class: Undead, type: 'Undead', attack: 25, defence: 25 },
    { Class: Zombie, type: 'Zombie', attack: 40, defence: 10 },
  ];
  /* eslint-enable object-curly-newline */

  // eslint-disable-next-line object-curly-newline
  it.each(classData)('should create %p instance with correct type, attack, and defence', ({ Class, type, attack, defence }) => {
    const character = new Class('Персонаж');

    expect(character.type).toBe(type);
    expect(character.attack).toBe(attack);
    expect(character.defence).toBe(defence);
  });
});
