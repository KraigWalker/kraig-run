import { render } from '@testing-library/react';

import RunSiteFooter from './RunSiteFooter';

describe('RunSiteFooter', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<RunSiteFooter />);
    expect(baseElement).toBeTruthy();
  });
});
