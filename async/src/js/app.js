import GameSavingLoader from './gameSaver/gameSavingLoader';

GameSavingLoader.load().then((saving) => {
  // saving объект класса GameSaving
  console.log(saving);
}, (error) => {
  console.error(error);
});
