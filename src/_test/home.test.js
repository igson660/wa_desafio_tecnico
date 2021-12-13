import React from 'react';
import renderWithRouter from './renderWithHistory';
import App from '../App';

describe('Home page tests', () => {
    it('find text on home page', () => {
    const { getByText, history } = renderWithRouter(<App />);
    history.push('/');

    const title = getByText(/choose the number of questions/i);
    const QuantitySeletors = getByText(/choose the number of questions/i);

    expect(title).toBeInTheDocument();
    expect(QuantitySeletors).toBeInTheDocument();
  });
});
