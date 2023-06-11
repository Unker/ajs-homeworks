import Team from '../team';
import Bowman from '../characters/bowman';
import Swordsman from '../characters/swordsman';

describe('Team', () => {
  let team;
  let character1;
  let character2;
  let character3;

  beforeEach(() => {
    team = new Team();
    // character1 = new Character('Лучник', 'Bowman');
    // character2 = new Character('Персонаж 2');
    // character3 = new Character('Персонаж 3');
    character1 = new Bowman('Лучник');
    character2 = new Swordsman('Мечник');
    character3 = new Bowman('Лучник');
  });

  test('должен добавлять персонажа в команду', () => {
    team.add(character1);
    expect(team.members.size).toBe(1);
  });

  test('должен выдать ошибку при добавлении персонажа не из класса Character', () => {
    expect(() => {
      team.add(new Array([1, 2]));
    }).toThrow('Объект не принадлежит классу Character');
  });

  test('не должен добавлять дублирующихся персонажей', () => {
    team.add(character1);
    team.add(character2);
    // Дубликат, не должен быть добавлен
    expect(() => {
      team.add(character1);
    }).toThrow('Персонаж уже находится в команде');
    expect(team.members.size).toBe(2);
    team.add(character3); // А это уже не дублекат, а новый персонаж
    expect(team.members.size).toBe(3);
  });

  test('должен добавлять произвольное количество персонажей', () => {
    team.addAll(character1, character2, character3, character1);
    expect(team.members.size).toBe(3);
  });

  test('должен конвертировать Set в массив', () => {
    team.addAll(character1, character2, character3);
    const array = team.toArray();
    expect(array).toEqual(
      expect.arrayContaining([
        character1,
        character2,
        character3,
      ]),
    );
  });
});
