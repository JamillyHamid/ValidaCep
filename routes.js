const express = require('express');
const EnderecoController = require('./Controller/enderecoController');

const router = express.Router();

router.post('/enderecos', EnderecoController.createEndereco);
router.get('/enderecos', EnderecoController.getAllEndereco);
router.get('/enderecos/:Id', EnderecoController.getEnderecosById);
router.put('/enderecos/:Id', EnderecoController.updateEndereco);
router.delete('/enderecos/:Id', EnderecoController.deleteEnsdereco);

module.exports = router;
