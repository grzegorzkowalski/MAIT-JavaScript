import { render, screen } from '@testing-library/react';
import Form from './Form';
import userEvent from "@testing-library/user-event";

test('renders learn react link', () => {
    render(<Form />);
    const btn = screen.getByRole('button', { name: /kup/i });
    expect(btn).toBeInTheDocument();
});

test('Render h1 with send text', async () => {
    render(<Form />);
    const btn = screen.getByRole('button', { name: /kup/i });
    userEvent.click(btn);
    const header = await screen.getByRole('heading');
    expect(header).toBeInTheDocument();
});

test('Render h1 with send text2', async () => {
    render(<Form />);
    const btn = screen.getByRole('button', { name: /kup/i });
    userEvent.click(btn);
    const header = await screen.getByRole('heading');
    expect(header).toHaveTextContent("Formularz wysłany");
});


