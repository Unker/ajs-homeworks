import GameSavingLoader from './gameSaver/gameSavingLoader';
import GameSavingLoaderPromise from './gameSaver/gameSavingLoaderPromise';

// цепочки .then().then()
GameSavingLoaderPromise.load().then((saving) => {
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
