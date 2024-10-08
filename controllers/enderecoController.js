const { Endereco } = require('../models/endereco');

exports.createEndereco = async (req, res) => {
    try{
        const { Cep, Logadouro, Numero, Complemento, Bairro, Cidade, Estado, MunicipioIBGE } = req.body;

        const novoEndereco = await Endereco.create({
            Cep,
            Logadouro,
            Numero,
            Complemento,
            Bairro,
            Cidade, 
            Estado, 
            MunicipioIBGE,
        });

        res.status(201).json(novoEndereco);
    } catch (error) {
        res.status(500).json({ error: 'Erro ao criar endereço' , details: error.message });
    }
};

exports.getAllEnderecos = async (req, res) => {
    try {
        const enderecos = await Endereco.findAll();
        res.status(200).json(enderecos);
    } catch (error) {
        res.status(500).json({ error: 'Erro ao buscar endereços' , details: error.message });
    }
};

exports.getEnderecosById = async (req, res) => {
    try {
        const { Id } = req.params;
        const endereco = await Endereco.findByPk(Id);

        if (!endereco) {
            return res.status(404).jason({ error: 'Endereço não encontrado' });
        }

        res.status(200).json(endereco);
    } catch (error) {
        res.status(500).json({ error: 'Erro ao buscar endereço', details: error.message });
    }
};

exports.updateEndereco = async (req, res) => {
    try {
        const { Id } = req.params;
        const { Cep, Logadouro, Numero, Complemento, Bairro, Cidade, Estado, MunicipioIBGE } = req.body;

        const endereco = await Endereco.findByPk(Id);

        if (!endereco) {
            return res.status(404).json({ error: 'Endereço não encontraso' });
        }

        endereco.Cep = Cep;
        endereco.Logadouro = Logadouro;
        endereco.Numero = Numero;
        endereco.Complemento = Complemento;
        endereco.Bairro = Bairro;
        endereco.Cidade = Cidade;
        endereco.Estado = Estado;
        endereco.MunicipioIBGE = MunicipioIBGE;

        await endereco.save();

        res.status(200).json(endereco);
    } catch (error) {
        res.status(500).json({ error: 'Erro ao atualizar endereço', details : error.message });
    }
};

exports.deleteEndereco = async (req, res) => {
    try {
        const { Id } = req.params;

        const endereco = await Endereco.findByPk(Id);
        
        if (!endereco) {
            return res.status(404).json({ error: 'Endereço não encontrado' });
        }

        await endereco.destroy();

        res.status(204).send();
    } catch (error) {
        res.status(500).json({ error: 'Erro ao deletar endereço', details: error.message });
    }
};

