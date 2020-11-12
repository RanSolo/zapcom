import * as React from 'react';
import { Todo } from '@zapcom/data';
import './todos.css';

/* eslint-disable-next-line */

export const Todos = (props: { todos: Todo[] }) => {
  return (
    <ul>
      {props.todos.map((t) => (
        <li className={'todo'} key={t.title}>{t.title}</li>
      ))}
    </ul>
  );
};

export default Todos;
