'use client';

import React, { useState } from 'react';
import {
    Eye, EyeOff, Mail, Lock, ArrowRight, ShieldCheck, AlertCircle,
    Menu, Bell, Navigation, MapPin, Clock, ChevronUp,
    User, X, LogOut, Settings, FileText, Map as MapIcon, CheckCircle,
    Calendar, ChevronLeft, ChevronRight, PlayCircle, Flag,
    BarChart2, Download, Camera, Car, Moon
} from 'lucide-react';

// --- COLORS ---
const colors = {
    navy: '#1A2B49',
    green: '#4CAF50',
    white: '#FFFFFF',
    bg: '#F3F4F6',
    red: '#EF4444',
    gray100: '#f3f4f6',
    gray200: '#e5e7eb',
    gray300: '#d1d5db',
    gray400: '#9ca3af',
    gray500: '#6b7280',
    gray600: '#4b5563',
    gray800: '#1f2937',
    gray900: '#111827',
};

// --- STYLES ---
const styles = {
    container: {
        fontFamily: 'Inter, system-ui, -apple-system, sans-serif',
        minHeight: '100vh',
        height: '100vh',
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        backgroundColor: colors.gray100,
    } as React.CSSProperties,
    phoneFrame: {
        width: '100%',
        maxWidth: '430px',
        minHeight: '100vh',
        backgroundColor: colors.white,
        boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
        position: 'relative' as const,
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column' as const,
    } as React.CSSProperties,
    input: {
        width: '100%',
        padding: '14px 14px 14px 44px',
        border: `1px solid ${colors.gray200}`,
        borderRadius: '12px',
        fontSize: '14px',
        outline: 'none',
        backgroundColor: colors.white,
    } as React.CSSProperties,
    label: {
        fontSize: '10px',
        fontWeight: 700,
        color: colors.gray400,
        textTransform: 'uppercase' as const,
        letterSpacing: '0.05em',
        marginLeft: '4px',
        marginBottom: '6px',
        display: 'block',
    } as React.CSSProperties,
    btn: {
        width: '100%',
        padding: '16px',
        borderRadius: '12px',
        backgroundColor: colors.navy,
        color: colors.white,
        fontWeight: 700,
        fontSize: '14px',
        border: 'none',
        cursor: 'pointer',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '8px',
        boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)',
    } as React.CSSProperties,
    card: {
        backgroundColor: colors.white,
        borderRadius: '16px',
        padding: '20px',
        boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
        border: `1px solid ${colors.gray100}`,
    } as React.CSSProperties,
    header: {
        position: 'absolute' as const,
        top: 0,
        left: 0,
        right: 0,
        zIndex: 20,
        padding: '48px 20px 16px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
    } as React.CSSProperties,
    iconBtn: {
        padding: '12px',
        borderRadius: '50%',
        backgroundColor: colors.white,
        boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
        border: `1px solid ${colors.gray100}`,
        cursor: 'pointer',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    } as React.CSSProperties,
};

// --- LOGIN SCREEN ---
const LoginScreen = ({ onLogin }: { onLogin: (user: any) => void }) => {
    const [email, setEmail] = useState('admin@empresa.com');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);
        setError('');
        setTimeout(() => {
            if (email && password.length > 0) {
                onLogin({
                    email, name: 'Carlos Admin', role: 'Gestor de Flota',
                    avatar: 'https://i.pravatar.cc/150?u=admin', vehicles: 12
                });
            } else {
                setError('Por favor ingresa tus credenciales.');
                setIsLoading(false);
            }
        }, 1000);
    };

    return (
        <div style={{ height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: colors.gray100, padding: '20px' }}>
            <div style={{ width: '100%', backgroundColor: colors.white, borderRadius: '24px', boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)', overflow: 'hidden' }}>
                <div style={{ height: '8px', backgroundColor: colors.navy }} />
                <div style={{ padding: '48px 28px' }}>
                    <div style={{ textAlign: 'center', marginBottom: '36px' }}>
                        <div style={{ width: '64px', height: '64px', borderRadius: '16px', backgroundColor: colors.navy, display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 20px', boxShadow: '0 10px 15px rgba(0,0,0,0.1)', transform: 'rotate(3deg)' }}>
                            <ShieldCheck style={{ color: colors.white, width: 32, height: 32 }} />
                        </div>
                        <h1 style={{ fontSize: '24px', fontWeight: 700, color: colors.navy, marginBottom: '8px' }}>Bienvenido</h1>
                        <p style={{ color: colors.gray500, fontSize: '14px' }}>Panel de Control de Flota</p>
                    </div>
                    <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                        <div>
                            <label style={styles.label}>Email</label>
                            <div style={{ position: 'relative' }}>
                                <Mail style={{ position: 'absolute', left: 14, top: '50%', transform: 'translateY(-50%)', width: 20, height: 20, color: colors.gray400 }} />
                                <input type="email" value={email} onChange={e => setEmail(e.target.value)} style={styles.input} placeholder="usuario@empresa.com" />
                            </div>
                        </div>
                        <div>
                            <label style={styles.label}>Contraseña</label>
                            <div style={{ position: 'relative' }}>
                                <Lock style={{ position: 'absolute', left: 14, top: '50%', transform: 'translateY(-50%)', width: 20, height: 20, color: colors.gray400 }} />
                                <input type={showPassword ? 'text' : 'password'} value={password} onChange={e => setPassword(e.target.value)} style={{ ...styles.input, paddingRight: 44 }} placeholder="••••••••" />
                                <button type="button" onClick={() => setShowPassword(!showPassword)} style={{ position: 'absolute', right: 14, top: '50%', transform: 'translateY(-50%)', background: 'none', border: 'none', cursor: 'pointer', padding: 0 }}>
                                    {showPassword ? <EyeOff style={{ width: 20, height: 20, color: colors.gray400 }} /> : <Eye style={{ width: 20, height: 20, color: colors.gray400 }} />}
                                </button>
                            </div>
                        </div>
                        {error && (
                            <div style={{ display: 'flex', alignItems: 'center', gap: 8, padding: 12, borderRadius: 8, backgroundColor: '#fef2f2', color: '#dc2626', fontSize: 12, fontWeight: 500 }}>
                                <AlertCircle style={{ width: 16, height: 16 }} /> {error}
                            </div>
                        )}
                        <button type="submit" disabled={isLoading} style={{ ...styles.btn, opacity: isLoading ? 0.8 : 1 }}>
                            {isLoading ? 'Iniciando...' : 'Acceder al Panel'} {!isLoading && <ArrowRight style={{ width: 16, height: 16 }} />}
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

// --- MENU OVERLAY ---
const MenuOverlay = ({ isOpen, onClose, onLogout, user, currentView, onViewChange }: any) => {
    if (!isOpen) return null;
    const menuItems = [
        { id: 'live', icon: MapIcon, label: 'Mapa en vivo' },
        { id: 'analytics', icon: BarChart2, label: 'Dashboard Analítico' },
        { id: 'history', icon: Clock, label: 'Historial de Rutas' },
        { id: 'reports', icon: FileText, label: 'Reportes' },
        { id: 'profile', icon: User, label: 'Mi Perfil' },
        { id: 'settings', icon: Settings, label: 'Configuración' },
    ];
    return (
        <div style={{ position: 'absolute', inset: 0, zIndex: 50, display: 'flex' }}>
            <div style={{ position: 'absolute', inset: 0, backgroundColor: 'rgba(0,0,0,0.5)', backdropFilter: 'blur(4px)' }} onClick={onClose} />
            <div style={{ position: 'relative', width: '80%', maxWidth: 300, height: '100%', backgroundColor: colors.white, boxShadow: '0 25px 50px -12px rgba(0,0,0,0.25)', display: 'flex', flexDirection: 'column' }}>
                <div style={{ padding: 20, backgroundColor: colors.gray100, borderBottom: `1px solid ${colors.gray200}` }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                        <img src={user.avatar} alt="User" style={{ width: 48, height: 48, borderRadius: '50%', objectFit: 'cover', border: `2px solid ${colors.white}`, boxShadow: '0 4px 6px rgba(0,0,0,0.1)' }} />
                        <div>
                            <h3 style={{ fontWeight: 700, color: colors.gray900, fontSize: 16 }}>{user.name}</h3>
                            <p style={{ fontSize: 12, color: colors.gray500 }}>{user.role}</p>
                        </div>
                    </div>
                </div>
                <nav style={{ flex: 1, padding: 16, display: 'flex', flexDirection: 'column', gap: 8, overflowY: 'auto' }}>
                    {menuItems.map(item => (
                        <button key={item.id} onClick={() => { onViewChange(item.id); onClose(); }}
                            style={{ width: '100%', display: 'flex', alignItems: 'center', gap: 16, padding: 14, borderRadius: 12, border: 'none', cursor: 'pointer', backgroundColor: currentView === item.id ? '#eff6ff' : 'transparent', color: currentView === item.id ? colors.navy : colors.gray600, fontWeight: currentView === item.id ? 600 : 400, fontSize: 14, textAlign: 'left' }}>
                            <item.icon style={{ width: 20, height: 20, color: currentView === item.id ? colors.navy : colors.gray500 }} />
                            {item.label}
                        </button>
                    ))}
                </nav>
                <div style={{ padding: 16, borderTop: `1px solid ${colors.gray200}` }}>
                    <button onClick={onLogout} style={{ width: '100%', display: 'flex', alignItems: 'center', gap: 12, padding: 14, borderRadius: 12, border: 'none', cursor: 'pointer', backgroundColor: 'transparent', color: colors.red, fontWeight: 600, fontSize: 14 }}>
                        <LogOut style={{ width: 20, height: 20 }} /> Cerrar Sesión
                    </button>
                </div>
            </div>
        </div>
    );
};

// --- NOTIFICATION OVERLAY ---
const NotificationOverlay = ({ isOpen, onClose }: any) => {
    if (!isOpen) return null;
    const notifications = [
        { id: 1, title: 'Exceso de Velocidad', time: 'Hace 2 min', type: 'warning', desc: 'Toyota Corolla superó 110km/h' },
        { id: 2, title: 'Motor Encendido', time: 'Hace 15 min', type: 'info', desc: 'Nissan Versa inició operación' },
        { id: 3, title: 'Salida de Geocerca', time: 'Hace 1 hora', type: 'alert', desc: 'Camión 03 salió de zona' },
    ];
    return (
        <div style={{ position: 'absolute', inset: 0, zIndex: 50, display: 'flex', justifyContent: 'flex-end' }}>
            <div style={{ position: 'absolute', inset: 0, backgroundColor: 'rgba(0,0,0,0.2)' }} onClick={onClose} />
            <div style={{ position: 'relative', width: '100%', maxWidth: 360, height: '100%', backgroundColor: colors.white, boxShadow: '0 25px 50px -12px rgba(0,0,0,0.25)', display: 'flex', flexDirection: 'column' }}>
                <div style={{ padding: 20, borderBottom: `1px solid ${colors.gray200}`, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <h3 style={{ fontWeight: 700, fontSize: 18, color: colors.navy }}>Notificaciones</h3>
                    <button onClick={onClose} style={{ ...styles.iconBtn, padding: 8 }}><X style={{ width: 20, height: 20, color: colors.gray500 }} /></button>
                </div>
                <div style={{ flex: 1, overflowY: 'auto', padding: 16, display: 'flex', flexDirection: 'column', gap: 12, backgroundColor: colors.gray100 }}>
                    {notifications.map(n => (
                        <div key={n.id} style={{ ...styles.card, position: 'relative', overflow: 'hidden', paddingLeft: 24 }}>
                            <div style={{ position: 'absolute', left: 0, top: 0, bottom: 0, width: 4, backgroundColor: n.type === 'warning' ? '#f97316' : n.type === 'alert' ? colors.red : '#3b82f6' }} />
                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 4 }}>
                                <h4 style={{ fontWeight: 700, fontSize: 14, color: colors.gray800 }}>{n.title}</h4>
                                <span style={{ fontSize: 10, fontWeight: 600, color: colors.gray400, backgroundColor: colors.gray100, padding: '2px 8px', borderRadius: 9999 }}>{n.time}</span>
                            </div>
                            <p style={{ fontSize: 12, color: colors.gray500 }}>{n.desc}</p>
                        </div>
                    ))}
                </div>
                <button style={{ padding: 16, textAlign: 'center', fontSize: 12, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.05em', color: colors.gray500, borderTop: `1px solid ${colors.gray200}`, border: 'none', backgroundColor: colors.white, cursor: 'pointer' }}>
                    Marcar todo como leído
                </button>
            </div>
        </div>
    );
};

// --- HISTORY SCREEN ---
const HistoryScreen = () => (
    <div style={{ height: '100%', display: 'flex', flexDirection: 'column', backgroundColor: colors.gray100 }}>
        <div style={{ padding: '96px 20px 16px', backgroundColor: colors.white, boxShadow: '0 1px 3px rgba(0,0,0,0.1)' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 8 }}>
                <h2 style={{ fontSize: 24, fontWeight: 700, color: colors.navy }}>Historial</h2>
                <Calendar style={{ width: 20, height: 20, color: colors.gray400 }} />
            </div>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', backgroundColor: colors.gray100, padding: 6, borderRadius: 12, border: `1px solid ${colors.gray200}` }}>
                <button style={{ padding: 8, background: 'none', border: 'none', cursor: 'pointer' }}><ChevronLeft style={{ width: 20, height: 20, color: colors.gray500 }} /></button>
                <div style={{ textAlign: 'center' }}>
                    <span style={{ display: 'block', fontSize: 14, fontWeight: 700, color: colors.gray800 }}>Ayer, 24 Oct</span>
                    <span style={{ fontSize: 10, color: colors.gray400, textTransform: 'uppercase', fontWeight: 600 }}>Miércoles</span>
                </div>
                <button style={{ padding: 8, background: 'none', border: 'none', cursor: 'pointer' }}><ChevronRight style={{ width: 20, height: 20, color: colors.gray500 }} /></button>
            </div>
        </div>
        <div style={{ flex: 1, overflowY: 'auto' }}>
            <div style={{ height: 220, backgroundColor: colors.gray200, position: 'relative' }}>
                <svg style={{ position: 'absolute', inset: 0, width: '100%', height: '100%' }}>
                    <path d="M 40 140 Q 140 40 230 90 T 380 140" fill="none" stroke={colors.navy} strokeWidth="4" strokeLinecap="round" strokeDasharray="8 4" />
                    <circle cx="40" cy="140" r="6" fill={colors.green} stroke="white" strokeWidth="2" />
                    <circle cx="380" cy="140" r="6" fill={colors.navy} stroke="white" strokeWidth="2" />
                </svg>
                <div style={{ position: 'absolute', bottom: 16, left: 16, right: 16, display: 'flex', gap: 12 }}>
                    <div style={{ flex: 1, backgroundColor: 'rgba(255,255,255,0.95)', padding: '12px 16px', borderRadius: 12, boxShadow: '0 4px 6px rgba(0,0,0,0.1)' }}>
                        <span style={{ fontSize: 10, color: colors.gray400, fontWeight: 700, textTransform: 'uppercase', display: 'block' }}>Distancia</span>
                        <span style={{ fontSize: 18, fontWeight: 700, color: colors.navy }}>45.2 km</span>
                    </div>
                    <div style={{ flex: 1, backgroundColor: 'rgba(255,255,255,0.95)', padding: '12px 16px', borderRadius: 12, boxShadow: '0 4px 6px rgba(0,0,0,0.1)' }}>
                        <span style={{ fontSize: 10, color: colors.gray400, fontWeight: 700, textTransform: 'uppercase', display: 'block' }}>Duración</span>
                        <span style={{ fontSize: 18, fontWeight: 700, color: colors.navy }}>2h 15m</span>
                    </div>
                </div>
            </div>
            <div style={{ backgroundColor: colors.white, borderRadius: '24px 24px 0 0', marginTop: -16, padding: 24, minHeight: 300, boxShadow: '0 -4px 20px rgba(0,0,0,0.05)' }}>
                <div style={{ width: 48, height: 6, backgroundColor: colors.gray200, borderRadius: 9999, margin: '0 auto 24px' }} />
                <div style={{ display: 'flex', gap: 16, marginBottom: 24 }}>
                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                        <div style={{ width: 32, height: 32, borderRadius: '50%', backgroundColor: '#dcfce7', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                            <PlayCircle style={{ width: 16, height: 16, color: '#16a34a' }} />
                        </div>
                    </div>
                    <div>
                        <span style={{ fontSize: 12, fontWeight: 700, color: colors.gray400, backgroundColor: colors.gray100, padding: '2px 8px', borderRadius: 4, display: 'inline-block', marginBottom: 4 }}>08:30 AM</span>
                        <h4 style={{ fontWeight: 700, color: colors.gray900, marginBottom: 2 }}>Inicio de Ruta</h4>
                        <p style={{ fontSize: 14, color: colors.gray500 }}>Calle Las Flores 123</p>
                    </div>
                </div>
                <div style={{ display: 'flex', gap: 16 }}>
                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                        <div style={{ width: 32, height: 32, borderRadius: '50%', backgroundColor: colors.navy, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                            <Flag style={{ width: 16, height: 16, color: colors.white }} />
                        </div>
                    </div>
                    <div>
                        <span style={{ fontSize: 12, fontWeight: 700, color: colors.gray400, backgroundColor: colors.gray100, padding: '2px 8px', borderRadius: 4, display: 'inline-block', marginBottom: 4 }}>10:45 AM</span>
                        <h4 style={{ fontWeight: 700, color: colors.gray900, marginBottom: 2 }}>Fin de Ruta</h4>
                        <p style={{ fontSize: 14, color: colors.gray500 }}>Oficinas Centrales, Torre B</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
);

// --- ANALYTICS SCREEN ---
const AnalyticsScreen = () => {
    const [filter, setFilter] = useState('all');
    const filters = ['Toda la Flota', 'Toyota Corolla', 'Nissan Versa', 'Camión 03'];
    return (
        <div style={{ height: '100%', display: 'flex', flexDirection: 'column', backgroundColor: colors.gray100, overflowY: 'auto', paddingBottom: 20 }}>
            <div style={{ padding: '96px 20px 20px', backgroundColor: colors.white, boxShadow: '0 1px 3px rgba(0,0,0,0.1)', position: 'sticky', top: 0, zIndex: 10 }}>
                <h2 style={{ fontSize: 24, fontWeight: 700, color: colors.navy, marginBottom: 16 }}>Dashboard Analítico</h2>
                <div style={{ display: 'flex', gap: 8, overflowX: 'auto', paddingBottom: 4 }}>
                    {filters.map((f, i) => (
                        <button key={i} onClick={() => setFilter(i === 0 ? 'all' : f)}
                            style={{ padding: '10px 16px', borderRadius: 9999, fontSize: 12, fontWeight: 700, whiteSpace: 'nowrap', border: 'none', cursor: 'pointer', backgroundColor: (i === 0 && filter === 'all') || filter === f ? colors.navy : colors.gray200, color: (i === 0 && filter === 'all') || filter === f ? colors.white : colors.gray500 }}>
                            {f}
                        </button>
                    ))}
                </div>
            </div>
            <div style={{ padding: 20, display: 'flex', flexDirection: 'column', gap: 20 }}>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
                    <div style={styles.card}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 8, color: colors.gray400 }}>
                            <MapPin style={{ width: 16, height: 16 }} />
                            <span style={{ fontSize: 10, textTransform: 'uppercase', fontWeight: 700 }}>Km Totales</span>
                        </div>
                        <p style={{ fontSize: 24, fontWeight: 700, color: colors.gray900 }}>1,245 <span style={{ fontSize: 14, fontWeight: 500, color: colors.gray400 }}>km</span></p>
                        <div style={{ fontSize: 12, color: colors.green, fontWeight: 700, marginTop: 4 }}>+12% vs semana</div>
                    </div>
                    <div style={styles.card}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 8, color: colors.gray400 }}>
                            <Clock style={{ width: 16, height: 16 }} />
                            <span style={{ fontSize: 10, textTransform: 'uppercase', fontWeight: 700 }}>Tiempo Activo</span>
                        </div>
                        <p style={{ fontSize: 24, fontWeight: 700, color: colors.gray900 }}>48h <span style={{ fontSize: 14, fontWeight: 500, color: colors.gray400 }}>30m</span></p>
                        <div style={{ fontSize: 12, color: colors.gray400, fontWeight: 500, marginTop: 4 }}>Promedio 4h/día</div>
                    </div>
                </div>
                <div style={styles.card}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 20 }}>
                        <h3 style={{ fontWeight: 700, color: colors.gray800, fontSize: 14 }}>Kilometraje Semanal</h3>
                        <Settings style={{ width: 16, height: 16, color: colors.gray400 }} />
                    </div>
                    <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', height: 120, gap: 8 }}>
                        {[40, 65, 30, 85, 50, 20, 70].map((h, i) => (
                            <div key={i} style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8 }}>
                                <div style={{ width: '100%', backgroundColor: '#eff6ff', borderRadius: '4px 4px 0 0', height: `${h}%`, position: 'relative' }}>
                                    <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, backgroundColor: colors.navy, borderRadius: '4px 4px 0 0', height: `${h * 0.6}%` }} />
                                </div>
                                <span style={{ fontSize: 10, fontWeight: 700, color: colors.gray400 }}>{['L', 'M', 'M', 'J', 'V', 'S', 'D'][i]}</span>
                            </div>
                        ))}
                    </div>
                </div>
                <div style={styles.card}>
                    <h3 style={{ fontWeight: 700, color: colors.gray800, fontSize: 14, marginBottom: 16 }}>Estado de la Flota</h3>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 24 }}>
                        <div style={{ position: 'relative', width: 120, height: 120, flexShrink: 0 }}>
                            <svg viewBox="0 0 36 36" style={{ width: '100%', height: '100%', transform: 'rotate(-90deg)' }}>
                                <path d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke={colors.gray200} strokeWidth="3.8" />
                                <path d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke={colors.green} strokeWidth="3.8" strokeDasharray="70, 100" />
                                <path d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke={colors.red} strokeWidth="3.8" strokeDasharray="20, 100" strokeDashoffset="-70" />
                            </svg>
                            <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column' }}>
                                <span style={{ fontSize: 24, fontWeight: 700, color: colors.navy }}>12</span>
                                <span style={{ fontSize: 10, color: colors.gray400, textTransform: 'uppercase' }}>Total</span>
                            </div>
                        </div>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: 12, flex: 1 }}>
                            {[{ label: 'En Movimiento', pct: '70%', color: colors.green }, { label: 'Detenidos', pct: '20%', color: colors.red }, { label: 'Inactivos', pct: '10%', color: colors.gray300 }].map((s, i) => (
                                <div key={i} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                    <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                                        <div style={{ width: 8, height: 8, borderRadius: '50%', backgroundColor: s.color }} />
                                        <span style={{ fontSize: 12, fontWeight: 500, color: colors.gray600 }}>{s.label}</span>
                                    </div>
                                    <span style={{ fontSize: 12, fontWeight: 700 }}>{s.pct}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

// --- REPORTS SCREEN ---
const ReportsScreen = () => {
    const reports = [
        { id: 1, name: 'Reporte de Kilometraje', date: '25 Oct, 2023', size: '1.2 MB', type: 'PDF' },
        { id: 2, name: 'Historial de Alarmas', date: '24 Oct, 2023', size: '850 KB', type: 'XLS' },
        { id: 3, name: 'Uso de Combustible', date: '01 Oct, 2023', size: '2.4 MB', type: 'PDF' },
    ];
    return (
        <div style={{ height: '100%', display: 'flex', flexDirection: 'column', backgroundColor: colors.gray100, paddingTop: 96, overflowY: 'auto' }}>
            <div style={{ padding: '0 20px 20px' }}>
                <h2 style={{ fontSize: 24, fontWeight: 700, color: colors.navy, marginBottom: 8 }}>Reportes</h2>
                <p style={{ fontSize: 14, color: colors.gray500 }}>Descarga los informes de tu flota.</p>
            </div>
            <div style={{ padding: '0 20px', display: 'flex', flexDirection: 'column', gap: 12 }}>
                {reports.map(r => (
                    <div key={r.id} style={{ ...styles.card, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
                            <div style={{ width: 40, height: 40, borderRadius: 12, display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 700, fontSize: 10, backgroundColor: r.type === 'PDF' ? '#fef2f2' : '#dcfce7', color: r.type === 'PDF' ? '#dc2626' : '#16a34a' }}>{r.type}</div>
                            <div>
                                <h4 style={{ fontWeight: 700, color: colors.gray800, fontSize: 14, marginBottom: 2 }}>{r.name}</h4>
                                <div style={{ display: 'flex', gap: 8, fontSize: 12, color: colors.gray400 }}><span>{r.date}</span><span>•</span><span>{r.size}</span></div>
                            </div>
                        </div>
                        <button style={{ padding: 8, borderRadius: '50%', background: 'none', border: 'none', cursor: 'pointer' }}><Download style={{ width: 20, height: 20, color: colors.gray400 }} /></button>
                    </div>
                ))}
            </div>
        </div>
    );
};

// --- PROFILE SCREEN ---
const ProfileScreen = ({ user }: any) => (
    <div style={{ height: '100%', backgroundColor: colors.gray100, paddingTop: 96, overflowY: 'auto' }}>
        <div style={{ padding: '0 20px 32px', textAlign: 'center' }}>
            <div style={{ position: 'relative', display: 'inline-block', marginBottom: 16 }}>
                <img src={user.avatar} alt="Profile" style={{ width: 96, height: 96, borderRadius: '50%', border: `4px solid ${colors.white}`, boxShadow: '0 10px 15px rgba(0,0,0,0.1)', objectFit: 'cover' }} />
                <button style={{ position: 'absolute', bottom: 0, right: 0, backgroundColor: colors.navy, padding: 8, borderRadius: '50%', border: 'none', cursor: 'pointer', boxShadow: '0 4px 6px rgba(0,0,0,0.1)' }}><Camera style={{ width: 16, height: 16, color: colors.white }} /></button>
            </div>
            <h2 style={{ fontSize: 24, fontWeight: 700, color: colors.gray900 }}>{user.name}</h2>
            <p style={{ fontSize: 14, color: colors.gray500 }}>{user.role} • {user.email}</p>
        </div>
        <div style={{ padding: '0 20px', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16, marginBottom: 32 }}>
            <div style={{ ...styles.card, textAlign: 'center' }}>
                <span style={{ display: 'block', fontSize: 24, fontWeight: 700, color: colors.navy }}>{user.vehicles}</span>
                <span style={{ fontSize: 10, fontWeight: 700, color: colors.gray400, textTransform: 'uppercase' }}>Vehículos</span>
            </div>
            <div style={{ ...styles.card, textAlign: 'center' }}>
                <span style={{ display: 'block', fontSize: 24, fontWeight: 700, color: colors.green }}>Active</span>
                <span style={{ fontSize: 10, fontWeight: 700, color: colors.gray400, textTransform: 'uppercase' }}>Estado</span>
            </div>
        </div>
        <div style={{ backgroundColor: colors.white, borderRadius: '32px 32px 0 0', padding: 24, minHeight: 300, boxShadow: '0 -5px 30px rgba(0,0,0,0.03)' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 20 }}>
                <h3 style={{ fontWeight: 700, fontSize: 18, color: colors.gray900 }}>Mis Vehículos</h3>
                <button style={{ fontSize: 12, fontWeight: 700, color: colors.navy, background: 'none', border: 'none', cursor: 'pointer' }}>Ver Todos</button>
            </div>
            {[{ name: 'Toyota Corolla 2024', plate: 'ABC-123', status: 'En Ruta' }, { name: 'Nissan Versa 2022', plate: 'XYZ-789', status: 'Detenido' }].map((car, i) => (
                <div key={i} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: 12, borderRadius: 12, marginBottom: 8, border: `1px solid ${colors.gray100}` }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                        <div style={{ width: 40, height: 40, borderRadius: '50%', backgroundColor: '#eff6ff', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><Car style={{ width: 20, height: 20, color: colors.navy }} /></div>
                        <div><h4 style={{ fontWeight: 700, fontSize: 14, color: colors.gray800 }}>{car.name}</h4><p style={{ fontSize: 12, color: colors.gray500, fontFamily: 'monospace' }}>{car.plate}</p></div>
                    </div>
                    <span style={{ padding: '4px 8px', borderRadius: 6, fontSize: 10, fontWeight: 700, textTransform: 'uppercase', backgroundColor: car.status === 'En Ruta' ? '#dcfce7' : colors.gray100, color: car.status === 'En Ruta' ? '#16a34a' : colors.gray600 }}>{car.status}</span>
                </div>
            ))}
        </div>
    </div>
);

// --- SETTINGS SCREEN ---
const SettingsScreen = () => (
    <div style={{ height: '100%', backgroundColor: colors.gray100, paddingTop: 96, overflowY: 'auto' }}>
        <div style={{ padding: '0 20px 20px' }}>
            <h2 style={{ fontSize: 24, fontWeight: 700, color: colors.navy, marginBottom: 8 }}>Configuración</h2>
        </div>
        <div style={{ padding: '0 20px', display: 'flex', flexDirection: 'column', gap: 24 }}>
            <section>
                <h3 style={{ fontSize: 10, fontWeight: 700, color: colors.gray400, textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: 12, marginLeft: 4 }}>General</h3>
                <div style={{ backgroundColor: colors.white, borderRadius: 16, overflow: 'hidden', boxShadow: '0 1px 3px rgba(0,0,0,0.1)' }}>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: 16, borderBottom: `1px solid ${colors.gray100}` }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}><Bell style={{ width: 20, height: 20, color: colors.gray600 }} /><span style={{ fontSize: 14, fontWeight: 500, color: colors.gray800 }}>Notificaciones Push</span></div>
                        <div style={{ width: 40, height: 24, backgroundColor: colors.navy, borderRadius: 9999, position: 'relative', cursor: 'pointer' }}><div style={{ position: 'absolute', right: 4, top: 4, width: 16, height: 16, backgroundColor: colors.white, borderRadius: '50%' }} /></div>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: 16 }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}><Moon style={{ width: 20, height: 20, color: colors.gray600 }} /><span style={{ fontSize: 14, fontWeight: 500, color: colors.gray800 }}>Modo Oscuro</span></div>
                        <div style={{ width: 40, height: 24, backgroundColor: colors.gray200, borderRadius: 9999, position: 'relative', cursor: 'pointer' }}><div style={{ position: 'absolute', left: 4, top: 4, width: 16, height: 16, backgroundColor: colors.white, borderRadius: '50%', boxShadow: '0 1px 2px rgba(0,0,0,0.1)' }} /></div>
                    </div>
                </div>
            </section>
            <section>
                <h3 style={{ fontSize: 10, fontWeight: 700, color: colors.gray400, textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: 12, marginLeft: 4 }}>Cuenta</h3>
                <div style={{ backgroundColor: colors.white, borderRadius: 16, overflow: 'hidden', boxShadow: '0 1px 3px rgba(0,0,0,0.1)' }}>
                    <button style={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: 16, borderBottom: `1px solid ${colors.gray100}`, background: 'none', border: 'none', cursor: 'pointer', textAlign: 'left' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}><User style={{ width: 20, height: 20, color: colors.gray600 }} /><span style={{ fontSize: 14, fontWeight: 500, color: colors.gray800 }}>Editar Perfil</span></div>
                        <ChevronRight style={{ width: 16, height: 16, color: colors.gray400 }} />
                    </button>
                    <button style={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: 16, background: 'none', border: 'none', cursor: 'pointer', textAlign: 'left' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}><Lock style={{ width: 20, height: 20, color: colors.gray600 }} /><span style={{ fontSize: 14, fontWeight: 500, color: colors.gray800 }}>Cambiar Contraseña</span></div>
                        <ChevronRight style={{ width: 16, height: 16, color: colors.gray400 }} />
                    </button>
                </div>
            </section>
            <p style={{ textAlign: 'center', fontSize: 12, color: colors.gray400, paddingTop: 16 }}>Versión 2.4.0 (Build 2023)</p>
        </div>
    </div>
);

// --- LIVE MAP VIEW ---
const LiveMapView = ({ vehicle }: any) => (
    <div style={{ flex: 1, position: 'relative', height: '100%', width: '100%' }}>
        <div style={{ flex: 1, backgroundColor: colors.gray200, position: 'relative', width: '100%', height: '100%' }}>
            <div style={{ position: 'absolute', inset: 0, opacity: 0.4 }}>
                <div style={{ position: 'absolute', top: '20%', left: 0, width: '100%', height: 32, backgroundColor: colors.gray300, transform: 'rotate(12deg) scale(1.5)' }} />
                <div style={{ position: 'absolute', top: '50%', left: '-20%', width: '150%', height: 48, backgroundColor: colors.white, borderTop: `1px solid ${colors.gray300}`, borderBottom: `1px solid ${colors.gray300}`, transform: 'rotate(-3deg)' }} />
                <div style={{ position: 'absolute', top: '10%', right: '30%', width: 24, height: '100%', backgroundColor: colors.gray300 }} />
            </div>
            <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <div style={{ position: 'relative', zIndex: 10, padding: 16, backgroundColor: colors.white, borderRadius: '50%', boxShadow: '0 25px 50px -12px rgba(0,0,0,0.25)', border: `4px solid ${colors.white}` }}>
                    <Navigation style={{ width: 32, height: 32, color: colors.navy, fill: colors.navy }} />
                </div>
                <div style={{ marginTop: 16, backgroundColor: 'rgba(255,255,255,0.9)', backdropFilter: 'blur(4px)', padding: '6px 12px', borderRadius: 8, boxShadow: '0 4px 6px rgba(0,0,0,0.1)', border: `1px solid ${colors.gray200}`, fontSize: 12, fontWeight: 700, color: colors.navy }}>{vehicle.speed} km/h</div>
            </div>
        </div>
        <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, zIndex: 20, padding: 16, paddingBottom: 32 }}>
            <div style={{ backgroundColor: colors.white, borderRadius: 32, boxShadow: '0 25px 50px -12px rgba(0,0,0,0.25)', padding: 24 }}>
                <div style={{ width: 48, height: 6, backgroundColor: colors.gray200, borderRadius: 9999, margin: '0 auto 24px' }} />
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 20 }}>
                    <div>
                        <h2 style={{ fontSize: 20, fontWeight: 700, color: colors.gray900, marginBottom: 4 }}>{vehicle.name}</h2>
                        <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                            <span style={{ backgroundColor: colors.gray100, color: colors.gray500, fontSize: 10, fontWeight: 700, padding: '2px 8px', borderRadius: 4, textTransform: 'uppercase' }}>{vehicle.plate}</span>
                            <div style={{ display: 'flex', alignItems: 'center', fontSize: 12, color: colors.green, fontWeight: 500 }}><CheckCircle style={{ width: 12, height: 12, marginRight: 4 }} /> Seguro</div>
                        </div>
                    </div>
                    <div style={{ padding: 12, backgroundColor: '#eff6ff', borderRadius: 16 }}><Navigation style={{ width: 24, height: 24, color: colors.navy }} /></div>
                </div>
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: 12, padding: 12, backgroundColor: colors.gray100, borderRadius: 16, border: `1px solid ${colors.gray200}`, marginBottom: 16 }}>
                    <MapPin style={{ width: 20, height: 20, color: colors.navy, flexShrink: 0, marginTop: 2 }} />
                    <div>
                        <label style={{ fontSize: 10, textTransform: 'uppercase', fontWeight: 700, color: colors.gray400, display: 'block', marginBottom: 2 }}>Ubicación</label>
                        <p style={{ fontSize: 14, fontWeight: 500, color: colors.gray800 }}>{vehicle.address}</p>
                    </div>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '0 8px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 8, fontSize: 12, color: colors.gray500 }}><Clock style={{ width: 14, height: 14 }} />Actualizado: <span style={{ fontWeight: 600, color: colors.gray800 }}>{vehicle.lastUpdate}</span></div>
                    <button style={{ fontSize: 12, fontWeight: 700, display: 'flex', alignItems: 'center', gap: 4, color: colors.navy, background: 'none', border: 'none', cursor: 'pointer' }}>Ver Detalles <ChevronUp style={{ width: 12, height: 12 }} /></button>
                </div>
            </div>
        </div>
    </div>
);

// --- MAIN LAYOUT ---
const MainLayout = ({ user, onLogout }: any) => {
    const [showMenu, setShowMenu] = useState(false);
    const [showNotifs, setShowNotifs] = useState(false);
    const [currentView, setCurrentView] = useState('live');
    const vehicle = { name: "Toyota Corolla 2024", plate: "ABC-123", speed: 45, address: "Av. Reforma 225, Zona Empresarial", lastUpdate: "Ahora" };

    const renderView = () => {
        switch (currentView) {
            case 'history': return <HistoryScreen />;
            case 'analytics': return <AnalyticsScreen />;
            case 'reports': return <ReportsScreen />;
            case 'settings': return <SettingsScreen />;
            case 'profile': return <ProfileScreen user={user} />;
            default: return <LiveMapView vehicle={vehicle} />;
        }
    };

    return (
        <div style={{ height: '100vh', width: '100%', position: 'relative', backgroundColor: colors.gray100, overflow: 'hidden', display: 'flex', flexDirection: 'column' }}>
            <MenuOverlay isOpen={showMenu} onClose={() => setShowMenu(false)} onLogout={onLogout} user={user} currentView={currentView} onViewChange={setCurrentView} />
            <NotificationOverlay isOpen={showNotifs} onClose={() => setShowNotifs(false)} />
            <div style={styles.header}>
                <button onClick={() => setShowMenu(true)} style={styles.iconBtn}><Menu style={{ width: 24, height: 24, color: colors.navy }} /></button>
                <div>
                    {currentView === 'live' ? (
                        <div style={{ display: 'flex', alignItems: 'center', gap: 8, backgroundColor: 'rgba(255,255,255,0.95)', backdropFilter: 'blur(4px)', padding: '8px 16px', borderRadius: 9999, boxShadow: '0 4px 6px rgba(0,0,0,0.1)', border: `1px solid ${colors.gray100}` }}>
                            <div style={{ width: 10, height: 10, borderRadius: '50%', backgroundColor: colors.green, animation: 'pulse 2s infinite' }} />
                            <span style={{ fontSize: 12, fontWeight: 700, color: colors.navy }}>EN LÍNEA</span>
                        </div>
                    ) : (
                        <div style={{ width: 40, height: 40, backgroundColor: colors.navy, borderRadius: 12, display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 10px 15px rgba(0,0,0,0.1)' }}><ShieldCheck style={{ width: 20, height: 20, color: colors.white }} /></div>
                    )}
                </div>
                <button onClick={() => setShowNotifs(true)} style={{ ...styles.iconBtn, position: 'relative' }}>
                    <Bell style={{ width: 24, height: 24, color: colors.navy }} />
                    <span style={{ position: 'absolute', top: 8, right: 8, width: 12, height: 12, borderRadius: '50%', border: `2px solid ${colors.white}`, backgroundColor: colors.red }} />
                </button>
            </div>
            <div style={{ flex: 1, position: 'relative', height: '100%', width: '100%', backgroundColor: colors.gray100 }}>{renderView()}</div>
        </div>
    );
};

// --- MAIN APP ---
export default function MobilDemoPage() {
    const [user, setUser] = useState<any>(null);
    return (
        <div style={styles.container}>
            <div style={styles.phoneFrame}>
                {user ? <MainLayout user={user} onLogout={() => setUser(null)} /> : <LoginScreen onLogin={(u: any) => setUser(u)} />}
            </div>
            <style>{`@keyframes pulse { 0%, 100% { opacity: 1; } 50% { opacity: 0.5; } }`}</style>
        </div>
    );
}
