const validatePreco = (request, response, next) => {
    const { body } = request;
    if (body.nome == undefined) {
    return response.status(400)
    .json({ message: 'O campo "preço" é obrigatório' });
    }
    if (body.nome === '') {
    return response.status(400)
    .json({ message: 'O campo "preço" não pode ser vazio' });
    }
    next();
   };
   export default { validatePreco };