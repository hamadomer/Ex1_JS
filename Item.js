export class Item {
  constructor(name, typeOfCarton) {
    this.name = name;
    this.typeOfCarton = typeOfCarton;
  }

  getSize() {
    throw new Error("Method 'getSize()' must be implemented.");
  }

  getTypeOfCarton() {
    return this.typeOfCarton;
  }
}


