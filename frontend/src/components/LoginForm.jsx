import React, { useState } from 'react';
import "../index.css";
import "../App.css";
import { getAuth, signInWithPopup, GoogleAuthProvider, FacebookAuthProvider } from "firebase/auth";
import { initializeApp } from "firebase/app";
import '@testing-library/jest-dom';


const firebaseConfig = {
    apiKey: "YOUR_API_KEY",
    authDomain: "YOUR_AUTH_DOMAIN",
    projectId: "YOUR_PROJECT_ID",
    storageBucket: "YOUR_STORAGE_BUCKET",
    messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
    appId: "YOUR_APP_ID"
};

// Inicializar Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

const LoginForm = ({ switchToRegister }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleGoogleLogin = async () => {
        const provider = new GoogleAuthProvider();
        try {
            const result = await signInWithPopup(auth, provider);
            alert(`Bienvenido ${result.user.displayName}`);
        } catch (error) {
            setError(error.message);
        }
    };

    const handleFacebookLogin = async () => {
        const provider = new FacebookAuthProvider();
        try {
            const result = await signInWithPopup(auth, provider);
            alert(`Bienvenido ${result.user.displayName}`);
        } catch (error) {
            setError(error.message);
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Valida el mail
        if (!/\S+@\S+\.\S+/.test(email)) {
            setError('Por favor, introduzca un email válido.');
            return;
        }
        setError('');
        alert('Login realizado con éxito!');
    };

    return (
        <div className="w-full min-h-screen flex items-center justify-center loginpage">
            <div className="w-[32%] h-auto py-10 px-2 rounded-xl logincard">
                <div className="w-full flex justify-center items-center gap-4 mt-4">
                    <button
                        className="auth-button auth-google"
                        onClick={handleGoogleLogin}>
                        <svg xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            fill="currentColor"
                            className="bi bi-google text-base"
                            viewBox="0 0 16 16">
                            <path d="M15.545 6.558a9.4 9.4 0 0 1 .139 1.626c0 2.434-.87 4.492-2.384 5.885h.002C11.978 15.292 10.158 16 8 16A8 8 0 1 1 8 0a7.7 7.7 0 0 1 5.352 2.082l-2.284 2.284A4.35 4.35 0 0 0 8 3.166c-2.087 0-3.86 1.408-4.492 3.304a4.8 4.8 0 0 0 0 3.063h.003c.635 1.893 2.405 3.301 4.492 3.301 1.078 0 2.004-.276 2.722-.764h-.003a3.7 3.7 0 0 0 1.599-2.431H8v-3.08z" />
                        </svg>

                    </button>

                    <button
                        className="auth-button auth-facebook"
                        onClick={handleFacebookLogin}>
                        <svg xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            fill="currentColor"
                            className="bi bi-facebook"
                            viewBox="0 0 16 16">
                            <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951" />
                        </svg>

                    </button>
                </div>
                <h2 className="text-2xl font-bold text-center my-4 tituloinicio">Iniciar Sesión</h2>
                <form onSubmit={handleSubmit}>
                    <div className="form-control mb-4">
                        <label className="input input-bordered flex items-center gap-2">
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
                            placeholder="Ingrese su contraseña"
                            className="input input-bordered w-full"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                    <div className="recall-forget">
                        <label>
                            <input type="checkbox" />
                            Lembre de mim
                        </label>
                        <a href="#">¿Olvidaste tu contraseña?</a>
                    </div>


                    {error && <p className="text-red-500 text-sm mb-4">{error}</p>}
                    <button type="submit" className="btn btn-primary w-full">
                        Entrar
                    </button>
                </form>
                <p className="text-center mt-4">
                    ¿No tienes una cuenta?{' '}
                    <button
                        onClick={switchToRegister}
                        className="text-blue-500 hover:underline"
                    >
                        Regístrate aquí
                    </button>
                </p>
            </div>


        </div>
    );
};

export default LoginForm;