const usersService = require('../services/clienteServices');

const findAll = async (request, response) => {
 const usuarios = await usersService.findAll();
 return response.status(200).json(usuarios);
};

const save = async (request, response) => {
    const result = await usersService.save(request.body);
    return result ?
    response.status(200).json() :
    response.status(400).json({ "[ERROR/SERVER]" : "Falha ao salvar usuario" });
    };

const update = async (request, response) => {
    const result = await usersService.update(request.body);
    return result ?
    response.status(200).json() :
    response.status(400).json({ "[ERROR/SERVER]": "Falha ao atualizar usuario" });
};
       
const remove = async (request, response) => {
    const { id } = request.params;
    const result = await usersService.remove(id);
    return result ?
    response.status(200).json() :
    response.status(400).json({ "[ERROR/SERVER]": "Falha ao remover usuario" });
};
       
module.exports = {
    findAll, save, remove, update
};
       