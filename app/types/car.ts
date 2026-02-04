export type CarStatus = 'moving' | 'stopped' | 'no_signal' | 'maintenance';

export interface CarLocation {
    lat: number;
    lng: number;
    updatedAt: string;
}

export interface Car {
    id: string;
    brand: string;
    model: string;
    plate: string;
    year: number;
    color: string;
    status: CarStatus;
    fuelLevel: number;
    mileage: number;
    lastLocation: CarLocation;
    assignedDriverId: string | null;
}
