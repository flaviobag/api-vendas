import { Router } from 'express';

const routes = Router();

routes.get('/', (resquest, response) => {
  return response.json({ message: 'Hello Dev' });
});

export default routes;
