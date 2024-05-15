import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import App from './App';

test('renders header', () => {
  render(<App />);
  const headerElement = screen.getByText(/prefectures.tokyo/i); // TODO: handle i18n correctly
  console.log(headerElement);
  expect(headerElement).toHaveTextContent("prefectures.tokyo");
});