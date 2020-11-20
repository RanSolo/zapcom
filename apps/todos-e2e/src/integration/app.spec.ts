import { fetchTodos, getTodos, getAddTodoButton } from '../support/app.po';

describe('todos', () => {
  beforeEach(
    () => {
      cy.visit('/')
    });

  it('should display todos', async () => {

    // Custom command example, see `../support/commands.ts` file
    //cy.login('my-email@something.com', 'myPassword');

    // Function helper example, see `../support/app.po.ts` file

    const todos = await fetchTodos()

    let count = todos.length
    getTodos().should((t) => expect(t.length).equal(count));
    getAddTodoButton().click().then(() => count += 1);
    getTodos().should((t) => expect(t.length).equal(count));

  });
});
