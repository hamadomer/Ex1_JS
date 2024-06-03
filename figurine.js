import { Item } from "./Item.js";

export class Figurine extends Item {
  constructor(name, figurineHeight) {
    super(name, "Figurine");
    this.figurineHeight = figurineHeight;
  }

  getSize() {
    return this.figurineHeight;
  }
}
