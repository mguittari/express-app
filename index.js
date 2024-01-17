const express = require('express');

const app = express();

const port = 5000;

app.get("/", (req, res) => {
res.send("Welcome to Express");
});

app
   .listen(port, () => {
     console.info(`Server is listening on port ${port}`);
   })
   .on("error", (err) => {
     console.error("Error:", err.message);
   });

// const welcomeName = (req, res) => {
//   res.send(`Welcome ${req.params.name}`);
// };

// app.get("/users/:name", welcomeName);

const cocktails = [
  {
    id: 1,
    name: "Margarita",
  },
  {
    id: 2,
    name: "Mojito",
  },
  {
    id: 3,
    name: "Cuba Libre",
  },
];

const getCocktails = (req, res) => {
  res.status(200).json(cocktails);
};

app.get("/api/cocktails", getCocktails);