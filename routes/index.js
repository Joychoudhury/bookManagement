var express = require("express");
var router = express.Router();

const book = [
  {
    author: "Chinua Achebe",
    imageLink:
      "https://raw.githubusercontent.com/benoitvallon/100-best-books/master/static/images/things-fall-apart.jpg",
    pages: 209,
    bookState: "available",
    title: "Things Fall Apart",
    price: 800,
  },
  {
    author: "Hans Christian Andersen",
    imageLink:
      "https://raw.githubusercontent.com/benoitvallon/100-best-books/master/static/images/fairy-tales.jpg",
    pages: 784,
    bookState: "available",
    title: "Fairy tales",
    price: 340,
  },
  {
    author: "Dante Alighieri",
    imageLink:
      "https://raw.githubusercontent.com/benoitvallon/100-best-books/master/static/images/the-divine-comedy.jpg",
    pages: 928,
    bookState: "available",
    title: "The Divine Comedy",
    price: 765,
  },
  {
    author: "Unknown",
    imageLink:
      "https://raw.githubusercontent.com/benoitvallon/100-best-books/master/static/images/the-epic-of-gilgamesh.jpg",
    pages: 160,
    bookState: "available",
    title: "The Epic Of Gilgamesh",
    price: 879,
  },
  {
    author: "Unknown",
    imageLink:
      "https://raw.githubusercontent.com/benoitvallon/100-best-books/master/static/images/the-book-of-job.jpg",
    pages: 176,
    bookState: "available",
    title: "The Book Of Job",
    price: 900,
  },
  {
    author: "Unknown",
    imageLink:
      "https://raw.githubusercontent.com/benoitvallon/100-best-books/master/static/images/one-thousand-and-one-nights.jpg",
    pages: 288,
    bookState: "available",
    price: 789,
    title: "One Thousand and One Nights",
  },
  {
    author: "Unknown",
    imageLink:
      "https://raw.githubusercontent.com/benoitvallon/100-best-books/master/static/images/njals-saga.jpg",
    pages: 384,
    bookState: "available",
    price: 599,
    title: "Nj\u00e1l's Saga",
  },
  {
    author: "Jane Austen",
    imageLink:
      "https://raw.githubusercontent.com/benoitvallon/100-best-books/master/static/images/pride-and-prejudice.jpg",
    pages: 226,
    bookState: "available",
    price: 49,
    title: "Pride and Prejudice",
  },
  {
    author: "Honor\u00e9 de Balzac",
    imageLink:
      "https://raw.githubusercontent.com/benoitvallon/100-best-books/master/static/images/le-pere-goriot.jpg",
    pages: 443,
    bookState: "available",
    price: 349,
    title: "Le P\u00e8re Goriot",
  },
  {
    author: "Samuel Beckett",
    imageLink:
      "https://raw.githubusercontent.com/benoitvallon/100-best-books/master/static/images/molloy-malone-dies-the-unnamable.jpg",
    pages: 256,
    bookState: "unavailable",
    price: 999,
    title: "Molloy, Malone Dies, The Unnamable, the trilogy",
  },
  {
    author: "Giovanni Boccaccio",
    imageLink:
      "https://raw.githubusercontent.com/benoitvallon/100-best-books/master/static/images/the-decameron.jpg",
    pages: 1024,
    bookState: "available",
    price: 500,
    title: "The Decameron",
  },
  {
    author: "Jorge Luis Borges",
    imageLink:
      "https://raw.githubusercontent.com/benoitvallon/100-best-books/master/static/images/ficciones.jpg",
    pages: 224,
    price: 340,
    bookState: "available",
    title: "Ficciones",
  },
];

/* GET home page. */

router.use(express.static("public"));

router.get("/", function (req, res, next) {
  res.render("index", { book: book });
});

router.post("/", (req, res) => {
  const inputBookName = req.body.bookName;
  const inputBookAuthor = req.body.bookAuthor;
  const inputBookPages = req.body.bookPages;
  const inputBookPrice = req.body.bookPrice;
  const inputmyfile = req.body.myfile;

  book.push({
    title: inputBookName,
    author: inputBookAuthor,
    pages: inputBookPages,
    price: inputBookPrice,
    imageLink: inputmyfile,
    bookState: "available",
  });

  setTimeout(() => {}, 3000);
  res.render("index", {
    book: book,
  });
});

router.post("/delete", (req, res) => {
  var requestedBookName = req.body.bookName;
  var j = 0;
  book.forEach((ele) => {
    j = j + 1;
    if (ele.title == requestedBookName) {
      book.splice(j - 1, 1);
    }
  });
  res.redirect("/");
});

router.post("/return", (req, res) => {
  var requestedBookName = req.body.bookName;
  book.forEach((books) => {
    if (books.title == requestedBookName) {
      books.bookState = "available";
    }
  });
  res.redirect("/");
});
router.post("/issue", (req, res) => {
  var requestedBookName = req.body.bookName;
  book.forEach((books) => {
    if (books.title == requestedBookName) {
      books.bookState = "unavailable";
    }
  });
  res.redirect("/");
});
module.exports = router;
