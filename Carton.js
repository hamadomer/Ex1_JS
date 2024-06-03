import { Item } from "./Item.js";

export class Carton extends Item {
  constructor(cartonHeight, cartonType) {
    super("Carton", cartonType);
    this.cartonHeight = cartonHeight;
    this.cartonType = cartonType;
    this.usedCartonHeight = 0;
    this.objectsList = [];
  }

  addObject(objectToAdd) {
    if (
      objectToAdd instanceof Carton ||
      objectToAdd.getTypeOfCarton() === "Carton"
    ) {
      if (this.usedCartonHeight + objectToAdd.getSize() <= this.cartonHeight) {
        this.objectsList.push(objectToAdd);

        objectToAdd.getList().forEach((item) => {
          this.objectsList.push(item);
        });

        this.usedCartonHeight += objectToAdd.getSize();
        this.setCartonType("Carton");
        return "Done";
      } else {
        return `Can't add the ${objectToAdd.constructor.name}, not enough space`;
      }
    } else if (objectToAdd.getTypeOfCarton() === this.cartonType) {
      if (this.usedCartonHeight + objectToAdd.getSize() <= this.cartonHeight) {
        this.objectsList.push(objectToAdd);
        this.usedCartonHeight += objectToAdd.getSize();
        return "Done";
      } else {
        return `Can't add the ${objectToAdd.constructor.name}, not enough space`;
      }
    } else {
      return `Can't add the ${objectToAdd.constructor.name} to a carton of type ${this.cartonType}`;
    }
  }

  removeObject(objectToRemove) {
    const index = this.objectsList.indexOf(objectToRemove);
    if (index > -1) {
      this.objectsList.splice(index, 1);
      this.usedCartonHeight -= objectToRemove.getSize();
    }
  }

  getNumberOfObjectsInList() {
    return this.objectsList.length;
  }

  getUsedCartonHeight() {
    return this.usedCartonHeight;
  }

  getSize() {
    return this.usedCartonHeight;
  }

  getCartonType() {
    return this.cartonType;
  }

  printAllObjects() {
    this.objectsList.forEach((object) => console.log(object));
  }

  getList() {
    return this.objectsList;
  }

  setCartonType(inputType) {
    this.cartonType = inputType;
  }

  toString() {
    console.log(
      `${this.getNumberOfObjectsInList()} : ${this.getUsedCartonHeight()}`
    );
    return `The Carton has ${this.getNumberOfObjectsInList()} objects and the height used is ${this.getUsedCartonHeight()}`;
  }
}
