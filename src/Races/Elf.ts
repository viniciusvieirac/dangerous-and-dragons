import Race from './Race';

class Elf extends Race {
  private _maxLifePoints: number;
  static createdRacesInstancesCounter = 0;

  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    this._maxLifePoints = 99;
    Elf.createdRacesInstancesCounter += 1;
  }

  static createdRacesInstances(): number {
    return this.createdRacesInstancesCounter;
  }

  get maxLifePoints(): number {
    return this._maxLifePoints;
  }

  get name(): string {
    return this.name;
  }

  get dexterity(): number {
    return this.dexterity;
  }
}

export default Elf;