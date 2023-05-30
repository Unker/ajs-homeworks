import Validator from './nicknames/validator';
import normalizePhoneNumber from './phone/phoneNumber';

/* eslint-disable no-console */
// const nameValidator = new Validator();

const names = ['name', 'level', '11111', 'aaaafds', 'health'];

names.forEach((name) => {
  const result = Validator.validateUsername(name);
  console.log(name, result);
});

const phones = [
  "+12   3	(123)123",
  "123(123)123",
  "(123)123",
  "+123-123123",
  "+1234567890",
  "+123(1234)123",
  "823123123123",
  "123123123a123",
]

phones.forEach((phone) => {
  const result = normalizePhoneNumber(phone);
  console.log(phone, result);
});
