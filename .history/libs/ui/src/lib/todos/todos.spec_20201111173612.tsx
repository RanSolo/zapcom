import * as React from 'react';
import { render } from '@testing-library/react';
// eslint-disable import/no-unresolved, import/no-extraneous-dependencies
import { Todos } from '@zapcom/ui';

import { Todo } from '@zapcom/data';

const todos: Todo[] = [{ title: 'Do Dis' }, { title: 'Do Dat' }];
describe('Todos', () => {

  it('should render successfully', () => {
    const { baseElement } = render(<Todos todos={todos} />);
    expect(baseElement).toBeTruthy();
  });
});
