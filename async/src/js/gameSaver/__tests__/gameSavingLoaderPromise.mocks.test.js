import GameSavingLoaderPromise from '../gameSavingLoaderPromise';
import read from '../reader';
import json from '../parser';

jest.mock('../reader');
jest.mock('../parser');

describe('GameSavingLoaderPromise', () => {
  beforeEach(() => {
    jest.resetAllMocks();
  });

  test('should load game saving data successfully', async () => {
    const expectedData = {
      id: 1,
      created: 1621436400000,
      userInfo: {
        id: 123,
        name: 'John Doe',
        level: 5,
        points: 1000,
      },
    };

    read.mockResolvedValue('mocked data');
    json.mockResolvedValue(JSON.stringify(expectedData));

    const gameSaving = await GameSavingLoaderPromise.load();

    expect(read).toHaveBeenCalledTimes(1);
    expect(json).toHaveBeenCalledTimes(1);
    expect(json).toHaveBeenCalledWith('mocked data');
    expect(gameSaving).toEqual(expectedData);
  });

  test('should handle error when loading game saving data', async () => {
    const error = new Error('Failed to load game saving');
    read.mockRejectedValue(error);

    await expect(GameSavingLoaderPromise.load()).rejects.toThrowError(new Error('Failed to load game saving'));
    expect(read).toHaveBeenCalledTimes(1);
    expect(json).not.toHaveBeenCalled();
  });
});
