import Daemon from './patch_characters/reduce_attack';

const daemon = new Daemon('Демон');
console.log(daemon);

daemon.distance = 2;
daemon.attack = 100;
console.log(daemon.attack);
console.log(daemon.stoned);
daemon.stoned = true;
console.log(daemon.stoned);
console.log(daemon.attack);

const daemon2 = new Daemon('Демон');
console.log(daemon2.stoned);
