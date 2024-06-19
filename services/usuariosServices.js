const connerction = require('../configs/bd');

const findAll = async () => {
    const [usuarios] = await (await connection)
        .execute('select * FROM usuarios');
    return usuarios;
}

const update = async (usuarios) => {
    const query = 'UPDATE usuarios SET usuario = ?, senha = ?, token = ?, WHERE id = ?';
    const isOK = await (await connerction).execute(query,
        [usuarios.usuario, usuarios.senha, usuarios.token]
    );
    return isOK[0].affectedRows ===1;
}
const save = async (usuarios) => {
    const query = 'INSERT INTO usuarios(usuario, senha, token) VALUES (?, ?, ?)';
    const isOk = await (await connection).execute(query,
        [usuarios.usuario, usuarios.senha, usuarios.token]
    );
    return isOk[0].affectedRows === 1;
   }
   
   const remove = async (id) => {
    const query = 'DELETE FROM usuarios WHERE id = ?';
    const isOk = await (await connection).execute(query, [id]);
    return isOk[0].affectedRows === 1;
   }

   module.exports = {
    findAll, save, remove, update
};
