import read from './reader';
import json from './parser';
import GameSaving from './game-saving';

export default class GameSavingLoader {
  static load() {
    return read()
      .then((response) => json(response))
      .then((response) => new GameSaving(response));
  }
}
