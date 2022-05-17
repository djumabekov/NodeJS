let express = require("express");
let cors = require("cors");
let usersRouter = require("./routers/usersRouter");
let postsRouter = require("./routers/postsRouter");
let app = express();

let bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true,}));
app.use(cors());
app.use('/users', usersRouter);
app.use('/posts', postsRouter);

app.listen(8080, ()=>{
    console.log("Server started...");
})

