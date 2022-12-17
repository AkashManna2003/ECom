

const express = require("express");
const app = express();
const cors = require("cors");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
//const corsOptions = require('./config/corsOption');
const PORT= process.env.PORT || 3001;
app.use(cors());
app.use(express.json());
const path=require("path");
const routes=require("./routes/route");
dotenv.config();


mongoose.connect(process.env.MONGODB_URI,{
  useNewUrlParser: true,
  dbName:"TechC"
});
app.use("",routes);

// --------------------------deployment------------------------------

const __dirname1 = path.resolve();

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname1, "/frontend/build")));

  app.get("/", (req, res) =>
  res.sendFile(path.resolve(__dirname, "frontend", "build", "index.html"))
);
app.get("/Home", (req, res) =>
  res.sendFile(path.resolve(__dirname, "frontend", "build", "index.html"))
);
app.get("/Admin", (req, res) =>
  res.sendFile(path.resolve(__dirname, "frontend", "build", "index.html"))
);
app.get("/Adminz", (req, res) =>
  res.sendFile(path.resolve(__dirname, "frontend", "build", "index.html"))
);
app.get("/Cart", (req, res) =>
  res.sendFile(path.resolve(__dirname, "frontend", "build", "index.html"))
);
app.get("/Register", (req, res) =>
  res.sendFile(path.resolve(__dirname, "frontend", "build", "index.html"))
);
} else {
  app.get("/", (req, res) => {
    res.send("API is running..");
  });
}

// --------------------------deployment------------------------------
app.use("/Home",require("./Routes/route"));
app.use("/",require("./Routes/route"));
app.use("/Register",require("./Routes/route"));
app.use("/Admin", require("./Routes/route"))

app.listen(PORT, function () {
  console.log("App is listening on port 3001");
});
