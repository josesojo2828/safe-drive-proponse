'use client';

import { LucideIcon } from 'lucide-react';

interface StatsCardProps {
    title: string;
    value: string | number;
    subtitle?: string;
    icon: LucideIcon;
    trend?: {
        value: number;
        isPositive: boolean;
    };
    color?: 'blue' | 'green' | 'orange' | 'purple' | 'red';
}

export default function StatsCard({
    title,
    value,
    subtitle,
    icon: Icon,
    trend,
    color = 'blue',
}: StatsCardProps) {
    return (
        <div className={`stats-card stats-card-${color}`}>
            <div className="stats-card-header">
                <div className="stats-card-icon">
                    <Icon size={24} />
                </div>
                {trend && (
                    <span className={`stats-trend ${trend.isPositive ? 'positive' : 'negative'}`}>
                        {trend.isPositive ? '+' : ''}{trend.value}%
                    </span>
                )}
            </div>
            <div className="stats-card-body">
                <h3 className="stats-card-value">{value}</h3>
                <p className="stats-card-title">{title}</p>
                {subtitle && <span className="stats-card-subtitle">{subtitle}</span>}
            </div>
        </div>
    );
}
