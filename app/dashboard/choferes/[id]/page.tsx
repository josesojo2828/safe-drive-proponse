'use client';

import { useParams, notFound } from 'next/navigation';
import Link from 'next/link';
import { ArrowLeft, Star, Phone, Mail, CreditCard, Calendar, Car } from 'lucide-react';
import { getDriverById } from '../../../data/drivers';
import { getTripsByDriver } from '../../../data/trips';
import { getCarById } from '../../../data/cars';
import StatusBadge from '../../../components/StatusBadge';
import DataTable from '../../../components/DataTable';
import { formatDate, formatDateTime, formatDistance, formatDuration } from '../../../lib/utils';
import { Trip } from '../../../types/trip';

export default function DriverProfilePage() {
    const params = useParams();
    const id = params.id as string;
    const driver = getDriverById(id);

    if (!driver) {
        return (
            <div>
                <Link href="/dashboard/choferes" className="back-link">
                    <ArrowLeft size={16} />
                    Volver a Conductores
                </Link>
                <p>Conductor no encontrado</p>
            </div>
        );
    }

    const driverTrips = getTripsByDriver(id);
    const assignedCar = driver.assignedCarId ? getCarById(driver.assignedCarId) : null;

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
            <Link href="/dashboard/choferes" className="back-link">
                <ArrowLeft size={16} />
                Volver a Conductores
            </Link>

            <div className="profile-grid">
                <div className="profile-card">
                    <div className="profile-header">
                        <div className="profile-avatar">
                            <img src={driver.avatar} alt={driver.firstName} />
                        </div>
                        <h1 className="profile-name">{driver.firstName} {driver.lastName}</h1>
                        <p className="profile-subtitle">{driver.licenseNumber}</p>
                        <div style={{ marginTop: '12px' }}>
                            <StatusBadge status={driver.status} size="md" />
                        </div>
                    </div>

                    <div className="profile-body">
                        <div className="profile-section">
                            <h3 className="profile-section-title">Información de Contacto</h3>
                            <div className="profile-info-grid">
                                <div className="profile-info-item">
                                    <span className="profile-info-label"><Phone size={14} /> Teléfono</span>
                                    <span className="profile-info-value">{driver.phone}</span>
                                </div>
                                <div className="profile-info-item">
                                    <span className="profile-info-label"><Mail size={14} /> Email</span>
                                    <span className="profile-info-value">{driver.email}</span>
                                </div>
                            </div>
                        </div>

                        <div className="profile-section">
                            <h3 className="profile-section-title">Licencia</h3>
                            <div className="profile-info-grid">
                                <div className="profile-info-item">
                                    <span className="profile-info-label"><CreditCard size={14} /> Número</span>
                                    <span className="profile-info-value">{driver.licenseNumber}</span>
                                </div>
                                <div className="profile-info-item">
                                    <span className="profile-info-label"><Calendar size={14} /> Vencimiento</span>
                                    <span className="profile-info-value">{formatDate(driver.licenseExpiry)}</span>
                                </div>
                            </div>
                        </div>

                        <div className="profile-section">
                            <h3 className="profile-section-title">Estadísticas</h3>
                            <div className="profile-info-grid">
                                <div className="profile-info-item">
                                    <span className="profile-info-label"><Star size={14} /> Calificación</span>
                                    <span className="profile-info-value" style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                                        <Star size={16} fill="#f59e0b" color="#f59e0b" />
                                        {driver.rating}
                                    </span>
                                </div>
                                <div className="profile-info-item">
                                    <span className="profile-info-label">Total Viajes</span>
                                    <span className="profile-info-value">{driver.totalTrips}</span>
                                </div>
                                <div className="profile-info-item">
                                    <span className="profile-info-label"><Calendar size={14} /> Fecha Ingreso</span>
                                    <span className="profile-info-value">{formatDate(driver.joinDate)}</span>
                                </div>
                                {assignedCar && (
                                    <div className="profile-info-item">
                                        <span className="profile-info-label"><Car size={14} /> Vehículo Asignado</span>
                                        <span className="profile-info-value">{assignedCar.brand} {assignedCar.model}</span>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>

                <div>
                    <div className="page-header">
                        <h2 className="page-title">Historial de Viajes</h2>
                        <p className="page-subtitle">Viajes realizados por este conductor</p>
                    </div>
                    <DataTable
                        data={driverTrips}
                        columns={tripColumns}
                        itemsPerPage={5}
                    />
                </div>
            </div>
        </div>
    );
}
