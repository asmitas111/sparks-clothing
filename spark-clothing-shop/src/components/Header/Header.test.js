import React from 'react'; 
import { render, screen } from '@testing-library/react';
import Header from './Header';

describe('Header', () => {
  it('renders correctly', () => {
    render(<Header />);
    expect(screen.getByRole('navigation')).toBeInTheDocument();
    expect(screen.getByAltText('london')).toBeInTheDocument();
    expect(screen.getByText('cart')).toBeInTheDocument();
  });
});

