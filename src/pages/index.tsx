import React from 'react';
import type { HeadFC, PageProps } from 'gatsby';
import TechAnimation from '../components/TechAnimation';
import '../styles/global.css';

const IndexPage: React.FC<PageProps> = () => {
  return (
    <main>
      {/* Hero Section */}
      <section className="hero-section">
        <TechAnimation />
        <div className="hero-content">
          <h1 className="hero-title">TepuyX</h1>
          <p className="hero-subtitle">Software Consulting Excellence</p>
          <p className="hero-description">
            We specialize in cutting-edge web development and AI solutions, 
            transforming your ideas into powerful digital experiences.
          </p>
          <a href="#contact" className="cta-button">
            Let's Build Something Amazing
          </a>
        </div>
      </section>

      {/* Services Section */}
      <section className="section services-section">
        <h2 className="section-title">What We Do</h2>
        <div className="services-grid">
          <div className="service-card">
            <div className="service-icon">🚀</div>
            <h3 className="service-title">Web Development</h3>
            <p className="service-description">
              Modern, responsive web applications built with the latest technologies. 
              From React and Next.js to full-stack solutions that scale.
            </p>
          </div>
          <div className="service-card">
            <div className="service-icon">🤖</div>
            <h3 className="service-title">AI Solutions</h3>
            <p className="service-description">
              Intelligent systems that automate processes, enhance user experiences, 
              and unlock new possibilities for your business.
            </p>
          </div>
          <div className="service-card">
            <div className="service-icon">⚡</div>
            <h3 className="service-title">Performance Optimization</h3>
            <p className="service-description">
              Lightning-fast applications optimized for speed, SEO, and user experience. 
              Every millisecond matters.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="section contact-section">
        <h2 className="contact-title section-title">Ready to Start?</h2>
        <p className="contact-subtitle">
          Let's discuss how we can help bring your vision to life
        </p>
        <a href="mailto:hello@tepuyx.com" className="contact-email">
          hello@tepuyx.com
        </a>
      </section>
    </main>
  );
};

export default IndexPage;

export const Head: HeadFC = () => (
  <>
    <title>TepuyX - Software Consulting Excellence</title>
    <meta name="description" content="TepuyX specializes in cutting-edge web development and AI solutions, transforming your ideas into powerful digital experiences." />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta property="og:title" content="TepuyX - Software Consulting Excellence" />
    <meta property="og:description" content="TepuyX specializes in cutting-edge web development and AI solutions, transforming your ideas into powerful digital experiences." />
    <meta property="og:type" content="website" />
    <meta property="og:url" content="https://tepuyx.com" />
  </>
);