import Building from './5-building';

export default class SkyHighBuilding extends Building {
  constructor(sqft, floors) {
    // call constructor of super class (Building)
    super(sqft);

    // Create objs
    this._floors = floors;
  }

  // Methods

  evacuationWarningMessage() {
    return `Evacuate slowly the ${this.floors} floors`;
  }

  // Setters base class

  // Getters base class
  get sqft() {
    return this._sqft;
  }

  get floors() {
    return this._floors;
  }
}
