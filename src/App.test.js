import { act, render, screen } from '@testing-library/react';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom';

test('renders learn react link', () => {
  act(()=>{
    render(
      <Router>
        <App />
      </Router>
    );
  })
  
  const linkElement = screen.getByText(/ShowStar/i);
  expect(linkElement).toBeInTheDocument();
});
