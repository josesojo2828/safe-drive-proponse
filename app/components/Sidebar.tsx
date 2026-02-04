'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
    LayoutDashboard,
    History,
    Car,
    Users,
    Map,
    Settings,
    LogOut,
    Shield,
} from 'lucide-react';

interface NavItem {
    label: string;
    href: string;
    icon: React.ReactNode;
}

const navItems: NavItem[] = [
    {
        label: 'Dashboard',
        href: '/dashboard',
        icon: <LayoutDashboard size={20} />,
    },
    {
        label: 'Historial',
        href: '/dashboard/historial',
        icon: <History size={20} />,
    },
    {
        label: 'Vehículos',
        href: '/dashboard/carros',
        icon: <Car size={20} />,
    },
    {
        label: 'Conductores',
        href: '/dashboard/choferes',
        icon: <Users size={20} />,
    },
    {
        label: 'Mapa',
        href: '/dashboard/mapa',
        icon: <Map size={20} />,
    },
];

export default function Sidebar() {
    const pathname = usePathname();

    const isActive = (href: string) => {
        if (href === '/dashboard') {
            return pathname === '/dashboard';
        }
        return pathname.startsWith(href);
    };

    return (
        <aside className="sidebar">
            <div className="sidebar-header">
                <div className="sidebar-logo">
                    <Shield size={32} className="logo-icon" />
                    <div className="logo-text">
                        <span className="logo-title">Safe Drive</span>
                        <span className="logo-subtitle">WEB PLATFORM</span>
                    </div>
                </div>
            </div>

            <nav className="sidebar-nav">
                {navItems.map((item) => (
                    <Link
                        key={item.href}
                        href={item.href}
                        className={`nav-item ${isActive(item.href) ? 'active' : ''}`}
                    >
                        {item.icon}
                        <span>{item.label}</span>
                    </Link>
                ))}
            </nav>

            <div className="sidebar-footer">
                <Link href="#" className="nav-item">
                    <Settings size={20} />
                    <span>Configuración</span>
                </Link>
                <Link href="/" className="nav-item logout">
                    <LogOut size={20} />
                    <span>Cerrar Sesión</span>
                </Link>
            </div>
        </aside>
    );
}
