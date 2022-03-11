const express = require("express");

const app = express();
app.use(express.static("public"));
const PORT = 2002;

// for displaying the data from ironman  mention the correct path for it..
//eg: localost:2002/ironman

app.get("/", (req, res) => {
  res.json({
    name: "Tony Stark",
  });
});

app.get("/work", (req, res) => {
  res.json({
    work: "Avenger",
  });
});

app.listen(PORT, () => {
  console.log("App is listening on port 2002");
});
