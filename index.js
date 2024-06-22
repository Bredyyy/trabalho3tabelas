const express = require('express')
const app = express()
const port = 3000
 
//import  express  from 'express'
import  useControllerCliente  from './controllers/clientesController.js'
import  useControllerProduto  from './controllers/produtosController.js'

//usando rotas para get, put, delete e post
app.use('/', useControllerCliente)
app.use('/', useControllerProduto)

/*app.get('/', (req, res) => {
   res.send('get!')
})

app.put('/', (req, res) => {
   res.send('put!')
})

app.post('/', (req, res) => {
   res.send('post')
})

app.delete('/', (req, res) => {
   res.send('delete!')
})*/

app.listen(port, () => {
   console.log(`Aplicação exemplo rodando em http://localhost:${port}`)
})

 //Aplicação exemplo rodando em http://localhost:${port}