export type DriverStatus = 'active' | 'inactive' | 'on_trip' | 'rest';

export interface Driver {
    id: string;
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    licenseNumber: string;
    licenseExpiry: string;
    status: DriverStatus;
    avatar: string;
    rating: number;
    totalTrips: number;
    joinDate: string;
    assignedCarId: string | null;
}
