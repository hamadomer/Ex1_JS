import { Item } from "./Item.js";

export class Cloth extends Item {
  constructor(name, clothWidth) {
    super(name, "Cloth");
    this.clothWidth = clothWidth;
  }

  getSize() {
    return this.clothWidth;
  }
}
