import React from 'react'; 
import { render, screen, fireEvent } from '@testing-library/react';
import Feedback from './Feedback';

describe('Feedback', () => {
  it('renders form inputs', () => {
    const { container } = render(<Feedback />);
    const nameInput = screen.getByLabelText(container, 'Name');
    const emailInput = screen.getByLabelText(container, 'Email');
    const feedbackInput = screen.getByLabelText(container, 'Feedback');
    const checkboxInput = screen.getByLabelText(container, 'Check me out');
    const submitButton = screen.getByText(container, 'Submit Feedback');

    expect(nameInput).toBeInTheDocument();
    expect(emailInput).toBeInTheDocument();
    expect(feedbackInput).toBeInTheDocument();
    expect(checkboxInput).toBeInTheDocument();
    expect(submitButton).toBeInTheDocument();
  });

  it('submits form', () => {
    const handleSubmit = jest.fn();
    const { container } = render(<Feedback onSubmit={handleSubmit} />);
    const nameInput = screen.getByLabelText(container, 'Name');
    const emailInput = screen.getByLabelText(container, 'Email');
    const feedbackInput = screen.getByLabelText(container, 'Feedback');
    const checkboxInput = screen.getByLabelText(container, 'Check me out');
    const submitButton = screen.getByText(container, 'Submit Feedback');

    fireEvent.change(nameInput, { target: { value: 'John Doe' } });
    fireEvent.change(emailInput, { target: { value: 'johndoe@example.com' } });
    fireEvent.change(feedbackInput, { target: { value: 'Awesome!' } });
    fireEvent.click(checkboxInput);
    fireEvent.click(submitButton);

    expect(handleSubmit).toHaveBeenCalledWith({
      name: 'John Doe',
      email: 'johndoe@example.com',
      feedback: 'Awesome!',
      checkbox: true,
    });
  });
});
