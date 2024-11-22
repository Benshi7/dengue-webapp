import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import RegisterForm from './RegisterForm';

test('calls switchToLogin function when "Inicia sesión" is clicked', () => {
    const switchToLoginMock = vi.fn();  // Usamos vi.fn() en Vitest en lugar de jest.fn()
    render(<RegisterForm switchToLogin={switchToLoginMock} />);

    fireEvent.click(screen.getByText(/Inicia sesión/i));

    expect(switchToLoginMock).toHaveBeenCalledTimes(1);
});

test('renders the registration form', () => {
    render(<RegisterForm switchToLogin={() => { }} />);
    expect(screen.getByPlaceholderText(/Ingrese su nombre/i)).toBeInTheDocument();
    expect(screen.getByPlaceholderText(/Ingrese su apellido/i)).toBeInTheDocument();
    expect(screen.getByPlaceholderText(/Ingrese su email/i)).toBeInTheDocument();
    expect(screen.getByPlaceholderText(/Cree su contraseña/i)).toBeInTheDocument();
    expect(screen.getByPlaceholderText(/Confirme su contraseña/i)).toBeInTheDocument();
});