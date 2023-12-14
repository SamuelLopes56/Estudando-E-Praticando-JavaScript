const HomeModel = require('../models/HomeModel');

/*
HomeModel.create({
  titulo: 'Outro título de teste',
  descricao: 'Outra descrição de teste.'
})
.then(dados => console.log(dados))
.catch(e => console.log(e));
*/

HomeModel.find()
.then(dados => console.log(dados))
.catch(e => console.log(e));

exports.paginaInicial = (req, res) => {
  res.render('index');
};

exports.trataPost = (req, res) => {
  res.send(req.body);
};
