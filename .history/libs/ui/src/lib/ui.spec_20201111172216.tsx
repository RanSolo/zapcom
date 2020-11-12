import * as React from 'react';
import { render } from '@testing-library/react';

import {Todos} from '@zapcom/ui';

describe('Ui', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Ui />);
    expect(baseElement).toBeTruthy();
  });
});
