import { Router } from "express"

import { findAll, update, save, remove } from "../services/produtosServices.js";

const router = Router()

//criando rotas
// GET produtos
router.get('/', async (req, res,) => {
    const produtoList = await findAll(req.body)
    res.send(produtoList);
});
// POST produtos
router.post('/', async (req, res,) => {
    const produtoPost = await update(req.body)
    res.status(201).send(produtoPost);
});
// PUT produtos
router.put('/', async (req, res,) => {
    const produtoSave = await save(req.body)
    res.send(produtoSave);
});
// DELETE produtos
router.delete('/', async (req, res,) => {
    const produtoRemove = await remove(req.body)
    res.send(produtoRemove);
});

///////////////////////////////////////////////////
export default router