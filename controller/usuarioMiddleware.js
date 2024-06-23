const validateUsuario = (request, response, next) => {
    const { body } = request;
    if (body.nome == undefined) {
    return response.status(400)
    .json({ message: 'O campo "usuario" é obrigatório' });
    }
    if (body.nome === '') {
    return response.status(400)
    .json({ message: 'O campo "usuario" não pode ser vazio' });
    }
    next();
   };
   export default { validateUsuario };