const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const jsonParser = bodyParser.json();
const { request, response } = require("express");
const fs = require("fs");
const app = express();
app.use(cors());

const port = 8000;

// let categories = [
//   {
//     id: 1,
//     name: "blog",
//     description: "dawudauwj",
//   },
//   {
//     id: 2,
//     name: "technology",
//   },
//   {
//     id: 3,
//     name: "photo",
//   },
//   {
//     id: 4,
//     name: "adjwa",
//   },
//   {
//     id: 5,
//     name: "dwajdwa",
//   },
// ];
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

// let nextCatId = categories.length;
let categories = JSON.parse(fs.readFileSync("categoryData.json", "utf-8"));

let products = JSON.parse(fs.readFileSync("Mock_Data.json", "utf-8"));
app.get("/products", (req, res) => {
  let { pageSize, page, priceTo, priceFrom, q } = req.query;
  pageSize = Number(pageSize) || 10;
  page = Number(page) || 1;

  let start, end;
  start = (page - 1) * pageSize;
  end = page * pageSize;
  const newProducts = products.filter((product) => {
    let matching = true;
    if (q) {
      return product.name.toLowerCase().includes(q.toLowerCase());
    }
    if (priceFrom) return priceFrom < product.price;
    return matching;
  });

  // const newNumber = products.filter((product) => {
  //   let matching = true;
  //   if (priceFrom) {
  //     matching = product.price.includes(priceFrom);
  //   }
  //   return matching;
  // });
  console.log(newProducts);
  console.log("--------------");
  const item = newProducts.slice(start, end);
  console.log(priceFrom);

  res.json({
    q,
    total: products.length,
    totalPages: Math.ceil(products.length / pageSize),
    page,
    pageSize,
    item,
    priceFrom,
  });
});
const updateCategoriesFile = () => {
  fs.writeFileSync("categoryData.json", JSON.stringify(categories));
};

app.get("/categories", (req, res) => {
  res.json(categories);
});

app.get("/status/:id", (req, res) => {
  const { id } = req.params;
  let category = null;
  for (const cat of categories) {
    if (id == cat.id) {
      v;
      category = cat;
      break;
    }
  }

  res.json(categories);
});

// app.delete("/categories/:id", (req, res) => {
//   const { id } = req.params;
//   categories = categories.filter((row) => row.id === Number(id));
//   updateCategoriesFile;
//   res.json(id);
// });

// app.patch("/categories/:id", (req, res) => {
//   const { id } = req.params;
//   categories = categories.filter((row) => row.id !== id);
//   updateCategoriesFile;
//   res.json(id);
// });

// app.patch('/categories/:id',(req,res)=>{
//   const {id} =req.params
//   categoires = categories.map((a)=>{(a.id !===id)
//     res.json(id)
//   })

// })

app.post("/categoires", jsonParser, (req, res) => {
  const { name } = req.body;
  const newCategory = { id: nextCatId++, name };
  updateCategoriesFile;
  categories.push(newCategory);
  res.send(newCategory);
});

app.listen(port, () => {
  console.log("http://localhost:" + port);
});
