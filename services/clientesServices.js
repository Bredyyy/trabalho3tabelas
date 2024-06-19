const connerction = require('../configs/bd');

const findAll = async () => {
    const [clients] = await (await connection)
        .execute('select * FROM clients');
    return clients;
}

const updade = async (clientes) => {
    const query = 'UPDATE clients SET nome = ?, sobrenome = ?, email = ?, idade = ?, WHERE id = ?';
    const isOK = await (await connerction).execute(query,
        [clientes.nome, clientes.sobrenome, clientes.email, clientes.idade]
    );
}