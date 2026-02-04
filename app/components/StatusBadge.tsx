'use client';

import { CarStatus } from '../types/car';

interface StatusBadgeProps {
    status: CarStatus | 'active' | 'inactive' | 'on_trip' | 'rest' | 'completed' | 'in_progress' | 'cancelled';
    size?: 'sm' | 'md';
}

const statusConfig: Record<string, { label: string; className: string }> = {
    moving: { label: 'EN MOVIMIENTO', className: 'badge-moving' },
    stopped: { label: 'DETENIDO', className: 'badge-stopped' },
    no_signal: { label: 'SIN SEÑAL', className: 'badge-no-signal' },
    maintenance: { label: 'MANTENIMIENTO', className: 'badge-maintenance' },
    active: { label: 'ACTIVO', className: 'badge-active' },
    inactive: { label: 'INACTIVO', className: 'badge-inactive' },
    on_trip: { label: 'EN VIAJE', className: 'badge-moving' },
    rest: { label: 'DESCANSO', className: 'badge-stopped' },
    completed: { label: 'COMPLETADO', className: 'badge-active' },
    in_progress: { label: 'EN CURSO', className: 'badge-moving' },
    cancelled: { label: 'CANCELADO', className: 'badge-inactive' },
};

export default function StatusBadge({ status, size = 'sm' }: StatusBadgeProps) {
    const config = statusConfig[status] || { label: status.toUpperCase(), className: 'badge-default' };

    return (
        <span className={`status-badge ${config.className} ${size === 'md' ? 'badge-md' : ''}`}>
            {config.label}
        </span>
    );
}
