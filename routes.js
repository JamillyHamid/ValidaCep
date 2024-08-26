const express = require('express');
const EnderecoController = require('./controllers/enderecoController');

const router = express.Router();

router.post('/enderecos', EnderecoController.createEndereco);
router.get('/enderecos', EnderecoController.getAllEnderecos);
router.get('/enderecos/:Id', EnderecoController.getEnderecosById);
router.put('/enderecos/:Id', EnderecoController.updateEndereco);
router.delete('/enderecos/:Id', EnderecoController.deleteEndereco);

module.exports = router;
