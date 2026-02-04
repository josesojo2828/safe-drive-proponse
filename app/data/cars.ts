import { Car } from '../types/car';

export const cars: Car[] = [
    {
        id: 'CAR001',
        brand: 'Nissan',
        model: 'Versa',
        plate: 'ABC-123',
        year: 2022,
        color: 'Blanco',
        status: 'moving',
        fuelLevel: 75,
        mileage: 45230,
        lastLocation: {
            lat: 10.4806,
            lng: -66.9036,
            updatedAt: '2026-02-04T16:50:00Z',
        },
        assignedDriverId: 'DRV001',
    },
    {
        id: 'CAR002',
        brand: 'Chevrolet',
        model: 'Spark',
        plate: 'XYZ-567',
        year: 2021,
        color: 'Rojo',
        status: 'stopped',
        fuelLevel: 42,
        mileage: 62100,
        lastLocation: {
            lat: 10.4950,
            lng: -66.8500,
            updatedAt: '2026-02-04T16:25:00Z',
        },
        assignedDriverId: 'DRV002',
    },
    {
        id: 'CAR003',
        brand: 'Ford',
        model: 'Ranger',
        plate: 'F-4500',
        year: 2023,
        color: 'Negro',
        status: 'no_signal',
        fuelLevel: 88,
        mileage: 28500,
        lastLocation: {
            lat: 10.5100,
            lng: -66.9200,
            updatedAt: '2026-02-04T12:30:00Z',
        },
        assignedDriverId: 'DRV003',
    },
    {
        id: 'CAR004',
        brand: 'Honda',
        model: 'Civic',
        plate: 'JQX-998',
        year: 2022,
        color: 'Gris',
        status: 'moving',
        fuelLevel: 60,
        mileage: 38900,
        lastLocation: {
            lat: 10.4700,
            lng: -66.8800,
            updatedAt: '2026-02-04T16:51:00Z',
        },
        assignedDriverId: 'DRV005',
    },
    {
        id: 'CAR005',
        brand: 'Toyota',
        model: 'Hiace',
        plate: 'VAN-001',
        year: 2020,
        color: 'Blanco',
        status: 'stopped',
        fuelLevel: 35,
        mileage: 98200,
        lastLocation: {
            lat: 10.4600,
            lng: -66.9100,
            updatedAt: '2026-02-04T14:20:00Z',
        },
        assignedDriverId: 'DRV007',
    },
    {
        id: 'CAR006',
        brand: 'Kia',
        model: 'Rio',
        plate: 'KIA-456',
        year: 2023,
        color: 'Azul',
        status: 'moving',
        fuelLevel: 90,
        mileage: 15600,
        lastLocation: {
            lat: 10.4850,
            lng: -66.8650,
            updatedAt: '2026-02-04T16:52:00Z',
        },
        assignedDriverId: 'DRV008',
    },
];

export const getCarById = (id: string): Car | undefined => {
    return cars.find((car) => car.id === id);
};

export const getActiveCars = (): Car[] => {
    return cars.filter((car) => car.status === 'moving' || car.status === 'stopped');
};

export const getCarsByStatus = (status: Car['status']): Car[] => {
    return cars.filter((car) => car.status === status);
};
