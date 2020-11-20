import * as React from 'react';
// eslint-disable-next-line import/no-unresolved, import/no-extraneous-dependencies
import { render } from '@testing-library/react';
// eslint-disable-next-line import/no-unresolved, import/no-extraneous-dependencies
import { Todo } from '@zapcom/data';
// eslint-disable-next-line import/no-unresolved, import/no-extraneous-dependencies
import { ShowTodo } from '@zapcom/ui';

const todo: Todo[] = [{ title: 'Do Dis' }];
describe('Todo', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ShowTodo todo={todo} />);
    expect(baseElement).toBeTruthy();
  });
});
