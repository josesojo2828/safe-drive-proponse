'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { Shield } from 'lucide-react';

export default function LoginPage() {
    const router = useRouter();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        router.push('/dashboard');
    };

    return (
        <div className="auth-page">
            <div className="auth-card">
                <div className="auth-header">
                    <div className="auth-logo">
                        <Shield size={40} color="#3b82f6" />
                        <span className="auth-logo-text">SafeDrive</span>
                    </div>
                    <h1 className="auth-title">Bienvenido de vuelta</h1>
                    <p className="auth-subtitle">Ingresa tus credenciales para continuar</p>
                </div>

                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label className="form-label">Correo electrónico</label>
                        <input
                            type="email"
                            className="form-input"
                            placeholder="tu@email.com"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>

                    <div className="form-group">
                        <label className="form-label">Contraseña</label>
                        <input
                            type="password"
                            className="form-input"
                            placeholder="••••••••"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>

                    <button type="submit" className="btn btn-primary" style={{ width: '100%' }}>
                        Iniciar Sesión
                    </button>
                </form>

                <div className="auth-footer">
                    <p>
                        ¿No tienes cuenta?{' '}
                        <Link href="/register">Regístrate aquí</Link>
                    </p>
                </div>
            </div>
        </div>
    );
}
