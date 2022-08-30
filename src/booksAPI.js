const books = "http://localhost:8080/books";
const favorites = "http://localhost:8080/favorites";

export const getBooks = () =>
  fetch(books, {
    "Content-Type": "application/json"
  })
  .then(res => res.json())

export const searchBooks = (query) =>
  fetch(`${books}?q=${query}`, {
    "Content-Type": "application/json"
  })
  .then(res => res.json())

export const getFavorites = () =>
fetch(favorites, {
  "Content-Type": "application/json"
})
.then(res => res.json())

export const addFavorite = (body) =>
  fetch(`${favorites}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: body
  })
  .then(res => res.json())

export const removeFavorite = (bookId) => 
  fetch(`${favorites}/${bookId}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json"
    }
  })
  .then(res => res.json())

export const updateBook = (bookId, body) =>
  fetch(`${books}/${bookId}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json"
    },
    body: body
  })
  .then(res => res.json())

  export const addBook = (body) =>
  fetch(`${books}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: body
  })