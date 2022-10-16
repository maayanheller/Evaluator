import { render } from '@testing-library/react';

import NumberGrid from './number-grid';

describe('NumberGrid', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<NumberGrid />);
    expect(baseElement).toBeTruthy();
  });
});
