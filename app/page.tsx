import Link from 'next/link';
import { Shield, MapPin, BarChart3, Users, Bell, ArrowRight } from 'lucide-react';

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
          <Link href="#features" className="nav-link">Características</Link>
          <Link href="#pricing" className="nav-link">Precios</Link>
          <Link href="#contact" className="nav-link">Contacto</Link>
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
          <Link href="/login" className="btn btn-secondary btn-lg">
            Ver Demo
          </Link>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="features-section">
        <h2 className="section-title">Todo lo que necesitas</h2>
        <div className="features-grid">
          <div className="feature-card">
            <div className="feature-icon blue">
              <MapPin size={32} />
            </div>
            <h3 className="feature-title">Rastreo en Tiempo Real</h3>
            <p className="feature-description">
              Visualiza la ubicación exacta de todos tus vehículos en un mapa
              interactivo actualizado cada segundo.
            </p>
          </div>
          <div className="feature-card">
            <div className="feature-icon green">
              <BarChart3 size={32} />
            </div>
            <h3 className="feature-title">Análisis Avanzado</h3>
            <p className="feature-description">
              Reportes detallados de consumo de combustible, velocidad,
              tiempos de parada y eficiencia de rutas.
            </p>
          </div>
          <div className="feature-card">
            <div className="feature-icon orange">
              <Users size={32} />
            </div>
            <h3 className="feature-title">Gestión de Conductores</h3>
            <p className="feature-description">
              Perfiles completos, puntuación de conducción segura y
              asignación inteligente de vehículos.
            </p>
          </div>
          <div className="feature-card">
            <div className="feature-icon purple">
              <Bell size={32} />
            </div>
            <h3 className="feature-title">Alertas Instantáneas</h3>
            <p className="feature-description">
              Notificaciones en tiempo real por exceso de velocidad,
              desvíos de ruta o comportamiento irregular.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <h2 className="cta-title">¿Listo para optimizar tu flota?</h2>
        <p className="cta-subtitle">
          Únete a más de 500 empresas que ya confían en SafeDrive
        </p>
        <Link href="/register" className="btn btn-lg">
          Crear Cuenta Gratuita
        </Link>
      </section>

      {/* Footer */}
      <footer className="landing-footer">
        <p>© 2026 SafeDrive. Todos los derechos reservados.</p>
      </footer>
    </div>
  );
}
