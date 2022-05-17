const express = require("express");
const pg = require("pg");
const app = new express();

const dbSettings = {
    user: 'brfcibclbipnvl',
    host: 'ec2-63-32-248-14.eu-west-1.compute.amazonaws.com',
    database: 'dfctqaebjr4qi9',
    password: '0c452e7a0426fbe726f8356d261e3f5ca0db07dabedb54ef4d5fd558836bccc6',
    port: 5432,
    ssl: {
        rejectUnauthorized: false
    }
}

const Pool = pg.Pool;
const pool = new Pool(dbSettings);

app.get('/', (request, response)=>{
    response.send("Hello");
})

app.get('/posts', (request, response)=>{
    pool.query('select * from posts_darkhan', (error, result)=>{
        if(error){
            response.status(502).send('DB Error');
        } else{
            response.status(200).json(result.rows);
        }
    });
    // response.send("All posts");
})

app.post('/posts', (request, response)=>{
    response.send("Add post");
})

app.listen(8080, ()=> console.log('Сервер запущен...'));
