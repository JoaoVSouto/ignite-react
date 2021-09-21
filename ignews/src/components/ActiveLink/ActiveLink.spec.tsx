import { render } from '@testing-library/react';

import ActiveLink from '.';

jest.mock('next/router', () => ({
  useRouter: () => ({
    asPath: '/',
  }),
}));

describe('<ActiveLink />', () => {
  it('renders correctly', () => {
    const { getByText } = render(
      <ActiveLink href="/" activeClassName="active">
        <a>Home</a>
      </ActiveLink>
    );

    expect(getByText('Home')).toBeInTheDocument();
  });

  it('adds active class if the link is referencing current path', () => {
    const { getByText } = render(
      <ActiveLink href="/" activeClassName="active">
        <a>Home</a>
      </ActiveLink>
    );

    expect(getByText('Home')).toHaveClass('active');
  });
});
