'use client';

import { useEffect, useState } from 'react';
import { Bell, Filter, Radio } from 'lucide-react';

interface LiveMapProps {
    showHeader?: boolean;
}

export default function LiveMap({ showHeader = true }: LiveMapProps) {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) {
        return (
            <div className="live-map">
                {showHeader && (
                    <div className="map-header">
                        <div className="tracking-status">
                            <Radio size={16} className="tracking-icon" />
                            <span className="tracking-label">Live Tracking</span>
                            <span className="tracking-update">• Cargando...</span>
                        </div>
                        <div className="map-actions">
                            <button className="icon-btn">
                                <Bell size={18} />
                            </button>
                            <button className="icon-btn">
                                <Filter size={18} />
                            </button>
                        </div>
                    </div>
                )}
                <div className="map-container map-loading">
                    <div className="loading-spinner"></div>
                    <p>Cargando mapa...</p>
                </div>
            </div>
        );
    }

    return (
        <div className="live-map">
            {showHeader && (
                <div className="map-header">
                    <div className="tracking-status">
                        <Radio size={16} className="tracking-icon active" />
                        <span className="tracking-label">Live Tracking</span>
                        <span className="tracking-update">• Actualizando cada 1s</span>
                    </div>
                    <div className="map-actions">
                        <button className="icon-btn">
                            <Bell size={18} />
                        </button>
                        <button className="icon-btn">
                            <Filter size={18} />
                        </button>
                    </div>
                </div>
            )}
            <MapContent />
        </div>
    );
}

function MapContent() {
    const [MapComponent, setMapComponent] = useState<React.ReactNode>(null);

    useEffect(() => {
        import('./MapClient').then((mod) => {
            const MapClient = mod.default;
            setMapComponent(<MapClient />);
        });
    }, []);

    if (!MapComponent) {
        return (
            <div className="map-container map-loading">
                <div className="loading-spinner"></div>
                <p>Cargando mapa...</p>
            </div>
        );
    }

    return <>{MapComponent}</>;
}
