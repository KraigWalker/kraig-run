import { render } from '@testing-library/react';

import SiteHeader from './SiteHeader';

describe('SiteHeader', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<SiteHeader />);
    expect(baseElement).toBeTruthy();
  });
});
