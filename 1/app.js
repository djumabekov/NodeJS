
// let myModule = require("./mymodule.js");
// console.log(myModule.name);
// console.log(myModule.sum(5,4));

let express = require("express");
let fs = require("fs"); //встроенный модуль в NodeJS
let app = express();
let cors = require("cors");

// let userRouter = require("./userRouter");
// let carsRouter = require("./carsRouter");

// app.use("/users", userRouter);
// app.use("/cars", carsRouter);

app.use(cors());
let productRouter = require("./productRouter");

app.use("/products", productRouter);

app.listen(8080);