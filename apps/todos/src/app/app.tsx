import * as React from 'react';
// eslint-disable-next-line import/no-unresolved, import/no-extraneous-dependencies
import { Todo } from '@zapcom/data';
// eslint-disable-next-line import/no-unresolved, import/no-extraneous-dependencies
import { Todos, ShowTodo } from '@zapcom/ui';

import fetch from 'node-fetch';

const base_url = `${window.location.origin}/api`;
const App = () => {
  const [todos, setTodos] = React.useState<Todo[]>([]);
  const [todo, setTodo] = React.useState<Todo[]>([]);

  React.useEffect(() => {
    fetch(`${base_url}/todos`)
      .then((_) => _.json())
      .then((tds) => setTodos(tds));
  }, []);

  function addTodo() {
    fetch(`${base_url}/addTodo`, {
      method: 'POST',
      body: '',
    })
      .then((_) => _.json())
      .then((newTodo) => {
        setTodos([...todos, newTodo]);
      });
  }

  const handleClick = (e: Event, todo: Todo[]) => {
    setTodo(todo);
  };
  return (
    <>
      <h1>Welcome to Todos!</h1>
      <h4>Selected Todo:</h4>
      <ShowTodo todo={todo} />
      <Todos todos={todos} handleClick={handleClick} />
      <button id={'add-todo'} onClick={addTodo}>
        Add Todo
      </button>
    </>
  );
};

export default App;
