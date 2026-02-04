'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Shield } from 'lucide-react';

export default function RegisterPage() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        company: '',
        password: '',
        confirmPassword: '',
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Form does nothing as per requirements
        alert('Registro enviado (demo - sin funcionalidad)');
    };

    return (
        <div className="auth-page">
            <div className="auth-card">
                <div className="auth-header">
                    <div className="auth-logo">
                        <Shield size={40} color="#3b82f6" />
                        <span className="auth-logo-text">SafeDrive</span>
                    </div>
                    <h1 className="auth-title">Crear cuenta</h1>
                    <p className="auth-subtitle">Comienza a gestionar tu flota hoy</p>
                </div>

                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label className="form-label">Nombre completo</label>
                        <input
                            type="text"
                            name="name"
                            className="form-input"
                            placeholder="Juan Pérez"
                            value={formData.name}
                            onChange={handleChange}
                        />
                    </div>

                    <div className="form-group">
                        <label className="form-label">Correo electrónico</label>
                        <input
                            type="email"
                            name="email"
                            className="form-input"
                            placeholder="tu@empresa.com"
                            value={formData.email}
                            onChange={handleChange}
                        />
                    </div>

                    <div className="form-group">
                        <label className="form-label">Empresa</label>
                        <input
                            type="text"
                            name="company"
                            className="form-input"
                            placeholder="Nombre de tu empresa"
                            value={formData.company}
                            onChange={handleChange}
                        />
                    </div>

                    <div className="form-group">
                        <label className="form-label">Contraseña</label>
                        <input
                            type="password"
                            name="password"
                            className="form-input"
                            placeholder="••••••••"
                            value={formData.password}
                            onChange={handleChange}
                        />
                    </div>

                    <div className="form-group">
                        <label className="form-label">Confirmar contraseña</label>
                        <input
                            type="password"
                            name="confirmPassword"
                            className="form-input"
                            placeholder="••••••••"
                            value={formData.confirmPassword}
                            onChange={handleChange}
                        />
                    </div>

                    <button type="submit" className="btn btn-primary" style={{ width: '100%' }}>
                        Crear Cuenta
                    </button>
                </form>

                <div className="auth-footer">
                    <p>
                        ¿Ya tienes cuenta?{' '}
                        <Link href="/login">Inicia sesión</Link>
                    </p>
                </div>
            </div>
        </div>
    );
}
