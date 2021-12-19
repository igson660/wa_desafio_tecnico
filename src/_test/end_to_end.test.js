import React from 'react';
import renderWithRouter from './renderWithHistory';
import Home from '../Pages/Home';
import { fireEvent } from '@testing-library/react'


describe('Home page tests', () => {
  it('find text on home page', () => {
    const { getByText, history, getByPlaceholderText } = renderWithRouter(<Home />);
    history.push('/');

    const title = getByText(/choose the number of questions/i);
    const button = getByText(/next/i);
    const input = getByPlaceholderText(/enter a number/i);

    fireEvent.change(input, {target: {value: 2}})

    expect(title).toBeInTheDocument();
    expect(button).toBeInTheDocument();
    expect(input).toBeInTheDocument();
    expect(input.value).toBe("2")
  });
});
