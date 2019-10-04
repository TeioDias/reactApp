const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path');

const routes = require('./routes');

const app = express();

mongoose.connect('mongodb+srv://mrd01:mrd01@mrd01-5sxx5.mongodb.net/test?retryWrites=true&w=majority',{
    useNewUrlParser:true,
    useUnifiedTopology:true
});
//get,post,put,delete

//req.query = Acessar query params(filtros)
//req.params = Acessar route params (edicao,delete)
//req.body = Acessar corpo da requisicao

app.use(cors());
app.use(express.json());
app.use('/files',express.static(path.resolve(__dirname,'..','uploads')));
app.use(routes);

app.listen(process.env.PORT||3333);