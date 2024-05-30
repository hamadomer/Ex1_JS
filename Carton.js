
export class Carton {

  constructor(cartonHeight) {
    this.cartonHeight = cartonHeight;
    this.usedCartonHeight = 0;
    this.booksList = [];
  }

  addBook(bookToAdd) {
    if (this.cartonHeight - bookToAdd.getBookWidth() >= 0) {
      this.booksList.push(bookToAdd);
      this.cartonHeight -= bookToAdd.getBookWidth();
      this.usedCartonHeight += bookToAdd.getBookWidth();
    } else {
      console.log("Can't add the book, not enough space");
    }
  }

  removeBook(bookToRemove) {
    const index = this.booksList.indexOf(bookToRemove);
    if (index !== -1) {
      this.booksList.splice(index, 1);
      this.cartonHeight += bookToRemove.getBookWidth();
      this.usedCartonHeight -= bookToRemove.getBookWidth();
    }
  }

  getNumberOfBooksInList() {
    return this.booksList.length;
  }

  getCartonHeight() {
    return this.cartonHeight;
  }

  printAllBooks() {
    this.booksList.forEach((book) => {
      console.log(book.getBookTitle());
    });
  }

  toString() {
    return `The Carton has ${this.getNumberOfBooksInList()} books and the height used is ${
      this.usedCartonHeight
    }`;
  }
}
