import React, { useState } from 'react';

const RegisterForm = ({ switchToLogin }) => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        // Validar campos vacíos
        if (!firstName || !lastName) {
            setError('Por favor, complete todos los campos.');
            return;
        }

        // Validar email
        if (!/\S+@\S+\.\S+/.test(email)) {
            setError('Por favor, introduzca un email válido.');
            return;
        }

        // Validar que las contraseñas coincidan
        if (password !== confirmPassword) {
            setError('Las contraseñas no coinciden.');
            return;
        }

        setError('');
        alert('Cuenta registrada con éxito!');
        console.log({
            firstName,
            lastName,
            email,
        });
    };

    return (
        <div className="w-full min-h-screen flex items-center justify-center registerpage">
            <div className="w-[32%] h-auto py-10 px-2 rounded-xl registerncard">
                <h2 className="text-2xl font-bold text-center mb-4">Regístrate</h2>
                <form onSubmit={handleSubmit}>

                    <div className="form-control mb-4">
                        <label className="label">
                            <span className="label-text"></span>
                        </label>
                        <input
                            type="text"
                            placeholder="Ingrese su nombre"
                            className="input input-bordered w-full"
                            value={firstName}
                            onChange={(e) => setFirstName(e.target.value)}
                        />
                    </div>


                    <div className="form-control mb-4">
                        <label className="label">
                            <span className="label-text"></span>
                        </label>
                        <input
                            type="text"
                            placeholder="Ingrese su apellido"
                            className="input input-bordered w-full"
                            value={lastName}
                            onChange={(e) => setLastName(e.target.value)}
                        />
                    </div>


                    <div className="form-control mb-4">
                        <label className="label">
                            <span className="label-text"></span>
                        </label>
                        <input
                            type="email"
                            placeholder="Ingrese su email"
                            className="input input-bordered w-full"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>


                    <div className="form-control mb-4">
                        <label className="label">
                            <span className="label-text"></span>
                        </label>
                        <input
                            type="password"
                            placeholder="Cree su contraseña"
                            className="input input-bordered w-full"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>


                    <div className="form-control mb-4">
                        <label className="label">
                            <span className="label-text"></span>
                        </label>
                        <input
                            type="password"
                            placeholder="Confirme su contraseña"
                            className="input input-bordered w-full"
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                        />
                    </div>
                    {error && <p className="text-red-400 text-sm mb-4">{error}</p>}
                    <button type="submit" className="btn btn-primary w-full">
                        Registrarse
                    </button>
                </form>
                <p className="text-center mt-4">
                    ¿Ya tienes una cuenta?{' '}
                    <button
                        onClick={switchToLogin}
                        className="text-blue-500 hover:underline"
                    >
                        Inicia sesión
                    </button>
                </p>
            </div>
        </div>
    );
};

export default RegisterForm;
