import Team from './iterators/team';
import Character from './characters/character';
import Daemon from './characters/daemon';

const team = new Team();
team.addCharacter(new Character('Mag', 'Magician'));
team.addCharacter(new Character('Ivan', 'Undead'));
team.addCharacter(new Daemon('Deamon'));
// team.addCharacter('InvalidCharacter'); // Вызовет ошибку

for (const character of team) {
  console.log(character);
}
