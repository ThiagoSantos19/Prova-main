const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

app.post('/dados', (req, res) => {
    const usuarios = req.body;
    console.log('Dados recebidos:', usuarios);

    // Manipulação de dados: adicionar um novo campo
    const usuarioComNovoCampo = {
        ...usuarios,
        idade: 23,
        Função: 'Namorado de Hemilyn',
        status: 'Registrado'
    };

    console.log('Dados manipulados:', usuarioComNovoCampo);

    res.json(usuarioComNovoCampo);  // Retorna os dados manipulados ao cliente (Postman)
});

app.listen(port, () => {
  console.log(`Start server: http://localhost:${port}`);
});