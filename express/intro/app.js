const express = require("express");
const cors = require("cors");
const { request, response } = require("express");
const app = express();
app.use(cors());

const port = 8000;

const categories = [
  {
    id: 1,
    name: "blog",
  },
  {
    id: 2,
    name: "technology",
  },
  {
    id: 3,
    name: "photo",
  },
  {
    id: 4,
    name: "adjwa",
  },
  {
    id: 5,
    name: "dwajdwa",
  },
];
const status = [
  {
    id: 1,
    title: "Naruto",
    imageUrl: "https://naruto-official.com/index/char_naruto.webp",
    text: "dwaghdwaydgiawhdawidhawdiwahdywahdiuwahdawhdiawdigawdguawygdaygwdawygduawidgiwagdia",
  },
  {
    id: 2,
    title: "Sasuke",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/en/thumb/4/42/SasukeKishimoto.jpg/220px-SasukeKishimoto.jpg",
    text: "sasuke dawudjawuhdawjdjaidawijd oidjjoiajdiowajdij jwaodjiwoadjwoi",
  },
  {
    id: 3,
    title: "sakura",
    imageUrl:
      "https://cdn.donmai.us/original/d2/72/d272723e25e8d8f314599577299e2949.jpg",
    text: "sakura ydgiawhdawidhawdiwahdywahdiuwahdawhdiawdigawdguawygdaygwdawygduawidgiwagdia",
  },
  {
    id: 4,
    title: "Hinata",
    imageUrl:
      "https://w0.peakpx.com/wallpaper/1001/539/HD-wallpaper-hinata-naruto-butter-usa-aot-png-hyuga.jpg",
    text: "Hinata idhawdiwahdywahdiuwahdawhdiawdigawdguawygdaygwdawygduawidgiwagdia",
  },
];

app.get("/categories", (request, response) => {
  response.status(200);
  response.json(categories);
});
app.get("/status", (request, response) => {
  response.status(200);
  response.json(status);
});
app.get("/status/:id", (req, res) => {
  const { id } = req.params;
  res.json(status[Number(id) - 1]);
});

app.listen(port, () => {
  console.log("http://localhost:" + port);
});
