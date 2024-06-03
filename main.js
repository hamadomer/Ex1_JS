import { Carton } from "./Carton.js";
import { Cloth } from "./cloth.js";
import { Ball } from "./Ball.js";
import { Book } from "./book.js";
import { Figurine } from "./figurine.js";

const carton = new Carton(100, "Cloth");
carton.addObject(new Cloth("T shirt", 10));
carton.addObject(new Cloth("Pantlon", 20));
const carton1 = new Carton(10, "Carton");
console.log(carton.getNumberOfObjectsInList());
console.log(carton.getCartonType());
carton.addObject(carton1);
carton.addObject(new Cloth("test", 10));
console.log(carton.getCartonType());
console.log(carton.getNumberOfObjectsInList());
