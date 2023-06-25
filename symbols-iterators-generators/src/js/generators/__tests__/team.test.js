import Team from '../team';
import Character from '../../characters/character';
import Daemon from '../../characters/daemon';

describe('Team', () => {
  let team;

  beforeEach(() => {
    team = new Team();
  });

  test('should create an empty team', () => {
    expect(team.characters).toEqual([]);
  });

  test('should add a character to the team', () => {
    const character = new Character('Mag', 'Magician');
    team.addCharacter(character);
    expect(team.characters).toContain(character);
  });

  test('should throw an error when adding an invalid character', () => {
    expect(() => {
      team.addCharacter('InvalidCharacter');
    }).toThrow('Invalid character. Only instances of Character class can be added.');
  });

  test('should iterate over the team characters', () => {
    const character1 = new Character('Gendalf', 'Magician');
    const character2 = new Character('Ivan', 'Undead');
    const character3 = new Daemon('Lucifer');
    team.addCharacter(character1);
    team.addCharacter(character2);
    team.addCharacter(character3);

    const iterator = team[Symbol.iterator]();
    expect(iterator.next().value).toEqual(character1);
    expect(iterator.next().value).toEqual(character2);
    expect(iterator.next().value).toEqual(character3);
    expect(iterator.next().done).toBe(true);
  });
});
