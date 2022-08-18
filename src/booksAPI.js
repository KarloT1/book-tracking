const books = "http://localhost:3000/books";

export const getBooks = () =>
  fetch(books, {
    "Content-Type": "application/json"
  })
  .then(res => res.json())