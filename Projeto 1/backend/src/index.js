const express = require ('express');

const connection = require ('./database/connection');

const app = express ();

app.use(express.json());

app.listen(3333);

//Ler as mensagens que estão no banco de dados
app.get('/lermsg', async (request, response) => {
    const mensagens = await connection ('forms').select ('*');

    response.json({mensagens});
});

//Enviar as mensagens para o banco de dados
app.post('/msg', async(request, response) => {
    const {nome, email, veiculo} = request.body;

    const user = await connection ('forms').insert({
        nome,
        email,
        veiculo,
    });

    return response.json ('Mensagem enviada!');
});


//Ver os usuários que estão no banco de dados
app.get('/veruser', async (request, response) => {
    const mensagens = await connection ('user').select ('*');

    response.json({mensagens});
});

//Enviar os usuários para o banco de dados
app.post('/user', async(request, response) => {
    const {nome, idade, cpf, numero, email} = request.body;

    const user = await connection ('user').insert({
        nome,
        idade,
        cpf,
        numero,
        email,
    });

    return response.json ('Mensagem enviada!');
});

//Deletar um usuários do banco de dados
app.delete('/apaga/:nome', async(request, response) => {
    const nome  = request.params;
    console.log(nome);
    const Mensagem = await connection('user').where(nome).delete();
    response.send('Deletado!');
});

//Achar um usuário no banco de dados
app.get('/acharuser/:nome', async(request, response) => {
    const nome  = request.params;
    console.log(nome);
    const Mensagem = await connection('user').where(nome).select('*');
    response.json(Mensagem);
});

