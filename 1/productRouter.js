let express = require("express");
let fs = require("fs"); //встроенный модуль в NodeJS

let productRouter = express.Router();

// добавляет товар
productRouter.get("/add", (request, response)=>{

    let productsArray = JSON.parse(fs.readFileSync("products.txt"));
    if(productsArray == null){
        productsArray = [];
    }
    let id = request.query.id;
    let name = request.query.name;
    let price = request.query.price;
    let category =  request.query.category;

    let product = {
        id: id,
        name: name,
        price: price,
        category: category,
    }

    productsArray.push(product);
    fs.writeFileSync("products.txt", JSON.stringify(productsArray));
    response.send("Данные успешно сохранены!");

});

// возвращает массив товаров
productRouter.get("/", (request, response)=>{
    let productsArray = JSON.parse(fs.readFileSync("products.txt"));
    if(productsArray == null){
        response.send("Массив пустой");
    }
    response.send(productsArray);
});

// возвращает товар по его id
productRouter.get("/info/:id", (request, response)=>{
    let id = request.params.id;
    let productFound = false;
    let product = null;
    let productsArray = JSON.parse(fs.readFileSync("products.txt"));

    for(let item of productsArray){
        if(item.id == id){
            productFound = true;
            product = item;
            break;
        }
    }
    if(productFound){
        response.send(product);
    }
    else{
    response.send("Товар не найден!");
}
});


// удаляет товар по его id
productRouter.get("/remove/:id", (request, response)=>{
   
    let id = request.params.id;
    let productFound = false;
    let productsArray = JSON.parse(fs.readFileSync("products.txt"));

    for(let i=0; i<productsArray.length; i++){
        if(productsArray[i].id == id){
            productFound = true;
            productsArray.splice(i, 1);
            break;
        }
    }

    if(productFound){
        fs.writeFileSync("products.txt", JSON.stringify(productsArray));
        response.send("Товар удален!");
    }
    else{
        response.send("Товар не найден");
    }

});

module.exports = productRouter;