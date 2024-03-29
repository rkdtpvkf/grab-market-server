const express = require("express");
const cors = require("cors");
const app = express();
const port = 8080;

app.use(express.json());
app.use(cors());
app.get("/products", (req, res) => {
  const query = req.query;
  console.log(query);
  res.send({
    products: [
      {
        id: 1,
        name: "농구공",
        price: 1200000,
        seller: "조던",
        imageUrl: "images/products/basketball1.jpeg",
      },
      {
        id: 2,
        name: "축구공",
        price: 50000,
        seller: "메시",
        imageUrl: "images/products/soccerball1.jpg",
      },
      {
        id: 3,
        name: "키보드",
        price: 10000,
        seller: "그랩",
        imageUrl: "images/products/keyboard1.jpg",
      },
    ],
  });
});

app.post("/products", (req, res) => {
  const body = req.body;
  res.send({
    body,
  });
});

app.get("/products/:id/event/:eventId", (req, res) => {
  const params = req.params;
  const { id, eventId } = params;
  res.send(`id는 ${id}와 ${eventId}`);
  console.log(params);
});

app.listen(port, () => {
  console.log("server...");
});
