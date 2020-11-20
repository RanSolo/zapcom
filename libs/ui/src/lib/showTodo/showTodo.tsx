import * as React from 'react';
/* eslint-disable-next-line */
import { Todo } from '@zapcom/data'; // import ts interface
import './todo.css';

/* eslint-disable-next-line */
//export interface TodoProps {}
//export const Todo = (props: TodoProps) => {
export function ShowTodo(props: { todo: Todo[] }) {
  return (
    <h3 style={{ color: 'red', backgroundColor: 'black' }}>
      {props.todo.title}
    </h3>
  );
}

export default ShowTodo;
