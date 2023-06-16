import Daemon from './characters/daemon';
import getBuffer from './buffers/getBuffer';
import ArrayBufferConverter from './buffers/arrayBufferConverter';

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

const buffer = getBuffer();
console.log(buffer);
const converter = new ArrayBufferConverter();
converter.load(buffer);
const result = converter.toString();
console.log(result);
