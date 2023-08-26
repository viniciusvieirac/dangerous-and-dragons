import Fighter from '../Fighter';
import Battle from './Battle';

export default class PVP extends Battle {
  private _winner: Fighter;
  private _player2: Fighter;
  
  constructor(player: Fighter, player2: Fighter) {
    super(player);
    this._player2 = player2;

    const winner = super.fight();

    this._winner = winner === 1 ? player : player2;
  }

  get winner(): Fighter {
    return this._winner;
  }

  fight(): number {
    if (this.player.lifePoints <= 0 || this._player2.lifePoints <= 0) {
      return 0;
    }

    this.player.attack(this._player2);
    if (this._player2.lifePoints <= 0) {
      return 1; 
    }

    this._player2.attack(this.player);
    if (this.player.lifePoints <= 0) {
      return -1; 
    }
    return this.fight(); 
  }
}