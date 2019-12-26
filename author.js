var Book = require('./book.js');

class Author {
  constructor(newAuthor) {
    this.first = newAuthor.first;
    this.last = newAuthor.last;
    this.books = [];
  }

  write(title, publicationYear) {
    var newBook = new Book(this.first, this.last, title, publicationYear);
    this.books.push(newBook);
    return newBook;
  }
}


module.exports = Author;
