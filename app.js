const express = require("express");
const app = express();
const cookieParser = require("cookie-parser");
const path = require("path");
const ownerRouter = require("./routes/ownerRouter")
const productsRouters = require("./routes/productsRouters")
const usersRouters = require("./routes/usersRouters")

const db = require("./config/mongoose-connection");

app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));
app.use(cookieParser());
app.use(express.urlencoded({ extended: true}));
app.set("view engine", "ejs");

app.use("/owner", ownerRouter);
app.use("/users", usersRouters);
app.use("/products", productsRouters);

app.listen(3000);