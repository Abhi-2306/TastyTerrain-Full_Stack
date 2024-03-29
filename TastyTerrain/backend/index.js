const express = require("express");
// const createuser = ;
const app = express();
const port = 5000;
const mongodb = require("./db");
mongodb();
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "https://tasty-terrain-full-stack.vercel.app");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});
app.use(cors(
  {
    origin:["https://tasty-terrain-full-stack-zjbd.vercel.app/"],
    methods:["POST","GET"],
    credentials:true
  }
))
app.get("/", (req, res) => {
  res.send("Hello World!");
});
app.use(express.json());
app.use("/api", require("./Routes/CreateUser"));
app.use("/api", require("./Routes/DisplayData"));
app.use("/api", require("./Routes/OrderData"));

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
