// let express = require("express"); //подключаем модуль (аналог инклуд)
// let fs = require("fs"); //подключаем модуль file system

// let app = express(); //создаем объект-сервер

// let arr = [];

// // let login = process.argv[2]; //принимает второй элемент командной строки (node Node.js alibi) и присваевает ее в userName
// // let pass = process.argv[3]; 

// let fileName = process.argv[2];

// // app.get('/write/:num', function(request, response){  // вызываем функцию get по адресу contacts
// //     let num = request.params.num;
// //     fs.appendFileSync(fileName, num);
// //     response.send("write ok");
// // });

// app.get('/write', function(request, response){  // вызываем функцию get по адресу contacts
//     let name = request.query.name;
//     let age = request.query.age;

//     let user = {
//         name: name,
//         age: age,
//     }

//     fs.appendFileSync(fileName, JSON.stringify(user)+'\n');
//     response.send("write ok");
// });

// app.get('/read', function(request, response){  // вызываем функцию get по адресу contacts
// //     if(login == "admin" && pass=="admin"){
// //     response.send(`${login} успешно авторизован!`);
// // } else{
// //     response.send(`${login} не имеет прав доступа!`);
// // }
//     let fileContent = fs.readFileSync(fileName, "utf-8");
//     let user = JSON.parse(fileContent);
//     response.send(user.name);
// });

// // app.get('/', function(request, response){
// //     console.log(request.query);
// //     response.send("");
// // })



// app.listen(8080); // слушаем порт 8080
