import * as React from 'react';
import { render } from '@testing-library/react';
// eslint-disable-next-line import/no-unresolved, import/no-extraneous-dependencies
import {Todos} from '@zapcom/ui';
// eslint-disable-next-line import/no-unresolved, import/no-extraneous-dependencies
import { Todo } from '@zapcom/data';

const todos: Todo[] = [{ title: 'Do Dis' }, { title: 'Do Dat' }];

describe('Ui', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Todos todos={todos} />);
    expect(baseElement).toBeTruthy();
  });
});
