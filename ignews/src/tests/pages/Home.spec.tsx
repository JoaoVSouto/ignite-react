import { render, screen } from '@testing-library/react';

import Home from '../../pages';

jest.mock('next-auth/client', () => ({
  useSession: () => [null, false],
}));

describe('<Home />', () => {
  it('renders correctly', () => {
    render(<Home product={{ amount: 'R$10,00', priceId: 'fake-price-id' }} />);

    expect(screen.getByText('for R$10,00 month')).toBeInTheDocument();
  });
});
