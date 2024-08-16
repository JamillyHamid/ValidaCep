const express = require('express');
const axio = require('axios');

const app = express();
const port = 3000;

app.get('/',(req, res)=>{
    res.send('Hello Word');
});


app.get('/consulta-cep/:cep', async (req,res) =>{

    
    const cepRegex = /^[0-9]{5}-?[0-9]{3}$/;
    
    const cep = req.params.cep;
        try{
        if(!cepRegex.test(cep)) {
            res.status(400).send('Cep Inválido. Formato xxxxx-xxx');   
        }   
        const response = await axio.get(`https://viacep.com.br/ws/${cep}/json/`);
        res.json(response.data);
    }catch (error){
        console.error(`erro ao fazer requisição`, error);
        res.status(500).send('Erro ao consultar CEP');
    }
});

app.listen(port,() =>{
    console.log(`Servidor rodando em http://localhost:${port}`);
});