import React, { useState, useEffect } from 'react';
import { CheckCircle, Zap, Shield, BarChart3, ArrowRight, Star, Users, Clock, Award } from 'lucide-react';
import './LandingPage.css';

const LandingPage = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const features = [
    {
      icon: <Zap className="feature-icon" />,
      title: "Lightning Fast",
      description: "Create professional invoices in under 30 seconds with our intuitive interface."
    },
    {
      icon: <Shield className="feature-icon" />,
      title: "Secure & Reliable",
      description: "Bank-level security ensures your financial data is always protected."
    },
    {
      icon: <BarChart3 className="feature-icon" />,
      title: "Smart Analytics",
      description: "Track payments, monitor cash flow, and gain insights into your business."
    }
  ];

  const steps = [
    "Sign up for your free account in seconds",
    "Customize your invoice template with your branding",
    "Add client details and invoice items",
    "Send instantly via email or share a secure link"
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Freelance Designer",
      content: "QuicInvoice transformed my billing process. I save 3 hours every week!",
      rating: 5
    },
    {
      name: "Michael Chen",
      role: "Small Business Owner",
      content: "The most intuitive invoicing tool I've ever used. Highly recommended!",
      rating: 5
    }
  ];

  return (
    <div className="landing-page">
      {/* Hero Section */}
      <section className="hero">
        {/* Background with gradient overlay */}
        <div className="hero-background"></div>
        
        {/* Animated background elements */}
        <div className="hero-bg-elements">
          <div className="floating-element floating-element-1"></div>
          <div className="floating-element floating-element-2"></div>
        </div>

        <div className="hero-container">
          <div className="hero-grid">
            {/* Hero Text */}
            <div className={`hero-text ${isVisible ? 'visible' : ''}`}>
              <div className="hero-badge">
                <Award className="badge-icon" />
                <span className="badge-text">#1 Invoicing Solution</span>
              </div>
              
              <h1 className="hero-title">
                <span className="title-gradient">QuicInvoice</span>
              </h1>
              
              <p className="hero-description">
                Create, send, and manage invoices faster than ever before. 
                <span className="hero-subtitle">
                  Join 50,000+ businesses who trust QuicInvoice.
                </span>
              </p>

              <div className="hero-buttons">
                <button className="btn-primary">
                  Get Started Free
                  <ArrowRight className="btn-icon" />
                </button>
                <button className="btn-secondary">
                  Watch Demo
                </button>
              </div>

              <div className="hero-stats">
                <div className="stat-item">
                  <Users className="stat-icon" />
                  <span>50K+ Users</span>
                </div>
                <div className="stat-item">
                  <Clock className="stat-icon" />
                  <span>30-sec Setup</span>
                </div>
                <div className="stat-item">
                  <Star className="stat-icon star-filled" />
                  <span>4.9/5 Rating</span>
                </div>
              </div>
            </div>

            {/* Hero Image */}
            <div className={`hero-image ${isVisible ? 'visible' : ''}`}>
              <div className="hero-card">
                <div className="invoice-preview">
                  <div className="invoice-header">
                    <div className="invoice-info">
                      <h3 className="invoice-title">Invoice #QI-2024-001</h3>
                      <p className="invoice-due">Due: Aug 15, 2024</p>
                    </div>
                    <div className="invoice-status">Paid</div>
                  </div>
                  <div className="invoice-items">
                    <div className="invoice-item">
                      <span>Web Design Services</span>
                      <span>$2,500</span>
                    </div>
                    <div className="invoice-item">
                      <span>Logo Design</span>
                      <span>$500</span>
                    </div>
                    <div className="invoice-total">
                      <div className="total-row">
                        <span>Total</span>
                        <span>$3,000</span>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="stats-grid">
                  <div className="stat-card stat-green">
                    <div className="stat-number">98%</div>
                    <div className="stat-label">On-time</div>
                  </div>
                  <div className="stat-card stat-blue">
                    <div className="stat-number">$24K</div>
                    <div className="stat-label">This Month</div>
                  </div>
                  <div className="stat-card stat-purple">
                    <div className="stat-number">156</div>
                    <div className="stat-label">Invoices</div>
                  </div>
                </div>
              </div>
              
              {/* Floating elements */}
              <div className="floating-icon floating-icon-1">
                <Zap className="icon" />
              </div>
              <div className="floating-icon floating-icon-2">
                <CheckCircle className="icon" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Why Choose QuicInvoice?</h2>
            <p className="section-description">
              Streamline your billing process with powerful features designed for modern businesses
            </p>
          </div>

          <div className="features-grid">
            {features.map((feature, index) => (
              <div key={index} className="feature-card">
                <div className="feature-icon-wrapper">
                  {feature.icon}
                </div>
                <h3 className="feature-title">{feature.title}</h3>
                <p className="feature-description">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="how-it-works">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Get Started in Minutes</h2>
            <p className="section-description">Simple steps to transform your invoicing</p>
          </div>

          <div className="steps-grid">
            {steps.map((step, index) => (
              <div key={index} className="step-item">
                <div className="step-number">{index + 1}</div>
                <p className="step-text">{step}</p>
                {index < steps.length - 1 && (
                  <div className="step-arrow">
                    <ArrowRight className="arrow-icon" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="testimonials">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Loved by Thousands</h2>
            <p className="section-description">See what our customers are saying</p>
          </div>

          <div className="testimonials-grid">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="testimonial-card">
                <div className="testimonial-rating">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="star-icon" />
                  ))}
                </div>
                <p className="testimonial-content">"{testimonial.content}"</p>
                <div className="testimonial-author">
                  <div className="author-name">{testimonial.name}</div>
                  <div className="author-role">{testimonial.role}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta">
        <div className="cta-background">
          <div className="cta-bg-overlay"></div>
          <div className="cta-floating-1"></div>
          <div className="cta-floating-2"></div>
        </div>
        
        <div className="cta-container">
          <h2 className="cta-title">Ready to Get Started?</h2>
          <p className="cta-description">
            Join thousands of businesses who've streamlined their invoicing with QuicInvoice
          </p>
          
          <div className="cta-buttons">
            <button className="cta-btn-primary">
              Start Free Trial
              <ArrowRight className="btn-icon" />
            </button>
            <button className="cta-btn-secondary">
              Contact Sales
            </button>
          </div>
          
          <p className="cta-note">
            Free 14-day trial • No credit card required • Cancel anytime
          </p>
        </div>
      </section>
    </div>
  );
};

export default LandingPage;