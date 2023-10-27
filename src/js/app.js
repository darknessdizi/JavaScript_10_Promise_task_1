import GameSavingLoader from './game-saving-loader';

// TODO: write your code here
console.log('Работает App.js (начало)');

GameSavingLoader.load().then((saving) => {
  console.log('Загруженный объект:', saving);
}, (error) => {
  console.log('Ошибка:', error);
});

console.log('Работает App.js (конец)');
