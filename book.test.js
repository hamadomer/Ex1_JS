import { Book } from "./Book";

describe("Book class", () => {
  let book;

  test("should create a book with given title and width", () => {
    book = new Book(10, "Harry Potter");
    expect(book.getBookTitle()).toBe("Harry Potter");
    expect(book.getBookWidth()).toBe(10);
  });

  test("should set a new book title", () => {
    book = new Book(10, "Harry Potter");
    book.setBookTitle("The Hobbit");
    expect(book.getBookTitle()).toBe("The Hobbit");
  });

  test("should set a new book width", () => {
    book = new Book(10, "Harry Potter");
    book.setBookWidth(15);
    expect(book.getBookWidth()).toBe(15);
  });
});

