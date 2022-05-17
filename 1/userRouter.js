let express = require("express");
let fs = require("fs"); //встроенный модуль в NodeJS

let userRouter = express.Router();


userRouter.get("/register", (request, response)=>{
    let login = request.query.login;
    let pass = request.query.pass;

    let user = {
        login: login,
        pass: pass,
    }

    let usersArray = JSON.parse(fs.readFileSync("db.txt"));
    usersArray.push(user);

    fs.writeFileSync("db.txt", JSON.stringify(usersArray));
    response.send("Данные успешно сохранены!");

});

userRouter.get("/login", (request, response)=>{
    let login = request.query.login;
    let pass = request.query.pass;
    let userFound = false;

    let usersArray = JSON.parse(fs.readFileSync("db.txt"));
    for(item of usersArray){
        if(item.login == login && item.pass == pass){
            userFound = true;
            break;
        }
    }
    if(userFound == true){
        response.send("Вы успешно авторизованы!");
    } else{
        response.send("Пользователь не найден!");
    }
});

userRouter.get("/showAll", (request, response)=>{
    let usersArray = JSON.parse(fs.readFileSync("db.txt"));
    response.send(usersArray);
});

module.exports = userRouter;