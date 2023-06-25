// Нужно проверять наличие метода [Symbol.iterator] у объекта.
// Если метод есть, то объект соответствует протоколу итерирования.

export default function canIterate(obj) {
  return obj !== null && typeof obj[Symbol.iterator] === 'function';
}
