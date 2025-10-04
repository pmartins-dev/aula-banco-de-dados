const express = require('express');
const router = express.Router();
const {produtoController} = require('../controllers/produtoController');

// GET/produtos -> Listar todos os produtos.
router.get('/produtos', produtoController.listarProdutos);

module.exports = {produtoRouter: router};
