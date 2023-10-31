import GameSavingLoader from '../game-saving-loader';
import GameSaving from '../game-saving';

jest.setTimeout(15000);

test('Проверка функции GameSavingLoader', (done) => {
  const data = '{"id":9,"created":1546300800,"userInfo":{"id":1,"name":"Hitman","level":10,"points":2000}}';
  expect(GameSavingLoader.load).toBeDefined();
  GameSavingLoader.load().then((response) => {
    expect(response).toEqual(JSON.parse(data));
    expect(response).toBeInstanceOf(GameSaving);
    done();
  });
});
