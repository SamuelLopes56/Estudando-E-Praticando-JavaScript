exports.paginaInicial = (req, res) => {
  // req.session.usuario = { nome: 'Luiz', logado: true }; Adicionando uma seção, que foi configurada para durar 7 dias
  // console.log(req.session.usuario); // Logando essa seção
  // req.flash('info', 'Olá mundo!'); Criando as mensagens do connect-flash, são deletadas automaticamentes após 1 uso.
  // req.flash('error', 'Errouuu!');
  // req.flash('success', 'Acertouuu!');
  // console.log(req.flash('error'), req.flash('success'), req.flash('info')); // Logando as mensagens
  res.render('index', {
    titulo: 'Este valor será o título da página',
    numeros: [8,4,6,4,52,7,68,4]
  });
};
exports.trataPost = (req, res) => {
  res.send(req.body);
};
