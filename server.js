const express = require('express');
const app = express();

// Defina rotas e lógica do servidor aqui

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});
