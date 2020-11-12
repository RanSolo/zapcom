import * as React from 'react';
// eslint-disable-next-line import/no-unresolved, import/no-extraneous-dependencies
import { Todo } from '@zapcom/data';
import './todos.css';

/* eslint-disable-next-line */

export const Todos = (props: { todos: Todo[] }) => {
  return (
    <ul>
      {props.todos.map((t) => (
        <li className={'todo 2'} key={t.title}>{t.title}</li>
      ))}
    </ul>
  );
};

export default Todos;
