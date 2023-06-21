import GameSavingLoader from '../gameSavingLoader';

describe('GameSavingLoader', () => {
  test('should load and parse game saving data', async () => {
    const gameSaving = await GameSavingLoader.load();
    expect(gameSaving).toEqual({
      id: expect.any(Number),
      created: expect.any(Number),
      userInfo: {
        id: expect.any(Number),
        name: expect.any(String),
        level: expect.any(Number),
        points: expect.any(Number),
      },
    });
  });
});
