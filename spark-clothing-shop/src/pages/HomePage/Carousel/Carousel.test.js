import React from 'react'; 
import { render, screen } from '@testing-library/react';
import Carousel from './Carousel';

describe('Carousel component', () => {
  it('renders without crashing', () => {
    render(<Carousel />);
  });

  it('renders the indicators', () => {
    render(<Carousel />);
    const indicators = screen.getAllByRole('button');
    expect(indicators.length).toBe(3);
  });

  it('renders the first slide correctly', () => {
    render(<Carousel />);
    const firstSlide = screen.getByTestId('first-slide');
    expect(firstSlide).toBeInTheDocument();
    const firstSlideCaption = screen.getByTestId('first-slide-caption');
    expect(firstSlideCaption).toHaveTextContent('First slide label');
    expect(firstSlideCaption).toHaveTextContent('Some representative placeholder content for the first slide.');
  });

  it('renders the second slide correctly', () => {
    render(<Carousel />);
    const secondSlide = screen.getByTestId('second-slide');
    expect(secondSlide).toBeInTheDocument();
    const secondSlideCaption = screen.getByTestId('second-slide-caption');
    expect(secondSlideCaption).toHaveTextContent('Second slide label');
    expect(secondSlideCaption).toHaveTextContent('Some representative placeholder content for the second slide.');
  });

  it('renders the third slide correctly', () => {
    render(<Carousel />);
    const thirdSlide = screen.getByTestId('third-slide');
    expect(thirdSlide).toBeInTheDocument();
    const thirdSlideCaption = screen.getByTestId('third-slide-caption');
    expect(thirdSlideCaption).toHaveTextContent('Third slide label');
    expect(thirdSlideCaption).toHaveTextContent('Some representative placeholder content for the third slide.');
  });

  it('renders the previous button', () => {
    render(<Carousel />);
    const prevButton = screen.getByTestId('prev-button');
    expect(prevButton).toBeInTheDocument();
  });

  it('renders the next button', () => {
    render(<Carousel />);
    const nextButton = screen.getByTestId('next-button');
    expect(nextButton).toBeInTheDocument();
  });
});

