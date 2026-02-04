'use client';

import { useParams } from 'next/navigation';
import Link from 'next/link';
import { ArrowLeft, Fuel, Gauge, MapPin, Calendar, User, Palette } from 'lucide-react';
import { getCarById } from '../../../data/cars';
import { getTripsByCar } from '../../../data/trips';
import { getDriverById } from '../../../data/drivers';
import StatusBadge from '../../../components/StatusBadge';
import DataTable from '../../../components/DataTable';
import { formatDateTime, formatDistance, formatDuration, formatRelativeTime } from '../../../lib/utils';
import { Trip } from '../../../types/trip';

export default function CarProfilePage() {
    const params = useParams();
    const id = params.id as string;
    const car = getCarById(id);

    if (!car) {
        return (
            <div>
                <Link href="/dashboard/carros" className="back-link">
                    <ArrowLeft size={16} />
                    Volver a Vehículos
                </Link>
                <p>Vehículo no encontrado</p>
            </div>
        );
    }

    const carTrips = getTripsByCar(id);
    const assignedDriver = car.assignedDriverId ? getDriverById(car.assignedDriverId) : null;

    const tripColumns = [
        { key: 'id', label: 'ID' },
        { key: 'startTime', label: 'Fecha', render: (trip: Trip) => formatDateTime(trip.startTime) },
        { key: 'startLocation', label: 'Origen' },
        { key: 'endLocation', label: 'Destino' },
        { key: 'distance', label: 'Distancia', render: (trip: Trip) => formatDistance(trip.distance) },
        { key: 'duration', label: 'Duración', render: (trip: Trip) => formatDuration(trip.duration) },
        { key: 'status', label: 'Estado', render: (trip: Trip) => <StatusBadge status={trip.status} /> },
    ];

    return (
        <div>
            <Link href="/dashboard/carros" className="back-link">
                <ArrowLeft size={16} />
                Volver a Vehículos
            </Link>

            <div className="profile-grid">
                <div className="profile-card">
                    <div className="profile-header">
                        <div className="profile-avatar" style={{ background: '#3b82f6', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                            <span style={{ fontSize: '36px' }}>🚗</span>
                        </div>
                        <h1 className="profile-name">{car.brand} {car.model}</h1>
                        <p className="profile-subtitle">{car.plate}</p>
                        <div style={{ marginTop: '12px' }}>
                            <StatusBadge status={car.status} size="md" />
                        </div>
                    </div>

                    <div className="profile-body">
                        <div className="profile-section">
                            <h3 className="profile-section-title">Información del Vehículo</h3>
                            <div className="profile-info-grid">
                                <div className="profile-info-item">
                                    <span className="profile-info-label"><Calendar size={14} /> Año</span>
                                    <span className="profile-info-value">{car.year}</span>
                                </div>
                                <div className="profile-info-item">
                                    <span className="profile-info-label"><Palette size={14} /> Color</span>
                                    <span className="profile-info-value">{car.color}</span>
                                </div>
                                <div className="profile-info-item">
                                    <span className="profile-info-label"><Gauge size={14} /> Kilometraje</span>
                                    <span className="profile-info-value">{car.mileage.toLocaleString()} km</span>
                                </div>
                                <div className="profile-info-item">
                                    <span className="profile-info-label"><Fuel size={14} /> Combustible</span>
                                    <span className="profile-info-value" style={{ color: car.fuelLevel < 30 ? '#ef4444' : '#10b981' }}>
                                        {car.fuelLevel}%
                                    </span>
                                </div>
                            </div>
                        </div>

                        <div className="profile-section">
                            <h3 className="profile-section-title">Ubicación</h3>
                            <div className="profile-info-grid">
                                <div className="profile-info-item">
                                    <span className="profile-info-label"><MapPin size={14} /> Última ubicación</span>
                                    <span className="profile-info-value">
                                        {car.lastLocation.lat.toFixed(4)}, {car.lastLocation.lng.toFixed(4)}
                                    </span>
                                </div>
                                <div className="profile-info-item">
                                    <span className="profile-info-label">Última actualización</span>
                                    <span className="profile-info-value">{formatRelativeTime(car.lastLocation.updatedAt)}</span>
                                </div>
                            </div>
                        </div>

                        <div className="profile-section">
                            <h3 className="profile-section-title">Conductor Asignado</h3>
                            {assignedDriver ? (
                                <div className="profile-info-grid">
                                    <div className="profile-info-item">
                                        <span className="profile-info-label"><User size={14} /> Nombre</span>
                                        <span className="profile-info-value">{assignedDriver.firstName} {assignedDriver.lastName}</span>
                                    </div>
                                    <div className="profile-info-item">
                                        <span className="profile-info-label">Teléfono</span>
                                        <span className="profile-info-value">{assignedDriver.phone}</span>
                                    </div>
                                </div>
                            ) : (
                                <p style={{ color: '#6b7280', fontSize: '14px' }}>Sin conductor asignado</p>
                            )}
                        </div>
                    </div>
                </div>

                <div>
                    <div className="page-header">
                        <h2 className="page-title">Historial de Viajes</h2>
                        <p className="page-subtitle">Viajes realizados con este vehículo</p>
                    </div>
                    <DataTable
                        data={carTrips}
                        columns={tripColumns}
                        itemsPerPage={5}
                    />
                </div>
            </div>
        </div>
    );
}
