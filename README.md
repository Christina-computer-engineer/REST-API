# Book Management REST API

## Project Overview

This project is a simple REST API built using Node.js and Express.js to manage a list of books. The API supports basic CRUD (Create, Read, Update, Delete) operations and stores data in memory without using a database.

## Features

* View all books

* Add a new book

* Update an existing book

* Delete a book

* JSON-based request and response handling

## Technologies Used

* Node.js

* Express.js

* Postman (for API testing)

## Project Structure

book-api/

├── server.js

├── package.json

└── package-lock.json

## Installation

1. Clone or download the project.

2. Open the project folder in VS Code.

3. Install dependencies:

npm install

4. Start the server:

node server.js

5. The server will run on:

http://localhost:3000

## API Endpoints

### Get All Books

GET /books

### Add a New Book

POST /books

Request Body:

{
"title": "Book Title",
"author": "Author Name"
}

### Update a Book

PUT /books/:id

Request Body:

{
"title": "Updated Title",
"author": "Updated Author"
}

### Delete a Book

DELETE /books/:id

## Sample Book Object

{
"id": 1,
"title": "Harry Potter",
"author": "J.K. Rowling"
}

## Testing

The API can be tested using Postman by sending GET, POST, PUT, and DELETE requests to the available endpoints.

## Learning Outcomes

Through this project, I learned:

* REST API fundamentals

* Express.js routing

* HTTP methods (GET, POST, PUT, DELETE)

* JSON request and response handling

* API testing using Postman

## Author

Christina Raphel

B.Tech Computer Science and Engineering Student
