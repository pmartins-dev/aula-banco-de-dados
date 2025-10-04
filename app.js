const express = require('express');
const app = express();
const {produtoRouter} = require('./src/routes/produtoRoutes');

const PORT = 8081;

app.use(express.json());

app.use('/', produtoRouter);

app.listen(PORT, ()=>{
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});
