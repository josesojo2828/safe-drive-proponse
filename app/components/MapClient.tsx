'use client';

import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { Icon, LatLngExpression } from 'leaflet';
import { cars } from '../data/cars';
import { drivers } from '../data/drivers';
import 'leaflet/dist/leaflet.css';

const createIcon = (color: string) => {
    return new Icon({
        iconUrl: `data:image/svg+xml;base64,${btoa(`
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="32" height="32">
        <circle cx="12" cy="12" r="10" fill="${color}" stroke="white" stroke-width="2"/>
        <polygon points="12,6 16,14 12,12 8,14" fill="white"/>
      </svg>
    `)}`,
        iconSize: [32, 32],
        iconAnchor: [16, 16],
        popupAnchor: [0, -16],
    });
};

const statusColors: Record<string, string> = {
    moving: '#10B981',
    stopped: '#F59E0B',
    no_signal: '#6B7280',
    maintenance: '#EF4444',
};

export default function MapClient() {
    const center: LatLngExpression = [10.48, -66.9];

    const getDriverName = (driverId: string | null) => {
        if (!driverId) return 'Sin asignar';
        const driver = drivers.find((d) => d.id === driverId);
        return driver ? `${driver.firstName} ${driver.lastName}` : 'Sin asignar';
    };

    return (
        <div className="map-container">
            <MapContainer
                center={center}
                zoom={12}
                style={{ height: '100%', width: '100%' }}
                scrollWheelZoom={true}
            >
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                {cars.map((car) => (
                    <Marker
                        key={car.id}
                        position={[car.lastLocation.lat, car.lastLocation.lng]}
                        icon={createIcon(statusColors[car.status] || '#6B7280')}
                    >
                        <Popup>
                            <div className="map-popup">
                                <strong>
                                    {car.brand} {car.model}
                                </strong>
                                <p>Placa: {car.plate}</p>
                                <p>Conductor: {getDriverName(car.assignedDriverId)}</p>
                                <p>Combustible: {car.fuelLevel}%</p>
                            </div>
                        </Popup>
                    </Marker>
                ))}
            </MapContainer>
        </div>
    );
}
