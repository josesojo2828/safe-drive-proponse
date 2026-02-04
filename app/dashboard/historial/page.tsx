'use client';

import DataTable from '../../components/DataTable';
import StatusBadge from '../../components/StatusBadge';
import { trips } from '../../data/trips';
import { drivers } from '../../data/drivers';
import { cars } from '../../data/cars';
import { formatDateTime, formatDuration, formatDistance } from '../../lib/utils';
import { Trip } from '../../types/trip';

export default function HistorialPage() {
    const getDriverName = (driverId: string) => {
        const driver = drivers.find((d) => d.id === driverId);
        return driver ? `${driver.firstName} ${driver.lastName}` : 'Desconocido';
    };

    const getCarInfo = (carId: string) => {
        const car = cars.find((c) => c.id === carId);
        return car ? `${car.brand} ${car.model} (${car.plate})` : 'Desconocido';
    };

    const columns = [
        {
            key: 'id',
            label: 'ID',
        },
        {
            key: 'driverId',
            label: 'Conductor',
            render: (trip: Trip) => getDriverName(trip.driverId),
        },
        {
            key: 'carId',
            label: 'Vehículo',
            render: (trip: Trip) => getCarInfo(trip.carId),
        },
        {
            key: 'startTime',
            label: 'Inicio',
            render: (trip: Trip) => formatDateTime(trip.startTime),
        },
        {
            key: 'startLocation',
            label: 'Origen',
        },
        {
            key: 'endLocation',
            label: 'Destino',
        },
        {
            key: 'distance',
            label: 'Distancia',
            render: (trip: Trip) => formatDistance(trip.distance),
        },
        {
            key: 'duration',
            label: 'Duración',
            render: (trip: Trip) => formatDuration(trip.duration),
        },
        {
            key: 'status',
            label: 'Estado',
            render: (trip: Trip) => <StatusBadge status={trip.status} />,
        },
    ];

    return (
        <div>
            <div className="page-header">
                <h1 className="page-title">Historial de Viajes</h1>
                <p className="page-subtitle">Registro completo de todos los viajes realizados</p>
            </div>

            <DataTable
                data={trips}
                columns={columns}
                searchPlaceholder="Buscar por destino..."
                searchKeys={['startLocation', 'endLocation']}
                itemsPerPage={10}
            />
        </div>
    );
}
