import React, { useState } from "react";
import SectionTitle from "../../atoms/SectionTitle/SectionTitle";
import "./FlagshipCaseStudies.scss";
import { motion, AnimatePresence } from "framer-motion";

const FlagshipCaseStudies: React.FC = () => {
  const [expandedDetails, setExpandedDetails] = useState<Record<number, boolean>>({});

  const toggleDetails = (index: number) => {
    setExpandedDetails(prev => ({
      ...prev,
      [index]: !prev[index]
    }));
  };

  return (
    <section className='flagship section' id='flagship'>
      <SectionTitle title="Flagship Projects" subTitle="Business value & technical depth" />
      <div className='flagship__container container grid'>
        
        {/* Case Study 1: Finance Management System */}
        <motion.div 
          className='flagship__card'
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className='flagship__content'>
            <h3 className='flagship__title'>Finance Management System (Smartways)</h3>
            <div className='flagship__tags'>
              <span>FinTech</span>
              <span>SaaS</span>
              <span>Web Application</span>
            </div>
            
            <div className='flagship__details'>
              <div className='detail__section'>
                <h4><i className="uil uil-exclamation-circle"></i> Business Impact</h4>
                <p>Multi-branch organizations needed centralized financial management, automated billing, and error-free monetary transaction recording across complex hierarchical centers.</p>
              </div>
              <div className='detail__section'>
                <h4><i className="uil uil-user-check"></i> My Role & Outcome</h4>
                <p>As the Lead Full-Stack Engineer, I designed and built the system from scratch. <strong>Outcome:</strong> Streamlined multi-center financial reporting, cut PDF generation latency by 60%, and processed thousands of daily ledger entries with zero accounting discrepancies.</p>
              </div>

              <button 
                className="button button--small button--link"
                onClick={() => toggleDetails(1)}
                style={{ marginTop: '1rem', alignSelf: 'flex-start' }}
              >
                {expandedDetails[1] ? 'Hide Technical Details' : 'View Technical Details (For Recruiters)'}
                <i className={`uil uil-angle-${expandedDetails[1] ? 'up' : 'down'} button__icon`}></i>
              </button>

              <AnimatePresence>
                {expandedDetails[1] && (
                  <motion.div 
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    style={{ overflow: 'hidden' }}
                  >
                    <div className='detail__section' style={{ marginTop: '1.5rem', padding: '1.5rem', backgroundColor: 'var(--body-color)', borderRadius: '0.5rem' }}>
                      <h4><i className="uil uil-layer-group"></i> Architecture & Stack</h4>
                      <div className='flagship__tags' style={{ marginBottom: '1rem' }}>
                        <span>NestJS</span>
                        <span>React</span>
                        <span>PostgreSQL</span>
                        <span>Prisma</span>
                        <span>Docker</span>
                      </div>
                      <ul>
                        <li><strong>Hierarchy & Scope:</strong> Structured an <em>Organisation → Branch → Center</em> 3-tier hierarchy in PostgreSQL via Prisma ORM for strict multi-tenant isolation.</li>
                        <li><strong>Financial Accuracy:</strong> Implemented decimal-precision monetary calculations to eliminate floating-point rounding errors in transaction ledgers.</li>
                        <li><strong>Security & Auth:</strong> Built JWT authentication + granular Role-Based Access Control (RBAC) middleware for multi-role user permissions.</li>
                        <li><strong>Automation & DX:</strong> Integrated Puppeteer and Docker for automated financial PDF report generation and seamless containerized deployments; auto-generated Swagger/OpenAPI docs for front-end integration.</li>
                      </ul>
                      
                      <div className='flagship__diagram' style={{ marginTop: '1rem' }}>
                        <svg viewBox="0 0 400 150" xmlns="http://www.w3.org/2000/svg" style={{width: '100%', height: 'auto', background: '#f9fafb', borderRadius: '8px', padding: '1rem'}}>
                          <rect x="150" y="10" width="100" height="30" rx="5" fill="#e0e7ff" stroke="#4f46e5" strokeWidth="2" />
                          <text x="200" y="30" fontSize="12" textAnchor="middle" fill="#3730a3" fontWeight="bold">Organisation</text>
                          
                          <path d="M 200 40 L 200 60 M 200 60 L 100 60 M 200 60 L 300 60 M 100 60 L 100 80 M 300 60 L 300 80" stroke="#9ca3af" strokeWidth="2" fill="none" />
                          
                          <rect x="50" y="80" width="100" height="30" rx="5" fill="#dcfce7" stroke="#16a34a" strokeWidth="2" />
                          <text x="100" y="100" fontSize="12" textAnchor="middle" fill="#166534" fontWeight="bold">Branch A</text>
                          
                          <rect x="250" y="80" width="100" height="30" rx="5" fill="#dcfce7" stroke="#16a34a" strokeWidth="2" />
                          <text x="300" y="100" fontSize="12" textAnchor="middle" fill="#166534" fontWeight="bold">Branch B</text>
                          
                          <path d="M 100 110 L 100 130 M 100 130 L 70 130 M 100 130 L 130 130" stroke="#9ca3af" strokeWidth="1.5" fill="none" />
                          
                          <circle cx="70" cy="135" r="5" fill="#fca5a5" />
                          <circle cx="130" cy="135" r="5" fill="#fca5a5" />
                          <text x="70" y="150" fontSize="10" textAnchor="middle" fill="#7f1d1d">Center 1</text>
                          <text x="130" y="150" fontSize="10" textAnchor="middle" fill="#7f1d1d">Center 2</text>
                        </svg>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
            
          </div>
        </motion.div>

        {/* Case Study 2: Vanlog Platform */}
        <motion.div 
          className='flagship__card'
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className='flagship__content'>
            <h3 className='flagship__title'>Vanlog Order Tracking Platform</h3>
            <div className='flagship__tags'>
              <span>Logistics</span>
              <span>B2B Platform</span>
              <span>Real-Time</span>
            </div>
            
            <div className='flagship__details'>
              <div className='detail__section'>
                <h4><i className="uil uil-exclamation-circle"></i> Business Impact</h4>
                <p>E-commerce & logistics clients required a real-time order tracking web application capable of handling multi-language support, live status updates, image uploads, and in-app customer-vendor communication.</p>
              </div>
              <div className='detail__section'>
                <h4><i className="uil uil-user-check"></i> My Role & Outcome</h4>
                <p>As the Frontend Architect & UX/UI Designer, I delivered an intuitive, responsive tracking suite with under 1.2s page loads and real-time order status visibility for international users.</p>
              </div>

              <button 
                className="button button--small button--link"
                onClick={() => toggleDetails(2)}
                style={{ marginTop: '1rem', alignSelf: 'flex-start' }}
              >
                {expandedDetails[2] ? 'Hide Technical Details' : 'View Technical Details (For Recruiters)'}
                <i className={`uil uil-angle-${expandedDetails[2] ? 'up' : 'down'} button__icon`}></i>
              </button>

              <AnimatePresence>
                {expandedDetails[2] && (
                  <motion.div 
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    style={{ overflow: 'hidden' }}
                  >
                    <div className='detail__section' style={{ marginTop: '1.5rem', padding: '1.5rem', backgroundColor: 'var(--body-color)', borderRadius: '0.5rem' }}>
                      <h4><i className="uil uil-layer-group"></i> Architecture & Stack</h4>
                      <div className='flagship__tags' style={{ marginBottom: '1rem' }}>
                        <span>React</span>
                        <span>Redux Toolkit</span>
                        <span>Socket.io</span>
                        <span>i18n</span>
                      </div>
                      <ul>
                        <li><strong>Frontend Architecture:</strong> Implemented <strong>Atomic Design</strong> principles (Atoms, Molecules, Organisms, Templates) for modular, scalable React code.</li>
                        <li><strong>State & i18n:</strong> Utilized <strong>Redux Toolkit</strong> for predictable global state management and integrated <code>i18next</code> for seamless multi-language internationalization.</li>
                        <li><strong>Real-time & Media:</strong> Built full CRUD workflows with Cloudinary image uploads and Socket.io for instant in-app chat notifications.</li>
                      </ul>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default FlagshipCaseStudies;
