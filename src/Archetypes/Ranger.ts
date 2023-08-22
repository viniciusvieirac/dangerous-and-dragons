import { EnergyType } from '../Energy';
import Archetype from './Archetype';

export default class Ranger extends Archetype {
  private typeEnergy: EnergyType;
  static _createdRacesInstances = 0;

  constructor(_name: string) {
    super(_name);
    this.typeEnergy = 'stamina';
    Ranger._createdRacesInstances += 1;
  }
    
  get energyType(): EnergyType {
    return this.typeEnergy;
  }

  static createdArchetypeInstances():number {
    return Ranger._createdRacesInstances;
  }
}