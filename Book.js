import { Item } from "./Item.js";

export class Book extends Item {
    constructor(name, bookWidth) {
        super(name, 'Book');
        this.bookWidth = bookWidth;
    }

    getSize() {
        return this.bookWidth;
    }
}

