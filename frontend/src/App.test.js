import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import App from './App';

test('renders header', () => {
  render(<App />);
  const headerElement = screen.getByText(/City Data/i);
  console.log(headerElement);
  expect(headerElement).toHaveTextContent("City Data");
});