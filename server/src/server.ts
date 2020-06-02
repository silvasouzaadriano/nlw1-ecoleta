import express from 'express';

const app = express();

app.get('/users', (request, response) => {
  console.log('Listagem de usuários');

  response.json([
    'Adriano',
    'Grace',
    'Thor',
    'Joaz'
  ]);
});

app.listen(3333);

