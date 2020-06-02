import express, { response } from 'express';

const app = express();

const users = [
  'Adriano',
  'Grace',
  'Thor',
  'Joaz'
];

app.get('/users', (request, response) => {
  response.json(users);
});

app.post('/users', (request, response) => {
  const user = {
    name: 'Adriano',
    email: 'siva.souza.adriano@gmail.com'
  };

  return response.json(user);

});

app.listen(3333);

