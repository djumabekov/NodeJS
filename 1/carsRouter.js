let express = require("express");
let fs = require("fs"); //встроенный модуль в NodeJS

let carsRouter = express.Router();

carsRouter.get("/register", (request, response)=>{

    let model = request.query.model;
    let price = request.query.price;

    let car = {
        model: model,
        price: price,
    }

    let carsArray = JSON.parse(fs.readFileSync("car.txt"));
    carsArray.push(car);

    fs.writeFileSync("car.txt", JSON.stringify(carsArray));
    response.send("Данные успешно сохранены!");

});

carsRouter.get("/showAll", (request, response)=>{
    let carsArray = JSON.parse(fs.readFileSync("car.txt"));
    response.send(carsArray);
});

module.exports = carsRouter;