import express, { response } from 'express';

const app = express();

app.use(express.json());

const users = [
  'Adriano',
  'Grace',
  'Thor',
  'Joaz',
  'Mariano'
];

app.get('/users', (request, response) => {
  const search: any = request.query.search;

  const filteredUsers = search ? users.filter(user => user.includes(String(search))) : users;

  response.json(filteredUsers);
});

app.get('/users/:id', (request, response) => {
  const id = Number(request.params.id);

  let user = users[id];

  if (!user) {
    user = 'Usuário não encontrado';
  }

  return response.json(user);
})

app.post('/users', (request, response) => {
  const data = request.body;



  const user = {
    name: data.name,
    email: data.email
  };

  return response.json(user);

});

app.listen(3333);

