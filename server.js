const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const port = 4000;
const app = express();
const data = require("./data");
const token = "ahuBHejkJJiMDhmODZhZi0zNWRhLTQ4ZjItOGZhYi1jZWYzOTA07i73Gebhu98";

let nextId = 2;

let cards = [
  {
    id: 1,
    title: "Title",
    category: "Category",
    description: "Description",
    link: "Link",
    completed: false
  }
]

app.use(bodyParser.json());

app.use(cors());

function authenticator(req, res, next) {
  const { authorization } = req.headers;
  if (authorization === token) {
    next();
  } else {
    res.status(403).json({ error: "User be logged in to do that." });
  }
}

app.post("/login", (req, res) => {
  const { username, password } = req.body;
  if (username === "user" && password === "password") {
    req.loggedIn = true;
    res.status(200).json({
      payload: token
    });
  } else {
    res
      .status(403)
      .json({ error: "Username or Password incorrect. Please see Readme" });
  }
});

app.get("/cards", authenticator, (req, res) => {
  setTimeout(() => {
    res.send(data);
  }, 1000);
});

app.get('/cards/:id', authenticator, (req, res) => {
  const card = cards.find(c => c.id == req.params.id);

  if (card) {
    res.status(200).json(card);
  } else {
    res.status(404).send({ msg: 'Card not found' });
  }
});

app.post('/cards', authenticator, (req, res) => {
  const card = { id: getNextId(), ...req.body };

  cards = [...cards, card];

  res.send(cards);
});

app.put('/cards/:id', authenticator, (req, res) => {
  const { id } = req.params;

  const cardIndex = cards.findIndex(f => f.id == id);

  if (cardsIndex > -1) {
    const card = { ...cards[cardIndex], ...req.body };

    cards = [
      ...cards.slice(0, cardIndex),
      card,
      ...cards.slice(cardIndex + 1)
    ];
    res.send(cards);
  } else {
    res.status(404).send({ msg: 'Card not found' });
  }
});

app.delete('/cards/:id', authenticator, (req, res) => {
  const { id } = req.params;

  cards = cards.filter(c => c.id !== Number(id));

  res.send(cards);
});

function getNextId() {
  return nextId + 1;
}

app.listen(port, () => {
  console.log(`server listening on port ${port}`);
});
