exports.paginaInicial = (req, res) => {
    res.send(`Hello <b>world!</b>
    <form action="/" method="POST">
    Nome do cliente: <input type="text" name="nome">
    Outro campo: <input type="text" name="outroCampo">
    <button>Olá Mundo!</button>
    </form>`);
};

exports.trataPost = (req, res) => {
    res.send('Sou sua nova rota de post!');
};