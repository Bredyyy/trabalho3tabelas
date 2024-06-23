let produtos = []

//chamando todos os clientes
const findAll = async () => {
    const [produtos] = await (await connection)
        .execute('SELECT * FROM produtos');
    return produtos;
}


//fazendo update
const update = async (produtos) => {
    const query = 'UPDATE produtos SET nome = ?, descricao = ?, preco = ?, data_atualizado = ?, WHERE id = ?';
    const isOK = await (await connerction).execute(query,
        [produtos.nome, produtos.descricao, produtos.preco, produtos.data_atualizado]
    );
    return isOK[0].affectedRows ===1;
}


//inserindo 
const save = async (produtos) => {
    const query = 'INSERT INTO produtos(nome, descricao, preco, data_atualizado) VALUES (?, ?, ?, ?)';
    const isOk = await (await connection).execute(query,
        [produtos.nome, produtos.descricao, produtos.preco, produtos.data_atualizado]
    );
    return isOk[0].affectedRows === 1;
}

//deletando
const remove = async (id) => {
    const query = 'DELETE FROM produtos WHERE id = ?';
    const isOk = await (await connection).execute(query, [id]);
    return isOk[0].affectedRows === 1;
}

export default {
    findAll, save, remove, update
};