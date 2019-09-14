const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const main = require("./routes/main")
const firebaseRouter = require("./routes/firebase");
const idRouter = require("./routes/faceid");

app.set("view engine","ejs");
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static(`${__dirname}/publc`));

app.use(main);
app.use(firebaseRouter);
app.use(idRouter);

app.listen(3000,()=>console.log("Running"));

module.exports = app;