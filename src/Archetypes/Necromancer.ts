import { EnergyType } from '../Energy';
import Archetype from './Archetype';

export default class Necromancer extends Archetype {
  private typeEnergy: EnergyType;
  static _createdRacesInstances = 0;

  constructor(_name: string) {
    super(_name);
    this.typeEnergy = 'mana';
    Necromancer._createdRacesInstances += 1;
  }
    
  get energyType(): EnergyType {
    return this.typeEnergy;
  }

  static createdArchetypeInstances():number {
    return Necromancer._createdRacesInstances;
  }
}