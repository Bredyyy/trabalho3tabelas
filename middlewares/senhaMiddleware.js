const validateSenha = (request, response, next) => {
    const { body } = request;
    if (body.nome == undefined) {
    return response.status(400)
    .json({ message: 'O campo "senha" é obrigatório' });
    }
    if (body.nome === '') {
    return response.status(400)
    .json({ message: 'O campo "senha" não pode ser vazio' });
    }
    next();
   };
   module.exports = { validateSenha };