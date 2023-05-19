import { Bowman, Swordsman, Magician, Daemon, Undead, Zombie } from '../character';

describe('Character classes', () => {
  const classData = [
    { Class: Bowman, type: 'Bowman', attack: 25, defence: 25 },
    { Class: Swordsman, type: 'Swordsman', attack: 40, defence: 10 },
    { Class: Magician, type: 'Magician', attack: 10, defence: 40 },
    { Class: Daemon, type: 'Daemon', attack: 10, defence: 40 },
    { Class: Undead, type: 'Undead', attack: 25, defence: 25 },
    { Class: Zombie, type: 'Zombie', attack: 40, defence: 10 },
  ];

  it.each(classData)('should create %p instance with correct type, attack, and defence', ({ Class, type, attack, defence }) => {
    const character = new Class('Персонаж');

    expect(character.type).toBe(type);
    expect(character.attack).toBe(attack);
    expect(character.defence).toBe(defence);
  });
});