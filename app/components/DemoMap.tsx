'use client';

import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { Icon, LatLngExpression } from 'leaflet';
import 'leaflet/dist/leaflet.css';

const vehicles = [
    { id: 1, name: 'Nissan Versa', plate: 'ABC-123', status: 'moving', lat: 10.4806, lng: -66.9036 },
    { id: 2, name: 'Chevrolet Spark', plate: 'XYZ-567', status: 'stopped', lat: 10.4950, lng: -66.8500 },
    { id: 3, name: 'Ford Ranger', plate: 'F-4500', status: 'no_signal', lat: 10.5100, lng: -66.9200 },
    { id: 4, name: 'Honda Civic', plate: 'JQX-998', status: 'moving', lat: 10.4700, lng: -66.8800 },
    { id: 5, name: 'Toyota Hiace', plate: 'VAN-001', status: 'stopped', lat: 10.4600, lng: -66.9100 },
    { id: 6, name: 'Kia Rio', plate: 'KIA-456', status: 'moving', lat: 10.4850, lng: -66.8650 },
];

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
};

export default function DemoMap() {
    const center: LatLngExpression = [10.48, -66.9];

    return (
        <div className="demo-map">
            <MapContainer
                center={center}
                zoom={12}
                style={{ height: '100%', width: '100%', borderRadius: '12px' }}
                scrollWheelZoom={true}
            >
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                {vehicles.map((vehicle) => (
                    <Marker
                        key={vehicle.id}
                        position={[vehicle.lat, vehicle.lng]}
                        icon={createIcon(statusColors[vehicle.status] || '#6B7280')}
                    >
                        <Popup>
                            <div style={{ textAlign: 'center' }}>
                                <strong>{vehicle.name}</strong>
                                <p style={{ margin: '4px 0', fontSize: '12px' }}>Placa: {vehicle.plate}</p>
                            </div>
                        </Popup>
                    </Marker>
                ))}
            </MapContainer>
        </div>
    );
}
