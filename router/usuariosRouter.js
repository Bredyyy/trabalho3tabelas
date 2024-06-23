import { Router } from "express"

import { findAll, update, save, remove } from "../services/usuariosServices.js";

const router = Router()

//criando rotas
// GET usuarios
router.get('/', async (req, res,) => {
    const usuarioList = await findAll(req.body)
    res.send(usuarioList);
});
// POST usuarios
router.post('/', async (req, res,) => {
    const usuarioPost = await update(req.body)
    res.status(201).send(usuarioPost);
});
// PUT usuarios
router.put('/', async (req, res,) => {
    const usuarioSave = await save(req.body)
    res.send(usuarioSave);
});
// DELETE usuarios
router.delete('/', async (req, res,) => {
    const usuarioRemove = await remove(req.body)
    res.send(usuarioRemove);
});

///////////////////////////////////////////////////
export default router