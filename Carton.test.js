import { Carton } from "./Carton";
import { Cloth } from "./cloth";

describe("Carton", () => {
  let carton;

  beforeEach(() => {
    carton = new Carton(100, "Cloth");
  });

  test("should add a Cloth object to the Carton", () => {
    const cloth = new Cloth("T shirt", 10);
    const result = carton.addObject(cloth);

    expect(result).toBe("Done");
    expect(carton.getNumberOfObjectsInList()).toBe(1);
    expect(carton.getUsedCartonHeight()).toBe(10);
  });

  test("should not add a Cloth object if there is not enough space", () => {
    const cloth = new Cloth("T shirt", 110);
    const result = carton.addObject(cloth);

    expect(result).toBe(`Can't add the Cloth, not enough space`);
    expect(carton.getNumberOfObjectsInList()).toBe(0);
    expect(carton.getUsedCartonHeight()).toBe(0);
  });

  test("should remove a Cloth object from the Carton", () => {
    const cloth = new Cloth("T shirt", 10);
    carton.addObject(cloth);
    carton.removeObject(cloth);

    expect(carton.getNumberOfObjectsInList()).toBe(0);
    expect(carton.getUsedCartonHeight()).toBe(0);
  });

  test("should get the Carton type", () => {
    expect(carton.getCartonType()).toBe("Cloth");
  });

  test("should set the Carton type", () => {
    carton.setCartonType("Book");
    expect(carton.getCartonType()).toBe("Book");
  });

  test("should print all objects in the Carton", () => {
    const cloth1 = new Cloth("T shirt", 10);
    const cloth2 = new Cloth("Pantlon", 20);
    carton.addObject(cloth1);
    carton.addObject(cloth2);

    const consoleSpy = jest.spyOn(console, "log");
    carton.printAllObjects();

    expect(consoleSpy).toHaveBeenCalledWith(cloth1);
    expect(consoleSpy).toHaveBeenCalledWith(cloth2);

    consoleSpy.mockRestore();
  });
});
