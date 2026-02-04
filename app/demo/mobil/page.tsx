'use client';

import React, { useState } from 'react';
import {
    Eye, EyeOff, Mail, Lock, ArrowRight, ShieldCheck, AlertCircle,
    Menu, Bell, Navigation, MapPin, Clock, Shield, ChevronUp,
    User, X, LogOut, Settings, FileText, Map as MapIcon, CheckCircle,
    Calendar, ChevronLeft, ChevronRight, PlayCircle, StopCircle, Flag,
    BarChart2, PieChart, Download, Camera, Edit2, Car, Smartphone, Moon
} from 'lucide-react';

// --- CONFIGURACIÓN DE ESTILO GLOBAL ---
const colors = {
    navy: '#1A2B49',
    green: '#4CAF50',
    white: '#FFFFFF',
    bg: '#F3F4F6',
    red: '#EF4444',
    textMain: '#1F2937',
    textSub: '#6B7280',
    chartBlue: '#3B82F6',
    chartPurple: '#8B5CF6'
};

// --- COMPONENTE 1: PANTALLA DE LOGIN ---
const LoginScreen = ({ onLogin }: any) => {
    const [email, setEmail] = useState('admin@empresa.com');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState('');

    const handleSubmit = (e: any) => {
        e.preventDefault();
        setIsLoading(true);
        setError('');

        setTimeout(() => {
            if (email && password.length > 0) {
                onLogin({
                    email,
                    name: 'Carlos Admin',
                    role: 'Gestor de Flota',
                    avatar: 'https://i.pravatar.cc/150?u=a042581f4e29026704d',
                    vehicles: 12
                });
            } else {
                setError('Por favor ingresa tus credenciales.');
                setIsLoading(false);
            }
        }, 1200);
    };

    return (
        <div className="min-h-screen w-full flex items-center justify-center bg-gray-50 font-sans p-4">
            <div className="w-full max-w-md bg-white rounded-3xl shadow-2xl overflow-hidden">
                <div className="h-2 w-full" style={{ backgroundColor: colors.navy }}></div>
                <div className="p-8 py-12">
                    <div className="text-center mb-10">
                        <div className="mx-auto w-16 h-16 rounded-2xl flex items-center justify-center mb-6 shadow-lg transform rotate-3" style={{ backgroundColor: colors.navy }}>
                            <ShieldCheck className="text-white w-8 h-8" />
                        </div>
                        <h1 className="text-2xl font-bold tracking-tight mb-2" style={{ color: colors.navy }}>Bienvenido</h1>
                        <p className="text-gray-500 text-sm">Panel de Control de Flota</p>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-5">
                        <div className="space-y-1">
                            <label className="text-xs font-bold text-gray-400 uppercase tracking-wider ml-1">Email</label>
                            <div className="relative">
                                <Mail className="absolute left-3 top-3.5 h-5 w-5 text-gray-400" />
                                <input
                                    type="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:outline-none transition-all"
                                    placeholder="usuario@empresa.com"
                                />
                            </div>
                        </div>

                        <div className="space-y-1">
                            <label className="text-xs font-bold text-gray-400 uppercase tracking-wider ml-1">Contraseña</label>
                            <div className="relative">
                                <Lock className="absolute left-3 top-3.5 h-5 w-5 text-gray-400" />
                                <input
                                    type={showPassword ? "text" : "password"}
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    className="w-full pl-10 pr-10 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:outline-none transition-all"
                                    placeholder="••••••••"
                                />
                                <button type="button" onClick={() => setShowPassword(!showPassword)} className="absolute right-3 top-3.5">
                                    {showPassword ? <EyeOff className="h-5 w-5 text-gray-400" /> : <Eye className="h-5 w-5 text-gray-400" />}
                                </button>
                            </div>
                        </div>

                        {error && (
                            <div className="flex items-center gap-2 p-3 rounded-lg bg-red-50 text-red-600 text-xs font-medium animate-pulse">
                                <AlertCircle className="w-4 h-4" /> {error}
                            </div>
                        )}

                        <button
                            type="submit"
                            disabled={isLoading}
                            className="w-full py-4 rounded-xl text-white font-bold text-sm shadow-lg hover:shadow-xl transition-all flex items-center justify-center gap-2"
                            style={{ backgroundColor: colors.navy, opacity: isLoading ? 0.8 : 1 }}
                        >
                            {isLoading ? 'Iniciando...' : 'Acceder al Panel'} {!isLoading && <ArrowRight className="w-4 h-4" />}
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

// --- COMPONENTE 2: MENU LATERAL (OVERLAY) ---
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
        <div className="absolute inset-0 z-50 flex">
            <div className="absolute inset-0 bg-black/50 backdrop-blur-sm transition-opacity" onClick={onClose}></div>

            <div className="relative w-3/4 max-w-xs h-full bg-white shadow-2xl flex flex-col animate-slide-in-left">
                <div className="p-6 bg-gray-50 border-b border-gray-100">
                    <div className="flex items-center gap-4 mb-4">
                        <img src={user.avatar} alt="User" className="w-12 h-12 rounded-full object-cover border-2 border-white shadow-md" />
                        <div>
                            <h3 className="font-bold text-gray-900 leading-tight">{user.name}</h3>
                            <p className="text-xs text-gray-500">{user.role}</p>
                        </div>
                    </div>
                </div>

                <nav className="flex-1 p-4 space-y-2 overflow-y-auto">
                    {menuItems.map((item) => (
                        <button
                            key={item.id}
                            onClick={() => { onViewChange(item.id); onClose(); }}
                            className={`w-full flex items-center gap-4 p-3 rounded-xl transition-colors ${currentView === item.id ? 'bg-blue-50 text-blue-900 font-semibold' : 'text-gray-600 hover:bg-gray-50'}`}
                        >
                            <item.icon className="w-5 h-5" style={{ color: currentView === item.id ? colors.navy : 'currentColor' }} />
                            <span style={{ color: currentView === item.id ? colors.navy : 'currentColor' }}>{item.label}</span>
                        </button>
                    ))}
                </nav>

                <div className="p-4 border-t border-gray-100">
                    <button onClick={onLogout} className="w-full flex items-center gap-3 p-3 text-red-600 hover:bg-red-50 rounded-xl transition-colors text-sm font-semibold">
                        <LogOut className="w-5 h-5" />
                        Cerrar Sesión
                    </button>
                </div>
            </div>
        </div>
    );
};

// --- COMPONENTE 3: NOTIFICACIONES (OVERLAY) ---
const NotificationOverlay = ({ isOpen, onClose }: any) => {
    if (!isOpen) return null;

    const notifications = [
        { id: 1, title: 'Exceso de Velocidad', time: 'Hace 2 min', type: 'warning', desc: 'Toyota Corolla superó 110km/h en Autopista Central.' },
        { id: 2, title: 'Motor Encendido', time: 'Hace 15 min', type: 'info', desc: 'Nissan Versa inició operación.' },
        { id: 3, title: 'Salida de Geocerca', time: 'Hace 1 hora', type: 'alert', desc: 'Camión 03 salió de la zona "Bodega Norte".' },
    ];

    return (
        <div className="absolute inset-0 z-50 flex justify-end">
            <div className="absolute inset-0 bg-black/20" onClick={onClose}></div>
            <div className="relative w-full max-w-sm h-full bg-white shadow-2xl flex flex-col animate-slide-in-right">
                <div className="p-5 border-b border-gray-100 flex justify-between items-center bg-white z-10">
                    <h3 className="font-bold text-lg" style={{ color: colors.navy }}>Notificaciones</h3>
                    <button onClick={onClose} className="p-2 hover:bg-gray-100 rounded-full">
                        <X className="w-5 h-5 text-gray-500" />
                    </button>
                </div>

                <div className="flex-1 overflow-y-auto p-4 space-y-3 bg-gray-50">
                    {notifications.map((notif) => (
                        <div key={notif.id} className="bg-white p-4 rounded-2xl shadow-sm border border-gray-100 relative overflow-hidden">
                            <div className={`absolute left-0 top-0 bottom-0 w-1 ${notif.type === 'warning' ? 'bg-orange-500' : notif.type === 'alert' ? 'bg-red-500' : 'bg-blue-500'}`}></div>
                            <div className="flex justify-between items-start mb-1">
                                <h4 className="font-bold text-sm text-gray-800">{notif.title}</h4>
                                <span className="text-[10px] font-semibold text-gray-400 bg-gray-100 px-2 py-0.5 rounded-full">{notif.time}</span>
                            </div>
                            <p className="text-xs text-gray-500 leading-relaxed">{notif.desc}</p>
                        </div>
                    ))}
                </div>
                <button className="p-4 text-center text-xs font-bold uppercase tracking-wider text-gray-500 hover:text-gray-800 border-t border-gray-100">
                    Marcar todo como leído
                </button>
            </div>
        </div>
    );
};

// --- COMPONENTE 4: HISTORIAL DE RUTAS ---
const HistoryScreen = () => {
    return (
        <div className="h-full flex flex-col bg-gray-50 animate-fade-in">
            <div className="px-6 pt-24 pb-4 bg-white shadow-sm z-10">
                <div className="flex items-center justify-between mb-2">
                    <h2 className="text-2xl font-bold" style={{ color: colors.navy }}>Historial</h2>
                    <Calendar className="w-5 h-5 text-gray-400" />
                </div>
                <div className="flex items-center justify-between bg-gray-50 p-1.5 rounded-xl border border-gray-100">
                    <button className="p-2 hover:bg-white hover:shadow-sm rounded-lg transition-all text-gray-500"><ChevronLeft className="w-5 h-5" /></button>
                    <div className="text-center">
                        <span className="block text-sm font-bold text-gray-800">Ayer, 24 Oct</span>
                        <span className="text-[10px] text-gray-400 uppercase tracking-wider font-semibold">Miércoles</span>
                    </div>
                    <button className="p-2 hover:bg-white hover:shadow-sm rounded-lg transition-all text-gray-500"><ChevronRight className="w-5 h-5" /></button>
                </div>
            </div>
            <div className="flex-1 overflow-y-auto relative">
                <div className="h-56 w-full bg-gray-200 relative overflow-hidden group">
                    <div className="absolute inset-0 opacity-40">
                        <div className="absolute top-[20%] left-0 w-full h-8 bg-gray-300 rotate-12 scale-150"></div>
                    </div>
                    <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ filter: 'drop-shadow(0px 4px 4px rgba(0,0,0,0.1))' }}>
                        <path d="M 50 150 Q 150 50 250 100 T 400 150" fill="none" stroke={colors.navy} strokeWidth="4" strokeLinecap="round" strokeDasharray="8 4" />
                        <circle cx="50" cy="150" r="6" fill={colors.green} stroke="white" strokeWidth="2" />
                        <circle cx="400" cy="150" r="6" fill={colors.navy} stroke="white" strokeWidth="2" />
                    </svg>
                    <div className="absolute bottom-4 left-4 right-4 flex gap-3">
                        <div className="flex-1 bg-white/95 backdrop-blur px-3 py-2 rounded-xl shadow-md border border-gray-100">
                            <span className="text-[10px] text-gray-400 font-bold uppercase block">Distancia</span>
                            <span className="text-lg font-bold" style={{ color: colors.navy }}>45.2 km</span>
                        </div>
                        <div className="flex-1 bg-white/95 backdrop-blur px-3 py-2 rounded-xl shadow-md border border-gray-100">
                            <span className="text-[10px] text-gray-400 font-bold uppercase block">Duración</span>
                            <span className="text-lg font-bold" style={{ color: colors.navy }}>2h 15m</span>
                        </div>
                    </div>
                </div>
                <div className="p-6 space-y-6 bg-white min-h-[300px] rounded-t-3xl -mt-4 relative shadow-[0_-4px_20px_rgba(0,0,0,0.05)]">
                    <div className="w-12 h-1.5 bg-gray-100 rounded-full mx-auto mb-6"></div>
                    <div className="flex gap-4 relative">
                        <div className="flex flex-col items-center">
                            <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center z-10 ring-4 ring-white"><PlayCircle className="w-4 h-4 text-green-600" /></div>
                            <div className="w-0.5 h-full bg-gray-100 absolute top-8"></div>
                        </div>
                        <div className="pb-6">
                            <span className="text-xs font-bold text-gray-400 bg-gray-50 px-2 py-0.5 rounded mb-1 inline-block">08:30 AM</span>
                            <h4 className="font-bold text-gray-900">Inicio de Ruta</h4>
                            <p className="text-sm text-gray-500">Calle Las Flores 123, Residencial</p>
                        </div>
                    </div>
                    <div className="flex gap-4 relative">
                        <div className="flex flex-col items-center">
                            <div className="w-8 h-8 rounded-full flex items-center justify-center z-10 ring-4 ring-white" style={{ backgroundColor: colors.navy }}><Flag className="w-4 h-4 text-white" /></div>
                        </div>
                        <div>
                            <span className="text-xs font-bold text-gray-400 bg-gray-50 px-2 py-0.5 rounded mb-1 inline-block">10:45 AM</span>
                            <h4 className="font-bold text-gray-900">Fin de Ruta</h4>
                            <p className="text-sm text-gray-500">Oficinas Centrales, Torre B</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

// --- COMPONENTE 5: ANALYTICS (DASHBOARD METABASE) ---
const AnalyticsScreen = () => {
    const [filter, setFilter] = useState('all');

    return (
        <div className="h-full flex flex-col bg-gray-50 animate-fade-in pb-20 overflow-y-auto">
            <div className="px-6 pt-24 pb-6 bg-white shadow-sm z-10 sticky top-0">
                <h2 className="text-2xl font-bold mb-4" style={{ color: colors.navy }}>Dashboard Analítico</h2>
                <div className="flex gap-2 overflow-x-auto pb-2 no-scrollbar">
                    {['Toda la Flota', 'Toyota Corolla', 'Nissan Versa', 'Camión 03'].map((item, i) => (
                        <button
                            key={i}
                            onClick={() => setFilter(i === 0 ? 'all' : item)}
                            className={`px-4 py-2 rounded-full text-xs font-bold whitespace-nowrap transition-all ${(i === 0 && filter === 'all') || filter === item
                                ? 'bg-[#1A2B49] text-white shadow-md'
                                : 'bg-gray-100 text-gray-500 hover:bg-gray-200'
                                }`}
                        >
                            {item}
                        </button>
                    ))}
                </div>
            </div>

            <div className="p-6 space-y-6">
                <div className="grid grid-cols-2 gap-4">
                    <div className="bg-white p-4 rounded-2xl shadow-sm border border-gray-100">
                        <div className="flex items-center gap-2 mb-2 text-gray-400">
                            <MapPin className="w-4 h-4" />
                            <span className="text-[10px] uppercase font-bold">Km Totales</span>
                        </div>
                        <p className="text-2xl font-bold text-gray-900">1,245 <span className="text-sm font-medium text-gray-400">km</span></p>
                        <div className="text-xs text-green-500 font-bold mt-1">+12% vs semana pasada</div>
                    </div>
                    <div className="bg-white p-4 rounded-2xl shadow-sm border border-gray-100">
                        <div className="flex items-center gap-2 mb-2 text-gray-400">
                            <Clock className="w-4 h-4" />
                            <span className="text-[10px] uppercase font-bold">Tiempo Activo</span>
                        </div>
                        <p className="text-2xl font-bold text-gray-900">48h <span className="text-sm font-medium text-gray-400">30m</span></p>
                        <div className="text-xs text-gray-400 font-medium mt-1">Promedio 4h/día</div>
                    </div>
                </div>

                <div className="bg-white p-5 rounded-2xl shadow-sm border border-gray-100">
                    <div className="flex justify-between items-center mb-6">
                        <h3 className="font-bold text-gray-800 text-sm">Kilometraje Semanal</h3>
                        <button className="text-gray-400 hover:text-gray-600"><Settings className="w-4 h-4" /></button>
                    </div>
                    <div className="flex items-end justify-between h-32 gap-2">
                        {[40, 65, 30, 85, 50, 20, 70].map((h, i) => (
                            <div key={i} className="flex-1 flex flex-col items-center gap-2 group">
                                <div
                                    className="w-full bg-blue-50 rounded-t-md relative group-hover:bg-blue-100 transition-all"
                                    style={{ height: `${h}%` }}
                                >
                                    <div
                                        className="absolute bottom-0 left-0 right-0 bg-[#1A2B49] rounded-t-md transition-all duration-1000 ease-out"
                                        style={{ height: `${h * 0.6}%` }}
                                    ></div>
                                </div>
                                <span className="text-[10px] font-bold text-gray-400">
                                    {['L', 'M', 'M', 'J', 'V', 'S', 'D'][i]}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="bg-white p-5 rounded-2xl shadow-sm border border-gray-100">
                    <h3 className="font-bold text-gray-800 text-sm mb-4">Estado de la Flota</h3>
                    <div className="flex items-center gap-6">
                        <div className="relative w-32 h-32 flex-shrink-0">
                            <svg viewBox="0 0 36 36" className="w-full h-full transform -rotate-90">
                                <path className="text-gray-100" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="currentColor" strokeWidth="3.8" />
                                <path className="text-[#4CAF50]" strokeDasharray="70, 100" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="currentColor" strokeWidth="3.8" />
                                <path className="text-[#EF4444]" strokeDasharray="20, 100" strokeDashoffset="-70" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="currentColor" strokeWidth="3.8" />
                            </svg>
                            <div className="absolute inset-0 flex items-center justify-center flex-col">
                                <span className="text-2xl font-bold text-[#1A2B49]">12</span>
                                <span className="text-[10px] text-gray-400 uppercase">Total</span>
                            </div>
                        </div>
                        <div className="space-y-3 flex-1">
                            <div className="flex justify-between items-center">
                                <div className="flex items-center gap-2">
                                    <div className="w-2 h-2 rounded-full bg-[#4CAF50]"></div>
                                    <span className="text-xs font-medium text-gray-600">En Movimiento</span>
                                </div>
                                <span className="text-xs font-bold">70%</span>
                            </div>
                            <div className="flex justify-between items-center">
                                <div className="flex items-center gap-2">
                                    <div className="w-2 h-2 rounded-full bg-[#EF4444]"></div>
                                    <span className="text-xs font-medium text-gray-600">Detenidos</span>
                                </div>
                                <span className="text-xs font-bold">20%</span>
                            </div>
                            <div className="flex justify-between items-center">
                                <div className="flex items-center gap-2">
                                    <div className="w-2 h-2 rounded-full bg-gray-300"></div>
                                    <span className="text-xs font-medium text-gray-600">Inactivos</span>
                                </div>
                                <span className="text-xs font-bold">10%</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

// --- COMPONENTE 6: REPORTES ---
const ReportsScreen = () => {
    const reports = [
        { id: 1, name: 'Reporte de Kilometraje - Octubre', date: '25 Oct, 2023', size: '1.2 MB', type: 'PDF' },
        { id: 2, name: 'Historial de Alarmas - Semanal', date: '24 Oct, 2023', size: '850 KB', type: 'XLS' },
        { id: 3, name: 'Uso de Combustible - Q3', date: '01 Oct, 2023', size: '2.4 MB', type: 'PDF' },
        { id: 4, name: 'Actividad de Flota Completa', date: '30 Sep, 2023', size: '5.1 MB', type: 'CSV' },
    ];

    return (
        <div className="h-full flex flex-col bg-gray-50 animate-fade-in pt-24 pb-8 overflow-y-auto">
            <div className="px-6 mb-6">
                <h2 className="text-2xl font-bold mb-2" style={{ color: colors.navy }}>Reportes</h2>
                <p className="text-sm text-gray-500">Descarga los informes de actividad de tu flota.</p>
            </div>

            <div className="px-6 space-y-4">
                {reports.map((report) => (
                    <div key={report.id} className="bg-white p-4 rounded-2xl shadow-sm border border-gray-100 flex items-center justify-between group hover:shadow-md transition-shadow">
                        <div className="flex items-center gap-4">
                            <div className={`w-10 h-10 rounded-xl flex items-center justify-center font-bold text-[10px] ${report.type === 'PDF' ? 'bg-red-50 text-red-600' : 'bg-green-50 text-green-600'}`}>
                                {report.type}
                            </div>
                            <div>
                                <h4 className="font-bold text-gray-800 text-sm mb-0.5">{report.name}</h4>
                                <div className="flex items-center gap-2 text-xs text-gray-400">
                                    <span>{report.date}</span>
                                    <span>•</span>
                                    <span>{report.size}</span>
                                </div>
                            </div>
                        </div>
                        <button className="p-2 rounded-full hover:bg-gray-50 text-gray-400 hover:text-[#1A2B49] transition-colors">
                            <Download className="w-5 h-5" />
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
};

// --- COMPONENTE 7: PERFIL ---
const ProfileScreen = ({ user }: any) => {
    return (
        <div className="h-full bg-gray-50 animate-fade-in pt-24 pb-8 overflow-y-auto">
            <div className="px-6 mb-8 text-center">
                <div className="relative inline-block mb-4">
                    <img src={user.avatar} alt="Profile" className="w-24 h-24 rounded-full border-4 border-white shadow-lg object-cover" />
                    <button className="absolute bottom-0 right-0 bg-[#1A2B49] p-2 rounded-full text-white shadow-md hover:bg-blue-900 transition-colors">
                        <Camera className="w-4 h-4" />
                    </button>
                </div>
                <h2 className="text-2xl font-bold text-gray-900">{user.name}</h2>
                <p className="text-sm text-gray-500">{user.role} • {user.email}</p>
            </div>

            <div className="px-6 grid grid-cols-2 gap-4 mb-8">
                <div className="bg-white p-4 rounded-2xl text-center shadow-sm border border-gray-100">
                    <span className="block text-2xl font-bold text-[#1A2B49]">{user.vehicles}</span>
                    <span className="text-[10px] font-bold text-gray-400 uppercase">Vehículos</span>
                </div>
                <div className="bg-white p-4 rounded-2xl text-center shadow-sm border border-gray-100">
                    <span className="block text-2xl font-bold text-[#4CAF50]">Active</span>
                    <span className="text-[10px] font-bold text-gray-400 uppercase">Estado Cuenta</span>
                </div>
            </div>

            <div className="bg-white rounded-t-[2rem] shadow-[0_-5px_30px_rgba(0,0,0,0.03)] min-h-[300px] p-6">
                <div className="flex justify-between items-center mb-6">
                    <h3 className="font-bold text-lg text-gray-900">Mis Vehículos</h3>
                    <button className="text-xs font-bold text-[#1A2B49] hover:underline">Ver Todos</button>
                </div>

                <div className="space-y-4">
                    {[
                        { name: 'Toyota Corolla 2024', plate: 'ABC-123', status: 'En Ruta' },
                        { name: 'Nissan Versa 2022', plate: 'XYZ-789', status: 'Detenido' },
                        { name: 'Hino Truck 300', plate: 'TRK-001', status: 'En Taller' },
                    ].map((car, i) => (
                        <div key={i} className="flex items-center justify-between p-3 rounded-xl hover:bg-gray-50 transition-colors border border-transparent hover:border-gray-100">
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center text-[#1A2B49]">
                                    <Car className="w-5 h-5" />
                                </div>
                                <div>
                                    <h4 className="font-bold text-sm text-gray-800">{car.name}</h4>
                                    <p className="text-xs text-gray-500 font-mono">{car.plate}</p>
                                </div>
                            </div>
                            <span className={`px-2 py-1 rounded-md text-[10px] font-bold uppercase ${car.status === 'En Ruta' ? 'bg-green-100 text-green-700' :
                                car.status === 'Detenido' ? 'bg-gray-100 text-gray-600' : 'bg-orange-100 text-orange-700'
                                }`}>
                                {car.status}
                            </span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

// --- COMPONENTE 8: CONFIGURACIÓN ---
const SettingsScreen = () => {
    return (
        <div className="h-full bg-gray-50 animate-fade-in pt-24 pb-8 overflow-y-auto">
            <div className="px-6 mb-6">
                <h2 className="text-2xl font-bold mb-2" style={{ color: colors.navy }}>Configuración</h2>
            </div>

            <div className="px-6 space-y-6">
                <section>
                    <h3 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-3 ml-1">General</h3>
                    <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
                        <div className="flex items-center justify-between p-4 border-b border-gray-50">
                            <div className="flex items-center gap-3">
                                <Bell className="w-5 h-5 text-gray-600" />
                                <span className="text-sm font-medium text-gray-800">Notificaciones Push</span>
                            </div>
                            <div className="w-10 h-6 bg-[#1A2B49] rounded-full relative cursor-pointer">
                                <div className="absolute right-1 top-1 w-4 h-4 bg-white rounded-full"></div>
                            </div>
                        </div>
                        <div className="flex items-center justify-between p-4">
                            <div className="flex items-center gap-3">
                                <Moon className="w-5 h-5 text-gray-600" />
                                <span className="text-sm font-medium text-gray-800">Modo Oscuro</span>
                            </div>
                            <div className="w-10 h-6 bg-gray-200 rounded-full relative cursor-pointer">
                                <div className="absolute left-1 top-1 w-4 h-4 bg-white rounded-full shadow-sm"></div>
                            </div>
                        </div>
                    </div>
                </section>

                <section>
                    <h3 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-3 ml-1">Cuenta</h3>
                    <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
                        <button className="w-full flex items-center justify-between p-4 border-b border-gray-50 hover:bg-gray-50 text-left">
                            <div className="flex items-center gap-3">
                                <User className="w-5 h-5 text-gray-600" />
                                <span className="text-sm font-medium text-gray-800">Editar Perfil</span>
                            </div>
                            <ChevronRight className="w-4 h-4 text-gray-400" />
                        </button>
                        <button className="w-full flex items-center justify-between p-4 hover:bg-gray-50 text-left">
                            <div className="flex items-center gap-3">
                                <Lock className="w-5 h-5 text-gray-600" />
                                <span className="text-sm font-medium text-gray-800">Cambiar Contraseña</span>
                            </div>
                            <ChevronRight className="w-4 h-4 text-gray-400" />
                        </button>
                    </div>
                </section>

                <div className="pt-4">
                    <p className="text-center text-xs text-gray-400">Versión 2.4.0 (Build 2023)</p>
                </div>
            </div>
        </div>
    );
};

// --- MAIN CONTAINER COMPONENT ---
const MainLayout = ({ user, onLogout }: any) => {
    const [showMenu, setShowMenu] = useState(false);
    const [showNotifs, setShowNotifs] = useState(false);
    const [currentView, setCurrentView] = useState('live');

    const vehicle = {
        name: "Toyota Corolla 2024",
        plate: "ABC-123",
        status: "active",
        speed: 45,
        address: "Av. Reforma 225, Zona Empresarial",
        lastUpdate: "Ahora"
    };

    const renderView = () => {
        switch (currentView) {
            case 'history': return <HistoryScreen />;
            case 'analytics': return <AnalyticsScreen />;
            case 'reports': return <ReportsScreen />;
            case 'settings': return <SettingsScreen />;
            case 'profile': return <ProfileScreen user={user} />;
            default: return (
                <div className="flex-1 relative h-full w-full animate-fade-in">
                    <div className="flex-1 bg-gray-200 relative w-full h-full">
                        <div className="absolute inset-0 opacity-40 pointer-events-none">
                            <div className="absolute top-[20%] left-0 w-full h-8 bg-gray-300 rotate-12 scale-150"></div>
                            <div className="absolute top-[50%] -left-20 w-[150%] h-12 bg-white border-y border-gray-300 -rotate-3"></div>
                            <div className="absolute top-[10%] right-[30%] w-6 h-full bg-gray-300"></div>
                        </div>

                        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-col items-center">
                            <div className="absolute inset-0 rounded-full animate-ping opacity-20 w-40 h-40 -ml-12 -mt-12" style={{ backgroundColor: colors.navy }}></div>
                            <div className="relative z-10 p-4 bg-white rounded-full shadow-2xl border-4 border-white ring-1 ring-gray-100">
                                <Navigation className="w-8 h-8 fill-current transform" style={{ color: colors.navy }} />
                            </div>
                            <div className="mt-4 bg-white/90 backdrop-blur px-3 py-1 rounded-lg shadow-md border border-gray-200 text-xs font-bold" style={{ color: colors.navy }}>
                                {vehicle.speed} km/h
                            </div>
                        </div>
                    </div>

                    <div className="absolute bottom-0 left-0 right-0 z-20 p-4 pb-8">
                        <div className="bg-white rounded-[2rem] shadow-2xl p-6 w-full max-w-md mx-auto transition-all hover:translate-y-[-5px]">
                            <div className="w-12 h-1.5 bg-gray-200 rounded-full mx-auto mb-6"></div>
                            <div className="flex justify-between items-start mb-5">
                                <div>
                                    <h2 className="text-xl font-bold text-gray-900 mb-1">{vehicle.name}</h2>
                                    <div className="flex items-center gap-2">
                                        <span className="bg-gray-100 text-gray-500 text-[10px] font-bold px-2 py-0.5 rounded uppercase">{vehicle.plate}</span>
                                        <div className="flex items-center text-xs text-green-600 font-medium">
                                            <CheckCircle className="w-3 h-3 mr-1" /> Seguro
                                        </div>
                                    </div>
                                </div>
                                <div className="p-3 bg-blue-50 rounded-2xl">
                                    <Navigation className="w-6 h-6" style={{ color: colors.navy }} />
                                </div>
                            </div>
                            <div className="space-y-4">
                                <div className="flex items-start gap-3 p-3 bg-gray-50 rounded-2xl border border-gray-100">
                                    <MapPin className="w-5 h-5 flex-shrink-0 mt-0.5" style={{ color: colors.navy }} />
                                    <div>
                                        <label className="text-[10px] uppercase font-bold text-gray-400 block mb-0.5">Ubicación</label>
                                        <p className="text-sm font-medium text-gray-800 leading-tight">{vehicle.address}</p>
                                    </div>
                                </div>
                                <div className="flex justify-between items-center px-2">
                                    <div className="flex items-center gap-2 text-xs text-gray-500">
                                        <Clock className="w-3.5 h-3.5" />
                                        Actualizado: <span className="font-semibold text-gray-800">{vehicle.lastUpdate}</span>
                                    </div>
                                    <button className="text-xs font-bold flex items-center gap-1 hover:underline" style={{ color: colors.navy }}>
                                        Ver Detalles <ChevronUp className="w-3 h-3" />
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            );
        }
    };

    return (
        <div className="h-screen w-full relative bg-gray-100 overflow-hidden flex flex-col">
            <MenuOverlay
                isOpen={showMenu}
                onClose={() => setShowMenu(false)}
                onLogout={onLogout}
                user={user}
                currentView={currentView}
                onViewChange={setCurrentView}
            />
            <NotificationOverlay
                isOpen={showNotifs}
                onClose={() => setShowNotifs(false)}
            />

            <div className="absolute top-0 left-0 right-0 z-20 px-6 pt-12 pb-4 flex justify-between items-center pointer-events-none">
                <button
                    onClick={() => setShowMenu(true)}
                    className="pointer-events-auto p-3 rounded-full bg-white shadow-lg hover:bg-gray-50 text-gray-700 transition-transform active:scale-95 border border-gray-100"
                >
                    <Menu className="w-6 h-6" style={{ color: colors.navy }} />
                </button>

                <div className="pointer-events-auto">
                    {currentView === 'live' ? (
                        <div className="flex items-center gap-2 bg-white/95 backdrop-blur-md px-4 py-2 rounded-full shadow-lg border border-gray-100">
                            <div className="w-2.5 h-2.5 rounded-full animate-pulse" style={{ backgroundColor: colors.green }}></div>
                            <span className="text-xs font-bold tracking-wide" style={{ color: colors.navy }}>EN LÍNEA</span>
                        </div>
                    ) : (
                        <div className="w-10 h-10 bg-[#1A2B49] rounded-xl flex items-center justify-center shadow-lg">
                            <ShieldCheck className="text-white w-5 h-5" />
                        </div>
                    )}
                </div>

                <button
                    onClick={() => setShowNotifs(true)}
                    className="pointer-events-auto p-3 rounded-full bg-white shadow-lg hover:bg-gray-50 relative transition-transform active:scale-95 border border-gray-100"
                >
                    <Bell className="w-6 h-6" style={{ color: colors.navy }} />
                    <span className="absolute top-2 right-2 w-3 h-3 rounded-full border-2 border-white bg-red-500"></span>
                </button>
            </div>

            <div className="flex-1 relative h-full w-full bg-gray-50">
                {renderView()}
            </div>
        </div>
    );
};

// --- MAIN APP ---
export default function MobilDemoPage() {
    const [user, setUser] = useState<any>(null);

    return (
        <div className="font-sans antialiased text-gray-900 bg-gray-100 h-screen w-full flex justify-center overflow-hidden">
            <div className="w-full max-w-md h-full bg-white shadow-2xl relative overflow-hidden">
                {user ? (
                    <MainLayout user={user} onLogout={() => setUser(null)} />
                ) : (
                    <LoginScreen onLogin={(userData: any) => setUser(userData)} />
                )}
            </div>

            <style>{`
                @keyframes slide-in-left {
                    from { transform: translateX(-100%); opacity: 0; }
                    to { transform: translateX(0); opacity: 1; }
                }
                @keyframes slide-in-right {
                    from { transform: translateX(100%); opacity: 0; }
                    to { transform: translateX(0); opacity: 1; }
                }
                @keyframes fade-in {
                    from { opacity: 0; transform: translateY(10px); }
                    to { opacity: 1; transform: translateY(0); }
                }
                .animate-slide-in-left { animation: slide-in-left 0.3s ease-out forwards; }
                .animate-slide-in-right { animation: slide-in-right 0.3s ease-out forwards; }
                .animate-fade-in { animation: fade-in 0.4s ease-out forwards; }
                .no-scrollbar::-webkit-scrollbar { display: none; }
                .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
            `}</style>
        </div>
    );
}
