import { render, screen, fireEvent } from '@testing-library/react';
import App from '../src/App.jsx';

describe('Breating Test', () => {
    test('It Works', () => {
        expect(1 + 1).toEqual(2);
    });
});

describe('App', () => {
    test('It displays 0 to start', () => {
        render(<App />);

        const zeroCount = screen.getByText('0');

        expect(zeroCount).toBeInTheDocument;
    });

    test('It displays 1 after a click', () => {
        render(<App />);

        const button = screen.getByRole('button', { name: 'Click Me!' });
        const zeroCount = screen.getByText('0');

        expect(zeroCount).toBeInTheDocument;

        fireEvent.click(button);

        const oneCount = screen.getByText('1');

        expect(oneCount).toBeInTheDocument;
    });
});
