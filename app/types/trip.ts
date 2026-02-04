export type TripStatus = 'completed' | 'in_progress' | 'cancelled';

export interface RoutePoint {
    lat: number;
    lng: number;
    timestamp: string;
}

export interface Trip {
    id: string;
    driverId: string;
    carId: string;
    startTime: string;
    endTime: string | null;
    startLocation: string;
    endLocation: string;
    distance: number;
    duration: number;
    status: TripStatus;
    route: RoutePoint[];
    fuelConsumed: number;
    maxSpeed: number;
    avgSpeed: number;
}
