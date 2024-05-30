export class Book {
  constructor(bookWidth, bookTitle) {
    this.bookTitle = bookTitle;
    this.bookWidth = bookWidth;
  }

  getBookTitle() {
    return this.bookTitle;
  }

  setBookTitle(inputTitle) {
    this.bookTitle = inputTitle;
  }

  getBookWidth() {
    return this.bookWidth;
  }

  setBookWidth(inputWidth) {
    this.bookWidth = inputWidth;
  }
}
