const express = require('express')
const app = express()
const port = 3000

app.use(express.json());

app.post('/dados', (req, res) => {
    const usuarios = req.body;
  console.log('Dados recebidos:', usuarios);
  res.send('Dados Em Segurança!');

  for(let i = 0; i < usuarios.length; ++i) {
  if(usuarios[i].cargo === 'Desenvolvedora' || usuarios[i].cargo === 'Desenvolvedor') {
  console.log(`Esses são os usuarios que são desenvolvedor(a): ${usuarios[i].nome}, ${usuarios[i].email}, ${usuarios[i].telefone}\n`);
  };
  };
});

app.listen(port, () => {
  console.log(`Start server: http://localhost:${port}`);
});