let express = require("express");
const { rows } = require("pg/lib/defaults");
let db = require("../db");

let postsRouter = express.Router();

postsRouter.get('/', (req, res) => {
    // res.send("Загрузка всех пользователей из БД");
    db.query('select * from posts', (error, result)=>{
        if(error){
            console.log(error);
            res.status(500).send('Error');
        } else{
            res.status(200).json(result.rows);
        }
    });
});

postsRouter.post('/', (req, res) => {
    // res.send("Загрузка всех пользователей из БД");
    let{title, content, author_id} = req.body;
    db.query('insert into posts(title, content, author_id, created_datetime) values ($1, $2, $3, current_timestamp)', [title, content, author_id], (error, result)=>{
        if(error){
            console.log(error);
            res.status(500).send('Error');
        } else{
            res.status(201).send('Post created');
        }
    });
});

postsRouter.put('/', (req, res) => {
    // res.send("Загрузка всех пользователей из БД");
    let{post_id, new_title, new_content} = req.body;
    db.query('update posts set title=$1, content=$2 where id=$3', 
    [new_title, new_content, post_id], (error, result)=>{
        if(error){
            console.log(error);
            res.status(500).send('Error');
        } else{
            res.status(201).send('Post updated');
        }
    });
});

postsRouter.delete('/', (req, res) => {
    // res.send("Загрузка всех пользователей из БД");
    let {post_id} = req.body;
    db.query('delete from posts where id=$1', [post_id], (error, result)=>{
        if(error){
            console.log(error);
            res.status(500).send('Error');
        } else{
            res.status(201).send('Post deleted');
        }
    });
});

module.exports = postsRouter;