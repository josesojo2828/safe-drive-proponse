'use client';

import DataTable from '../../components/DataTable';
import StatusBadge from '../../components/StatusBadge';
import { drivers } from '../../data/drivers';
import { Driver } from '../../types/driver';
import { Star } from 'lucide-react';

export default function ChoferesPage() {
    const columns = [
        {
            key: 'id',
            label: 'ID',
        },
        {
            key: 'name',
            label: 'Nombre',
            render: (driver: Driver) => (
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                    <img
                        src={driver.avatar}
                        alt={driver.firstName}
                        style={{ width: '36px', height: '36px', borderRadius: '50%' }}
                    />
                    <div>
                        <div style={{ fontWeight: 500 }}>{driver.firstName} {driver.lastName}</div>
                        <div style={{ fontSize: '12px', color: '#6b7280' }}>{driver.email}</div>
                    </div>
                </div>
            ),
        },
        {
            key: 'phone',
            label: 'Teléfono',
        },
        {
            key: 'licenseNumber',
            label: 'Licencia',
        },
        {
            key: 'totalTrips',
            label: 'Viajes',
        },
        {
            key: 'rating',
            label: 'Calificación',
            render: (driver: Driver) => (
                <div className="rating">
                    <Star size={16} className="rating-star" fill="#f59e0b" />
                    <span className="rating-value">{driver.rating}</span>
                </div>
            ),
        },
        {
            key: 'status',
            label: 'Estado',
            render: (driver: Driver) => <StatusBadge status={driver.status} />,
        },
    ];

    return (
        <div>
            <div className="page-header">
                <h1 className="page-title">Conductores</h1>
                <p className="page-subtitle">Gestión de conductores registrados</p>
            </div>

            <DataTable
                data={drivers}
                columns={columns}
                searchPlaceholder="Buscar conductor..."
                searchKeys={['firstName', 'lastName', 'email', 'licenseNumber']}
                linkPrefix="/dashboard/choferes"
                idKey="id"
                itemsPerPage={10}
            />
        </div>
    );
}
