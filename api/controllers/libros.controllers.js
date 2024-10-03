import * as service from "../../services/libros.service.js";

function getBooks(req, res) {
  const { section, year } = req.query;
  service
    .getBooks(section, parseInt(year))
    .then((books) => res.status(200).json(books));
}

async function addNewBook(req, res) {
  const { title, author, year, section, link, image } = req.body;
  const newBook = await service.addNewBook({
    title,
    author,
    year,
    section,
    link,
    image,
  });
  res.status(201).json(newBook);
}

function deleteBook(req, res) {
  const id = req.params.id;
  service.deleteBook(id).then((id) => res.status(202).json({ id: id }));
}

function replaceBook(req, res) {
  const id = req.params.id;
  service.replaceBook(id, req.body).then((book) => res.status(201).json(book));
}

function updateBook(req, res) {
  const id = req.params.id;
  service.updateBook(id, req.body).then((book) => {
    if (book) {
      res.status(201).json(book);
    } else {
      res.status(404);
    }
  });
}

export { getBooks, addNewBook, deleteBook, replaceBook, updateBook };
