import { render, screen } from '@testing-library/react';
import App from './App'

it('should render hellod world correctly ', () => {
    render(<App />);

    const headingElement = screen.getByText("Hello World");

    expect(headingElement).toBeInTheDocument();
})