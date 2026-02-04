'use client';

import DataTable from '../../components/DataTable';
import StatusBadge from '../../components/StatusBadge';
import { cars } from '../../data/cars';
import { drivers } from '../../data/drivers';
import { Car } from '../../types/car';
import { Fuel } from 'lucide-react';

export default function CarrosPage() {
    const getDriverName = (driverId: string | null) => {
        if (!driverId) return 'Sin asignar';
        const driver = drivers.find((d) => d.id === driverId);
        return driver ? `${driver.firstName} ${driver.lastName}` : 'Sin asignar';
    };

    const columns = [
        {
            key: 'id',
            label: 'ID',
        },
        {
            key: 'name',
            label: 'Vehículo',
            render: (car: Car) => (
                <div>
                    <div style={{ fontWeight: 500 }}>{car.brand} {car.model}</div>
                    <div style={{ fontSize: '12px', color: '#6b7280' }}>{car.year} • {car.color}</div>
                </div>
            ),
        },
        {
            key: 'plate',
            label: 'Placa',
        },
        {
            key: 'assignedDriverId',
            label: 'Conductor',
            render: (car: Car) => getDriverName(car.assignedDriverId),
        },
        {
            key: 'mileage',
            label: 'Kilometraje',
            render: (car: Car) => `${car.mileage.toLocaleString()} km`,
        },
        {
            key: 'fuelLevel',
            label: 'Combustible',
            render: (car: Car) => (
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <Fuel size={16} color={car.fuelLevel < 30 ? '#ef4444' : '#10b981'} />
                    <span>{car.fuelLevel}%</span>
                </div>
            ),
        },
        {
            key: 'status',
            label: 'Estado',
            render: (car: Car) => <StatusBadge status={car.status} />,
        },
    ];

    return (
        <div>
            <div className="page-header">
                <h1 className="page-title">Vehículos</h1>
                <p className="page-subtitle">Gestión de la flota vehicular</p>
            </div>

            <DataTable
                data={cars}
                columns={columns}
                searchPlaceholder="Buscar vehículo..."
                searchKeys={['brand', 'model', 'plate']}
                linkPrefix="/dashboard/carros"
                idKey="id"
                itemsPerPage={10}
            />
        </div>
    );
}
