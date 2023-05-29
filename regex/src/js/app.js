import Validator from './nicknames/validator';

/* eslint-disable no-console */
const nameValidator = new Validator();

const names = ['name', 'level', '11111', 'aaaafds', 'health'];

names.forEach(name => {
  const result = nameValidator.validateUsername(name)
  console.log(name, result);
});
