import * as React from 'react';
const fetch = require("node-fetch");
const base_url = window.location.origin;
// eslint-disable-next-line import/no-unresolved, import/no-extraneous-dependencies
import { Todo } from '@zapcom/data';
// eslint-disable-next-line import/no-unresolved, import/no-extraneous-dependencies
import { Todos } from '@zapcom/ui';

const App = () => {
  const [todos, setTodos] = React.useState<Todo[]>([]);

  React.useEffect(() => {
    fetch(`${base_url}http://localhost:4200/api/todos`)
      .then((_) => _.json())
      .then(setTodos);
  }, []);

  function addTodo() {
    fetch('/api/addTodo', {
      method: 'POST',
      body: '',
    })
      .then((_) => _.json())
      .then((newTodo) => {
        setTodos([...todos, newTodo]);
      });
  }

  return (
    <>
      <h1>Todos</h1>
      <Todos todos={todos} />
      <button id={'add-todo'} onClick={addTodo}>
        Add Todo
      </button>
    </>
  );
};

export default App;
