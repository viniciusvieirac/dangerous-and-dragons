import Fighter, { SimpleFighter } from '../Fighter';
import Battle from './Battle';

export default class PVE extends Battle {
  constructor(
    public _playerOne: Fighter, 
    private _enemy: SimpleFighter[],
  ) {
    super(_playerOne);
  }

  fight(): number {
    for (let index = 0; index < this._enemy.length; index += 1) {
      while (this._playerOne.lifePoints !== -1 
        && this._enemy[index].lifePoints !== -1) {
        this._playerOne.attack(this._enemy[index]);
        this._enemy[index].attack(this._playerOne);
      }
    }
    if (this._playerOne.lifePoints > 1) {
      return 1;
    } 
    return -1;
  } 
}