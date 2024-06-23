import { Router } from "express"
//const express = require('express')

import { findAll, update, save, remove } from "../services/clientesServices.js";

const router = Router()

//criando rotas
// GET clientes
router.get('/', async (req, res,) => {
    const clientesList = await findAll(req.body)
    res.send(clientesList);
});
// POST clientes
router.post('/', async (req, res,) => {
    const clientesPost = await update(req.body)
    res.status(201).send(clientesPost);
});
// PUT clientes
router.put('/', async (req, res,) => {
    const clientesSave = await save(req.body)
    res.send(clientesSave);
});
// DELETE clientes
router.delete('/', async (req, res,) => {
    const clientesRemove = await remove(req.body)
    res.send(clientesRemove);
});


///////////////////////////////////////////////////////////
export default router