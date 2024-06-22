const validateDescricao = (request, response, next) => {
    const { body } = request;
    if (body.descricao == undefined) {
    return response.status(400)
    .json({ message: 'O campo "descrição" é obrigatório' });
    }
    if (body.nome === '') {
    return response.status(400)
    .json({ message: 'O campo "descrição" não pode ser vazio' });
    }
    next();
   };
module.exports = { validateDescricao };