const express = require('express');
const app = express();

app.use(express.urlencoded({extended: true}));

app.get('/', (req, res) =>{
    res.send(`Hello <b>world!</b>
    <form action="/" method="POST">
    Nome do cliente: <input type="text" name="nome">
    Outro campo: <input type="text" name="outroCampo">
    <button>Olá Mundo!</button>
    </form>`);
});

app.get('/testes/:idUsuarios?/:parametro?', (req, res) => {
    // /profiles/123
    // /profiles/?chave1=123&chave2=123456&chave3=outroValor
    // console.log(req.query);
    // res.send(req.query.chave1);
    console.log(req.params);
    //res.send(req.params.idUsuarios);
    res.send(req.params);
});

app.post('/', (req, res) => {
    console.log(req.body);
    res.send(`O que você me enviou foi: ${req.body.nome}`);
});

app.listen(3000, () => {
    console.log('Acessar http://localhost:3000');
    console.log('Servidor Executando na porta 3000');
});