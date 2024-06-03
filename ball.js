import { Item } from "./Item.js";

export class Ball extends Item {
  constructor(name, ballDiameter) {
    super(name, "Ball");
    this.ballDiameter = ballDiameter;
  }

  getSize() {
    return this.ballDiameter;
  }
}
