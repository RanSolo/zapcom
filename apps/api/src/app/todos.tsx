import { Express } from 'express';
/* eslint-disable-next-line */
import { Todo } from '@zapcom/data';

const todos: Todo[] = [{ title: 'Do Dis' }, { title: 'Do Dat' }];

export function addTodoRoutes(app: Express) {
  app.get('/api/todos', (req, resp) => {
    return resp.send(todos);
  });
  app.post('/api/addTodo', (req, resp) => {
    const newTodo = {
      title: `New todo ${Math.floor(Math.random() * 1000)}`,
    };
    todos.push(newTodo);
    resp.send(newTodo);
  });
}

