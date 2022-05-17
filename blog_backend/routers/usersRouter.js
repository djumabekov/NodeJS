let express = require("express");
const { rows } = require("pg/lib/defaults");
let db = require("../db");

let usersRouter = express.Router();


usersRouter.get('/', (req, res) => {
    // res.send("Загрузка всех пользователей из БД");
    db.query('select * from users', (error, result)=>{
        if(error){
            console.log(error);
            res.status(500).send('Error');
        } else{
            res.status(200).json(result.rows);
        }
    });
});

usersRouter.post('/', (req, res) => {
    let {login, password, full_name} = req.body;
    console.log(req.body);
    db.query('insert into users(login, password, full_name) values($1, $2, $3)', [login, password, full_name], (error, result) => {
        if(error){
            console.log(error);
            res.status(500).send('Error');
        }else{
            res.status(201).send('User created');
        }
    });
})


module.exports = usersRouter;


