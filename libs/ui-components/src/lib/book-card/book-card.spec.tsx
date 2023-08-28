import { render } from '@testing-library/react';

import BookCard from './book-card';

describe('Card', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<BookCard />);
    expect(baseElement).toBeTruthy();
  });
});
