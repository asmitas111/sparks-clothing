import React from 'react'; 
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import axios from 'axios';
import ContactUsPage from './ContactUsPage';

jest.mock('axios');

describe('ContactUsPage', () => {
  it('should submit the form data', async () => {
    const responseData = {
      data: {
        name: 'John Doe',
        email: 'johndoe@example.com',
        phone: '1234567890',
        message: 'Hello there'
      }
    };

    axios.post.mockResolvedValue(responseData);

    render(<ContactUsPage />);

    const nameInput = screen.getByPlaceholderText('Name');
    const emailInput = screen.getByPlaceholderText('Email');
    const phoneInput = screen.getByPlaceholderText('Phone');
    const messageInput = screen.getByPlaceholderText('Message');
    const submitButton = screen.getByText('Submit');

    fireEvent.change(nameInput, { target: { value: 'John Doe' } });
    fireEvent.change(emailInput, { target: { value: 'johndoe@example.com' } });
    fireEvent.change(phoneInput, { target: { value: '1234567890' } });
    fireEvent.change(messageInput, { target: { value: 'Hello there' } });
    fireEvent.click(submitButton);

    await waitFor(() => {
      expect(axios.post).toHaveBeenCalledWith('http://localhost:3000/profile', responseData.data);
    });
  });
});
