const connerction = require('../configs/bd');

const findAll = async () => {
    const [clients] = await (await connection)
        .execute('select * FROM clients');
    return clients;
}

const updade = async (clients) => {
    const query = 'UPDATE clients SET nome = ?'
}