import { Request, Response } from 'express';
import knex from '../database/connection';

class TaskController {
  async create(request: Request, response: Response){
    const task = request.body;

    await knex('tasks').insert(task);

    return response.json(task);
  }

  async index(request: Request, response: Response){
    const tasks = await knex('tasks');

    return response.json(tasks);
  }

  async update(request: Request, response: Response){
    const task = request.params.id;
    const content = request.body;

    await knex('tasks')
      .where('id', task)
      .update(content);

    return response.json(content);
  }

  async delete(request: Request, response: Response){
    const task = request.params.id;

    await knex('tasks')
      .where('id', task)
      .delete();

    return response.json({ message: 'Task deleted successfully.' })
  }
}

export default TaskController;
