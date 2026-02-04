'use client';

import { useState } from 'react';
import { Search } from 'lucide-react';
import { Car } from '../types/car';
import { cars } from '../data/cars';
import { drivers } from '../data/drivers';
import StatusBadge from './StatusBadge';
import { formatRelativeTime } from '../lib/utils';

export default function FleetList() {
    const [searchTerm, setSearchTerm] = useState('');

    const filteredCars = cars.filter(
        (car) =>
            car.brand.toLowerCase().includes(searchTerm.toLowerCase()) ||
            car.model.toLowerCase().includes(searchTerm.toLowerCase()) ||
            car.plate.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const movingCars = cars.filter((c) => c.status === 'moving').length;
    const stoppedCars = cars.filter((c) => c.status === 'stopped' || c.status === 'no_signal').length;

    const getDriverName = (driverId: string | null) => {
        if (!driverId) return 'Sin asignar';
        const driver = drivers.find((d) => d.id === driverId);
        return driver ? `${driver.firstName} ${driver.lastName}` : 'Sin asignar';
    };

    return (
        <div className="fleet-list">
            <h2 className="fleet-title">Flota Activa</h2>

            <div className="fleet-stats">
                <div className="stat-item">
                    <span className="stat-value">{cars.length}</span>
                    <span className="stat-label">TOTAL</span>
                </div>
                <div className="stat-item">
                    <span className="stat-value">{movingCars}</span>
                    <span className="stat-label">MOVIENDO</span>
                </div>
                <div className="stat-item">
                    <span className="stat-value">{stoppedCars}</span>
                    <span className="stat-label">PARADO</span>
                </div>
            </div>

            <div className="search-box">
                <Search size={16} className="search-icon" />
                <input
                    type="text"
                    placeholder="Buscar placa o nombre..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="search-input"
                />
            </div>

            <div className="vehicle-list">
                {filteredCars.map((car) => (
                    <VehicleCard key={car.id} car={car} driverName={getDriverName(car.assignedDriverId)} />
                ))}
            </div>
        </div>
    );
}

interface VehicleCardProps {
    car: Car;
    driverName: string;
}

function VehicleCard({ car, driverName }: VehicleCardProps) {
    return (
        <div className="vehicle-card">
            <div className="vehicle-info">
                <h3 className="vehicle-name">
                    {car.brand} {car.model}
                </h3>
                <p className="vehicle-plate">{car.plate}</p>
            </div>
            <div className="vehicle-meta">
                <span className="vehicle-time">{formatRelativeTime(car.lastLocation.updatedAt)}</span>
                <StatusBadge status={car.status} />
            </div>
        </div>
    );
}
