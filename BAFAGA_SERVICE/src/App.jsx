import './App.css';
import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, Mail, MapPin, ArrowRight, Star, Users, Award, Clock } from 'lucide-react';

const BafagaWebsite = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const services = [
    {
      title: 'BTP & Construction',
      description: 'Construction, rénovation, maçonnerie et tous travaux de bâtiment',
      icon: '🏗️'
    },
    {
      title: 'Décoration Intérieure',
      description: 'Aménagement, design d\'intérieur et décoration sur mesure',
      icon: '🎨'
    },
    {
      title: 'Services de Ménage',
      description: 'Nettoyage résidentiel et commercial, entretien régulier',
      icon: '🧹'
    },
    {
      title: 'Jardinage & Espaces Verts',
      description: 'Entretien de jardins, paysagisme et aménagement extérieur',
      icon: '🌿'
    },
    {
      title: 'Transport & Livraison',
      description: 'Services de transport, déménagement et livraison',
      icon: '🚛'
    }
  ];

  const stats = [
    { number: '500+', label: 'Clients satisfaits' },
    { number: '5', label: 'Services disponibles' },
    { number: '24/7', label: 'Disponibilité' },
    { number: '100%', label: 'Satisfaction' }
  ];

  const testimonials = [
    {
      name: 'Marie Kouassi',
      service: 'Décoration',
      text: 'Excellent travail de décoration. Mon salon a été transformé au-delà de mes attentes !',
      rating: 5
    },
    {
      name: 'Jean-Claude Brou',
      service: 'BTP',
      text: 'Construction de ma terrasse réalisée dans les délais. Équipe professionnelle.',
      rating: 5
    },
    {
      name: 'Fatou Traoré',
      service: 'Ménage',
      text: 'Service de ménage impeccable. Je recommande vivement Bafaga !',
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className={`header-bafaga ${isScrolled ? 'scrolled' : ''}`}>
        <div className="container-custom">
          <div className="nav-container">
            <div className="logo-bafaga">BAFAGA</div>
            
            {/* Desktop Navigation */}
            <nav className="desktop-nav">
              <a href="#accueil" className="nav-link">Accueil</a>
              <a href="#services" className="nav-link">Services</a>
              <a href="#apropos" className="nav-link">À propos</a>
              <a href="#contact" className="nav-link">Contact</a>
            </nav>

            {/* Mobile Menu Button */}
            <button
              className="mobile-menu-btn"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Menu"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="mobile-nav">
            <nav className="mobile-nav-links">
              <a href="#accueil" className="nav-link" onClick={() => setIsMenuOpen(false)}>Accueil</a>
              <a href="#services" className="nav-link" onClick={() => setIsMenuOpen(false)}>Services</a>
              <a href="#apropos" className="nav-link" onClick={() => setIsMenuOpen(false)}>À propos</a>
              <a href="#contact" className="nav-link" onClick={() => setIsMenuOpen(false)}>Contact</a>
            </nav>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section id="accueil" className="hero-section">
        <div className="container-custom">
          <div className="hero-grid">
            <div className="hero-content">
              <h1 className="hero-title">
                Vos projets, 
                <span className="text-gradient block"> notre expertise</span>
              </h1>
              <p className="hero-subtitle">
                BAFAGA vous accompagne dans tous vos projets : BTP, décoration, ménage, jardinage et transport. 
                Une équipe professionnelle à votre service en Côte d'Ivoire.
              </p>
              <div className="hero-buttons">
                <a 
                  href="#services"
                  className="btn-primary"
                >
                  Découvrir nos services
                  <ArrowRight size={20} />
                </a>
                <a 
                  href="#contact"
                  className="btn-secondary"
                >
                  Nous contacter
                </a>
              </div>
            </div>
            <div className="hero-image">
              <div className="hero-image-placeholder">
                🏢
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="stats-section">
        <div className="container-custom">
          <div className="stats-grid">
            {stats.map((stat, index) => (
              <div key={index} className="stat-item">
                <div className="stat-number">{stat.number}</div>
                <div className="stat-label">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="services-section">
        <div className="container-custom">
          <div className="section-header">
            <h2 className="section-title">Nos Services</h2>
            <p className="section-subtitle">
              Découvrez notre gamme complète de services professionnels adaptés à vos besoins
            </p>
          </div>

          <div className="services-grid">
            {services.map((service, index) => (
              <div key={index} className="service-card">
                <div className="service-icon-container">
                  {service.icon}
                </div>
                <div className="service-content">
                  <h3 className="service-title">{service.title}</h3>
                  <p className="service-description">{service.description}</p>
                  <a href="#contact" className="service-link">
                    En savoir plus
                    <ArrowRight size={16} />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="apropos" className="about-section">
        <div className="container-custom">
          <div className="about-grid">
            <div className="about-content">
              <h2 className="section-title">À propos de BAFAGA</h2>
              <p className="about-text">
                Depuis notre création, BAFAGA s'est imposée comme une référence dans le domaine des services 
                multi-techniques en Côte d'Ivoire. Notre équipe de professionnels expérimentés met son 
                savoir-faire au service de vos projets.
              </p>
              <p className="about-text">
                Que ce soit pour des travaux de construction, de la décoration d'intérieur, du ménage, 
                l'entretien de vos espaces verts ou des services de transport, nous garantissons un 
                travail de qualité et un service client exceptionnel.
              </p>
              <div className="feature-highlight">
                <div className="feature-icon">
                  <Award size={24} />
                </div>
                <div className="feature-text">
                  <h4>Qualité garantie</h4>
                  <p>Satisfaction client à 100%</p>
                </div>
              </div>
            </div>
            <div className="about-image">
              <div className="about-image-placeholder">
                🏆
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="testimonials-section">
        <div className="container-custom">
          <div className="section-header">
            <h2 className="section-title">Ce que disent nos clients</h2>
            <p className="section-subtitle">La satisfaction de nos clients est notre priorité</p>
          </div>

          <div className="testimonials-grid">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="testimonial-card">
                <div className="rating-stars">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} size={20} className="star-icon" />
                  ))}
                </div>
                <p className="testimonial-text">"{testimonial.text}"</p>
                <div className="testimonial-author">
                  <div className="author-name">{testimonial.name}</div>
                  <div className="author-service">{testimonial.service}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="contact-section">
        <div className="container-custom">
          <div className="section-header">
            <h2 className="section-title">Contactez-nous</h2>
            <p className="section-subtitle">Prêt à démarrer votre projet  ? Parlons-en !</p>
          </div>

          <div className="contact-grid">
            <div className="contact-info">
              <h3 className="contact-subtitle">Informations de contact</h3>
              <div className="contact-info-list">
                <div className="contact-info-item">
                  <div className="contact-icon">
                    <Phone size={20} />
                  </div>
                  <div className="contact-details">
                    <div className="contact-type">Téléphone</div>
                    <div className="contact-value">+225 XX XX XX XX XX</div>
                  </div>
                </div>
                <div className="contact-info-item">
                  <div className="contact-icon">
                    <Mail size={20} />
                  </div>
                  <div className="contact-details">
                    <div className="contact-type">Email</div>
                    <div className="contact-value">contact@bafaga.ci</div>
                  </div>
                </div>
                <div className="contact-info-item">
                  <div className="contact-icon">
                    <MapPin size={20} />
                  </div>
                  <div className="contact-details">
                    <div className="contact-type">Adresse</div>
                    <div className="contact-value">Abidjan, Côte d'Ivoire</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="contact-form-container">
              <h3 className="contact-subtitle">Demande de devis gratuit</h3>
              <form className="contact-form">
                <div className="form-row">
                  <input
                    type="text"
                    placeholder="Nom"
                    className="form-input"
                    required
                  />
                  <input
                    type="text"
                    placeholder="Prénom"
                    className="form-input"
                    required
                  />
                </div>
                <input
                  type="email"
                  placeholder="Email"
                  className="form-input"
                  required
                />
                <select className="form-input form-select" required>
                  <option value="">Sélectionner un service</option>
                  <option value="btp">BTP & Construction</option>
                  <option value="decoration">Décoration Intérieure</option>
                  <option value="menage">Services de Ménage</option>
                  <option value="jardinage">Jardinage</option>
                  <option value="transport">Transport</option>
                </select>
                <textarea
                  rows={4}
                  placeholder="Décrivez votre projet"
                  className="form-input form-textarea"
                  required
                />
                <button
                  type="submit"
                  className="form-submit-btn"
                >
                  Envoyer la demande
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
{/* Footer */}
<footer className="footer-section">
  <div className="container-custom">
    <div className="footer-content">
      <div className="footer-col">
        <div className="footer-brand">BAFAGA</div>
        <p className="footer-description">
          Votre partenaire de confiance pour tous vos projets de services en Côte d'Ivoire.
        </p>
      </div>
      <div className="footer-col">
        <h4 className="footer-heading">Services</h4>
        <ul className="footer-list">
          <li>BTP & Construction</li>
          <li>Décoration Intérieure</li>
          <li>Services de Ménage</li>
          <li>Jardinage</li>
          <li>Transport</li>
        </ul>
      </div>
      <div className="footer-col">
        <h4 className="footer-heading">Contact</h4>
        <ul className="footer-list">
          <li>+225 XX XX XX XX XX</li>
          <li>
            <a 
              href="mailto:contact@bafaga.ci" 
              className="email-link"
              onClick={(e) => {
                e.preventDefault();
                window.location.href = 'mailto:contact@bafaga.ci';
              }}
            >
              contact@bafaga.ci
            </a>
          </li>
          <li>Abidjan, Côte d'Ivoire</li>
        </ul>
      </div>
      <div className="footer-col">
        <h4 className="footer-heading">Suivez-nous</h4>
        <div className="social-links">
          <a href="#" className="social-link" aria-label="Facebook">
            📱
          </a>
          <a href="#" className="social-link" aria-label="Instagram">
            📧
          </a>
        </div>
      </div>
    </div>
    <div className="footer-bottom">
      <p>&copy; 2024 BAFAGA. Tous droits réservés.</p>
    </div>
  </div>
</footer>
    </div>
  );
};

export default BafagaWebsite;