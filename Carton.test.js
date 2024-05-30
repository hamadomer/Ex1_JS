import { Carton } from "./Carton";
import { Book } from "./Book";
import { test } from "node:test";

describe("Book class", () => {
  let carton;
  let book;
  test("should create a book and add it to the carton", () => {
    book = new Book(10, "Harry Potter");
    carton = new Carton(100);
    carton.addBook(book);
    expect(carton.getNumberOfBooksInList()).toBe(1);
  });

   test("should create a book and add it to the carton and then remove it", () => {
     book = new Book(10, "Harry Potter");
     carton = new Carton(100);
     carton.addBook(book);
     expect(carton.getNumberOfBooksInList()).toBe(1);
     carton.removeBook(book);
     expect(carton.getNumberOfBooksInList()).toBe(0);
   });

   test("should return correct carton height", () => {
        carton = new Carton(100);
        expect(carton.getCartonHeight()).toBe(100)
   })
});
