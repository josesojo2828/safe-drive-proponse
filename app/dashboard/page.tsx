import { Car, Users, Route, Fuel } from 'lucide-react';
import FleetList from '../components/FleetList';
import LiveMap from '../components/LiveMap';
import StatsCard from '../components/StatsCard';
import { cars } from '../data/cars';
import { drivers } from '../data/drivers';
import { trips, getActiveTrips, getCompletedTrips } from '../data/trips';

export default function DashboardPage() {
    const activeTrips = getActiveTrips();
    const completedTrips = getCompletedTrips();
    const totalDistance = trips.reduce((acc, trip) => acc + trip.distance, 0);
    const avgFuelLevel = Math.round(cars.reduce((acc, car) => acc + car.fuelLevel, 0) / cars.length);

    return (
        <div>
            {/* Stats Grid */}
            <div className="stats-grid">
                <StatsCard
                    title="Vehículos Activos"
                    value={cars.filter(c => c.status === 'moving').length}
                    subtitle={`de ${cars.length} totales`}
                    icon={Car}
                    color="blue"
                    trend={{ value: 12, isPositive: true }}
                />
                <StatsCard
                    title="Conductores en Línea"
                    value={drivers.filter(d => d.status === 'on_trip' || d.status === 'active').length}
                    subtitle={`de ${drivers.length} registrados`}
                    icon={Users}
                    color="green"
                    trend={{ value: 8, isPositive: true }}
                />
                <StatsCard
                    title="Viajes Hoy"
                    value={activeTrips.length + completedTrips.length}
                    subtitle={`${activeTrips.length} en curso`}
                    icon={Route}
                    color="orange"
                    trend={{ value: 5, isPositive: true }}
                />
                <StatsCard
                    title="Combustible Promedio"
                    value={`${avgFuelLevel}%`}
                    subtitle={`${totalDistance.toFixed(0)} km recorridos`}
                    icon={Fuel}
                    color="purple"
                />
            </div>

            {/* Main Grid */}
            <div className="dashboard-grid">
                <FleetList />
                <LiveMap />
            </div>
        </div>
    );
}
