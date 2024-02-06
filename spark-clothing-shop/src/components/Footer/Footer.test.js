/* eslint-disable testing-library/prefer-screen-queries */
import React from 'react'; 
import { render } from '@testing-library/react';
import Footer from './Footer';

describe('Footer component', () => {
  it('renders the correct copyright text', () => {
    const { getByText } = render(<Footer />);
    const copyrightText = getByText(/Copyright 2023/);
    expect(copyrightText).toBeInTheDocument();
  });

  it('renders the correct "Built with Passion" text', () => {
    const { getByText } = render(<Footer />);
    const builtWithPassionText = getByText(/Built with Passion/);
    expect(builtWithPassionText).toBeInTheDocument();
  });
});
