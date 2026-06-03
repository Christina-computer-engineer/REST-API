const express = require("express");
const app = express();

app.use(express.json());

let books = [
  { id: 1, title: "Harry Potter", author: "J.K. Rowling" }
];

// GET all books
app.get("/books", (req, res) => {
  res.json(books);
});

// POST book
app.post("/books", (req, res) => {
  const book = {
    id: books.length + 1,
    title: req.body.title,
    author: req.body.author
  };

  books.push(book);
  res.json(book);
});

// PUT book
app.put("/books/:id", (req, res) => {
  const id = parseInt(req.params.id);

  const book = books.find(b => b.id === id);

  if (!book) {
    return res.json({ message: "Book not found" });
  }

  book.title = req.body.title;
  book.author = req.body.author;

  res.json(book);
});

// DELETE book
app.delete("/books/:id", (req, res) => {
  const id = parseInt(req.params.id);

  books = books.filter(b => b.id !== id);

  res.json({ message: "Deleted successfully" });
});

// start server
app.listen(3000, () => {
  console.log("Server running on port 3000");
});
