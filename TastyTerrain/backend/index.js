const express = require("express");
// const cors = require('cors');
// const createuser = ;
const app = express();
const port = 5000;
const mongodb = require("./db");
mongodb();
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});
// app.use(cors(
//   {
//     origin:["https://tasty-terrain-full-stack-zjbd.vercel.app/"],
//     methods:["POST","GET"],
//     credentials:true
//   }
// ))
// app.get("/", (req, res) => {
//   res.send("Hello World!");
// });
app.use(express.json());
const path = require("path")

app.use("/api", require("./Routes/CreateUser"));
app.use("/api", require("./Routes/DisplayData"));
app.use("/api", require("./Routes/OrderData"));
app.use(express.static(path.resolve(__dirname, "build")));
app.get(/^\/(?!api).*/, (req, res) =>
  res.sendFile(path.resolve("build", "index.html"))
);
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
