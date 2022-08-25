import { Router } from 'express';

const routes = Router();

routes.get('/', (request, response) => {
  return response.json('Hello Dev!');
});

export default routes;
