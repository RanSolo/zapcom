import fetch from 'node-fetch';
const base_url = `${window.location.origin}/api`;

export const getTodos = () => cy.get('li.todo').as('getTodos');
export const getAddTodoButton = () => cy.get('button#add-todo');
export const fetchTodos = () => {
  return fetch(`${base_url}/todos`)
    .then((_) => _.json())
    .then((ts) => {
      console.log('1tdos', ts);
      return ts
    })
    .catch((e) => console.log('e', e));
}
