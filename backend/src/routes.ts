import express from 'express';
import TaskController from './controllers/TaskController';

const taskController = new TaskController;

const routes = express.Router();

routes.post('/tasks', taskController.create);
routes.get('/tasks', taskController.index);
routes.put('/tasks/:id', taskController.update);
routes.delete('/tasks/:id', taskController.delete);

export default routes;
