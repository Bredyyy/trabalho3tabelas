let clientes = []

//chamando todos os produtos
const findAll = async () => {
    const [clientes] = await (await connection)
        .execute('SELECT * FROM clients');
    return clientes;
}

//fazendo update
const update = async (clientes) => {
    const query = 'UPDATE clienets SET nome = ?, sobrenome = ?, email = ?, idade = ?, WHERE id = ?';
    const isOK = await (await connerction).execute(query,
        [clientes.nome, clientes.sobrenome, clientes.email, clientes.idade]
    );
    return isOK[0].affectedRows ===1;
}

//inserindo 
const save = async (clientes) => {
    const query = 'INSERT INTO clientes(nome, sobrenome, email, idade) VALUES (?, ?, ?, ?)';
    const isOk = await (await connection).execute(query,
    [clientes.nome, clientes.sobrenome, clientes.email,
    clientes.idade]);
    return isOk[0].affectedRows === 1;
}

//deletando
const remove = async (id) => {
    const query = 'DELETE FROM clientes WHERE id = ?';
    const isOk = await (await connection).execute(query, [id]);
    return isOk[0].affectedRows === 1;
}


export default {
    findAll, save, remove, update
};