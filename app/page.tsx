'use client';

import Link from 'next/link';
import {
  Shield, MapPin, BarChart3, Users, Bell, ArrowRight, CheckCircle,
  Truck, Fuel, Clock, Route, Smartphone, Globe, Headphones, Zap,
  Car, TrendingUp, Award
} from 'lucide-react';
import dynamic from 'next/dynamic';

// Dynamic import for map (client-side only)
const DemoMap = dynamic(() => import('./components/DemoMap'), {
  ssr: false,
  loading: () => (
    <div className="demo-map-loading">
      <div className="loading-spinner"></div>
      <p>Cargando mapa de demostración...</p>
    </div>
  )
});

export default function LandingPage() {
  return (
    <div className="landing-page">
      {/* Navigation */}
      <nav className="landing-nav">
        <div className="nav-logo">
          <Shield size={32} />
          <span className="nav-logo-text">SafeDrive</span>
        </div>
        <div className="nav-links">
          <Link href="#services" className="nav-link">Servicios</Link>
          <Link href="#features" className="nav-link">Características</Link>
          <Link href="#pricing" className="nav-link">Precios</Link>
          <Link href="#demo" className="nav-link">Demo</Link>
          <Link href="/login" className="btn btn-secondary">Iniciar Sesión</Link>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="hero-section">
        <h1 className="hero-title">
          Gestiona tu flota con<br />
          <span className="hero-highlight">inteligencia y seguridad</span>
        </h1>
        <p className="hero-subtitle">
          SafeDrive es la plataforma de monitoreo de flotas más avanzada.
          Rastreo en tiempo real, análisis de conducción y reportes detallados
          para optimizar tu operación.
        </p>
        <div className="hero-buttons">
          <Link href="/register" className="btn btn-primary btn-lg">
            Comenzar Gratis
            <ArrowRight size={20} />
          </Link>
          <Link href="#demo" className="btn btn-secondary btn-lg">
            Ver Demo
          </Link>
        </div>

        {/* Hero Stats */}
        <div className="hero-stats">
          <div className="hero-stat">
            <span className="hero-stat-value">500+</span>
            <span className="hero-stat-label">Empresas</span>
          </div>
          <div className="hero-stat">
            <span className="hero-stat-value">15,000+</span>
            <span className="hero-stat-label">Vehículos</span>
          </div>
          <div className="hero-stat">
            <span className="hero-stat-value">99.9%</span>
            <span className="hero-stat-label">Uptime</span>
          </div>
          <div className="hero-stat">
            <span className="hero-stat-value">24/7</span>
            <span className="hero-stat-label">Soporte</span>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="services-section">
        <h2 className="section-title">Nuestros Servicios</h2>
        <p className="section-subtitle">
          Soluciones completas para la gestión eficiente de tu flota vehicular
        </p>
        <div className="services-grid">
          <div className="service-card">
            <div className="service-icon">
              <MapPin size={40} />
            </div>
            <h3>Rastreo GPS</h3>
            <p>Localización en tiempo real de todos tus vehículos con actualizaciones cada 5 segundos.</p>
            <ul className="service-features">
              <li><CheckCircle size={16} /> Histórico de rutas</li>
              <li><CheckCircle size={16} /> Geocercas personalizadas</li>
              <li><CheckCircle size={16} /> Alertas de zona</li>
            </ul>
          </div>
          <div className="service-card">
            <div className="service-icon">
              <Truck size={40} />
            </div>
            <h3>Gestión de Flotas</h3>
            <p>Administra todos tus vehículos y conductores desde una sola plataforma centralizada.</p>
            <ul className="service-features">
              <li><CheckCircle size={16} /> Fichas de vehículos</li>
              <li><CheckCircle size={16} /> Mantenimiento programado</li>
              <li><CheckCircle size={16} /> Documentos digitales</li>
            </ul>
          </div>
          <div className="service-card">
            <div className="service-icon">
              <Fuel size={40} />
            </div>
            <h3>Control de Combustible</h3>
            <p>Monitorea el consumo y detecta posibles fugas o robos de combustible.</p>
            <ul className="service-features">
              <li><CheckCircle size={16} /> Sensores de nivel</li>
              <li><CheckCircle size={16} /> Reportes de consumo</li>
              <li><CheckCircle size={16} /> Alertas de anomalías</li>
            </ul>
          </div>
          <div className="service-card">
            <div className="service-icon">
              <BarChart3 size={40} />
            </div>
            <h3>Reportes y Análisis</h3>
            <p>Toma decisiones basadas en datos con reportes completos y dashboards interactivos.</p>
            <ul className="service-features">
              <li><CheckCircle size={16} /> Reportes automáticos</li>
              <li><CheckCircle size={16} /> Exportación PDF/Excel</li>
              <li><CheckCircle size={16} /> KPIs personalizados</li>
            </ul>
          </div>
          <div className="service-card">
            <div className="service-icon">
              <Bell size={40} />
            </div>
            <h3>Sistema de Alertas</h3>
            <p>Recibe notificaciones instantáneas de eventos importantes en tu operación.</p>
            <ul className="service-features">
              <li><CheckCircle size={16} /> Exceso de velocidad</li>
              <li><CheckCircle size={16} /> Motor encendido/apagado</li>
              <li><CheckCircle size={16} /> Entrada/salida de zonas</li>
            </ul>
          </div>
          <div className="service-card">
            <div className="service-icon">
              <Users size={40} />
            </div>
            <h3>Gestión de Conductores</h3>
            <p>Evalúa el comportamiento de conducción y mejora la seguridad vial.</p>
            <ul className="service-features">
              <li><CheckCircle size={16} /> Score de conductor</li>
              <li><CheckCircle size={16} /> Horas de conducción</li>
              <li><CheckCircle size={16} /> Identificación con RFID</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="features-section">
        <h2 className="section-title">¿Por qué elegir SafeDrive?</h2>
        <div className="features-grid">
          <div className="feature-card">
            <div className="feature-icon blue">
              <Zap size={32} />
            </div>
            <h3 className="feature-title">Tiempo Real</h3>
            <p className="feature-description">
              Actualizaciones cada 5 segundos para monitoreo preciso y continuo de tu flota.
            </p>
          </div>
          <div className="feature-card">
            <div className="feature-icon green">
              <Smartphone size={32} />
            </div>
            <h3 className="feature-title">App Móvil</h3>
            <p className="feature-description">
              Accede desde cualquier dispositivo. Disponible para iOS y Android.
            </p>
          </div>
          <div className="feature-card">
            <div className="feature-icon orange">
              <Globe size={32} />
            </div>
            <h3 className="feature-title">Cobertura Nacional</h3>
            <p className="feature-description">
              Funcionamos en todo el país con la mejor red de conectividad móvil.
            </p>
          </div>
          <div className="feature-card">
            <div className="feature-icon purple">
              <Headphones size={32} />
            </div>
            <h3 className="feature-title">Soporte 24/7</h3>
            <p className="feature-description">
              Equipo técnico disponible las 24 horas para resolver cualquier inconveniente.
            </p>
          </div>
        </div>
      </section>

      {/* Demo Map Section */}
      <section id="demo" className="demo-section">
        <h2 className="section-title">Vista Previa en Vivo</h2>
        <p className="section-subtitle">
          Así se ve el monitoreo de tu flota en tiempo real
        </p>
        <div className="demo-container">
          <div className="demo-sidebar">
            <h3>Flota Activa</h3>
            <div className="demo-fleet-stats">
              <div className="demo-stat-item">
                <Car size={20} />
                <div>
                  <span className="demo-stat-value">6</span>
                  <span className="demo-stat-label">Vehículos</span>
                </div>
              </div>
              <div className="demo-stat-item">
                <TrendingUp size={20} />
                <div>
                  <span className="demo-stat-value">3</span>
                  <span className="demo-stat-label">En movimiento</span>
                </div>
              </div>
              <div className="demo-stat-item">
                <Clock size={20} />
                <div>
                  <span className="demo-stat-value">2</span>
                  <span className="demo-stat-label">Detenidos</span>
                </div>
              </div>
            </div>
            <div className="demo-vehicle-list">
              <div className="demo-vehicle">
                <span className="demo-vehicle-name">Nissan Versa</span>
                <span className="demo-badge moving">EN MOVIMIENTO</span>
              </div>
              <div className="demo-vehicle">
                <span className="demo-vehicle-name">Chevrolet Spark</span>
                <span className="demo-badge stopped">DETENIDO</span>
              </div>
              <div className="demo-vehicle">
                <span className="demo-vehicle-name">Ford Ranger</span>
                <span className="demo-badge no-signal">SIN SEÑAL</span>
              </div>
              <div className="demo-vehicle">
                <span className="demo-vehicle-name">Honda Civic</span>
                <span className="demo-badge moving">EN MOVIMIENTO</span>
              </div>
              <div className="demo-vehicle">
                <span className="demo-vehicle-name">Toyota Hiace</span>
                <span className="demo-badge stopped">DETENIDO</span>
              </div>
              <div className="demo-vehicle">
                <span className="demo-vehicle-name">Kia Rio</span>
                <span className="demo-badge moving">EN MOVIMIENTO</span>
              </div>
            </div>
          </div>
          <div className="demo-map-wrapper">
            <DemoMap />
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="pricing-section">
        <h2 className="section-title">Planes de Suscripción</h2>
        <p className="section-subtitle">
          Elige el plan que mejor se adapte a las necesidades de tu empresa
        </p>
        <div className="pricing-grid">
          <div className="pricing-card">
            <div className="pricing-header">
              <h3>Básico</h3>
              <div className="pricing-price">
                <span className="currency">$</span>
                <span className="amount">9</span>
                <span className="period">/vehículo/mes</span>
              </div>
            </div>
            <ul className="pricing-features">
              <li><CheckCircle size={16} /> Rastreo GPS en tiempo real</li>
              <li><CheckCircle size={16} /> Historial de 30 días</li>
              <li><CheckCircle size={16} /> 5 geocercas</li>
              <li><CheckCircle size={16} /> Alertas básicas</li>
              <li><CheckCircle size={16} /> App móvil</li>
              <li><CheckCircle size={16} /> Soporte por email</li>
            </ul>
            <Link href="/register" className="btn btn-outline">Comenzar</Link>
          </div>

          <div className="pricing-card popular">
            <div className="popular-badge">Más Popular</div>
            <div className="pricing-header">
              <h3>Profesional</h3>
              <div className="pricing-price">
                <span className="currency">$</span>
                <span className="amount">19</span>
                <span className="period">/vehículo/mes</span>
              </div>
            </div>
            <ul className="pricing-features">
              <li><CheckCircle size={16} /> Todo del plan Básico</li>
              <li><CheckCircle size={16} /> Historial de 90 días</li>
              <li><CheckCircle size={16} /> Geocercas ilimitadas</li>
              <li><CheckCircle size={16} /> Reportes avanzados</li>
              <li><CheckCircle size={16} /> Control de combustible</li>
              <li><CheckCircle size={16} /> Score de conductor</li>
              <li><CheckCircle size={16} /> Soporte prioritario</li>
            </ul>
            <Link href="/register" className="btn btn-primary">Comenzar</Link>
          </div>

          <div className="pricing-card">
            <div className="pricing-header">
              <h3>Empresarial</h3>
              <div className="pricing-price">
                <span className="currency">$</span>
                <span className="amount">29</span>
                <span className="period">/vehículo/mes</span>
              </div>
            </div>
            <ul className="pricing-features">
              <li><CheckCircle size={16} /> Todo del plan Profesional</li>
              <li><CheckCircle size={16} /> Historial ilimitado</li>
              <li><CheckCircle size={16} /> API de integración</li>
              <li><CheckCircle size={16} /> Múltiples usuarios</li>
              <li><CheckCircle size={16} /> White-label disponible</li>
              <li><CheckCircle size={16} /> Gerente de cuenta</li>
              <li><CheckCircle size={16} /> Soporte 24/7</li>
            </ul>
            <Link href="/register" className="btn btn-outline">Contactar</Link>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="stats-section">
        <div className="stats-container">
          <div className="stat-box">
            <Award size={48} />
            <span className="stat-number">500+</span>
            <span className="stat-text">Empresas confían en nosotros</span>
          </div>
          <div className="stat-box">
            <Car size={48} />
            <span className="stat-number">15,000+</span>
            <span className="stat-text">Vehículos monitoreados</span>
          </div>
          <div className="stat-box">
            <Route size={48} />
            <span className="stat-number">5M+</span>
            <span className="stat-text">Kilómetros rastreados</span>
          </div>
          <div className="stat-box">
            <Clock size={48} />
            <span className="stat-number">99.9%</span>
            <span className="stat-text">Disponibilidad del servicio</span>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <h2 className="cta-title">¿Listo para optimizar tu flota?</h2>
        <p className="cta-subtitle">
          Prueba SafeDrive gratis por 14 días. Sin compromiso, sin tarjeta de crédito.
        </p>
        <div className="cta-buttons">
          <Link href="/register" className="btn btn-lg">
            Comenzar Prueba Gratis
          </Link>
          <Link href="#demo" className="btn btn-ghost btn-lg">
            Ver Demo
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="landing-footer">
        <div className="footer-content">
          <div className="footer-brand">
            <Shield size={28} />
            <span>SafeDrive</span>
          </div>
          <div className="footer-links">
            <Link href="#services">Servicios</Link>
            <Link href="#features">Características</Link>
            <Link href="#pricing">Precios</Link>
            <Link href="#demo">Demo</Link>
          </div>
          <p className="footer-copyright">© 2026 SafeDrive. Todos los derechos reservados.</p>
        </div>
      </footer>
    </div>
  );
}
