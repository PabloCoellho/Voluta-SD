
const knex = require('knex');

const configuration = require('../../knexfile');

const connection = knex(configuration.development);

module.exports = connection;
const express = require('express');

const app = express();
app.use(express.json())

app.listen(3333);

app.get('/lermsg', async(request, response) => {
    const mensagens = await connection('forms').select('*');
});

app.post('/msg', async(request, response) => {
    const { nome, email, mensagem } = request.body;

    const user = await connection('forms').insert({
        nome,
        email,
        mensagem,
    });

    return response.json('Mensagem enviada!');
})