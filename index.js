const express = require('express')
const app = express()
const port = 3001

//import  express  from 'express'
import { useRouterCliente } from './router/clientesRouter.js';
import { useRouterProduto } from './router/produtosRouter.js';
import { useRouterUsuario } from './router/usuariosRouter.js';

 
//usando rotas para get, put, delete e post
app.use('/', useRouterCliente);
app.use('/', useRouterProduto);
app.use('/', useRouterUsuario);

//tendo ver se é o exporte
export function useRouterCliente() {
   console.log('Olá, mundo!');
 }

//////////////////////////////////////////////////////////////////////////////////
app.listen(port, () => {
   console.log(`Aplicação exemplo rodando em http://localhost:${port}`)
})

