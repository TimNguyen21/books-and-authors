class Book {
  constructor(first, last, title, year) {
    this.author = `${first} ${last}`;
    this.title = title;
    this.publicationYear = year;
  }
}

module.exports = Book;
