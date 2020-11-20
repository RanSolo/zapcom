import * as React from 'react';
// eslint-disable-next-line import/no-unresolved, import/no-extraneous-dependencies
import { Todo } from '@zapcom/data';
import './todos.css';
import { Handler, NextFunction } from 'express';

export const Todos = (props: { todos: Todo[]; handleClick: Handler }) => {
  const nextFunction: NextFunction = (e) => {
    console.log('eeeeee', e);
  };
  return (
    <ul id="todos">
      {props.todos.map((t) => (
        <li
          className={'todo'}
          value={t.title}
          onClick={(e) => props.handleClick(e, t, nextFunction)}
          key={t.title}
        >
          {t.title}
        </li>
      ))}
    </ul>
  );
};

export default Todos;
