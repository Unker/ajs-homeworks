import GameSavingLoader from './gameSaver/gameSavingLoader';

// цепочки .then().then()
GameSavingLoader.load().then((saving) => {
  // saving объект класса GameSaving
  console.log(saving);
}, (error) => {
  console.error(error);
});

// с использованием async/await
(async () => {
  try {
    const gameSaving = await GameSavingLoader.load();
    console.log(gameSaving);
  } catch (error) {
    console.error(error);
  }
})();
