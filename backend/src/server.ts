import express from 'express';

const app = express();

app.get('/', (request, response) => {
  return response.send('Hello from server.ts');
});

app.listen(3333);
