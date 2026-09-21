import React, { useState } from "react";
import SectionTitle from "../../atoms/SectionTitle/SectionTitle";
import "./FlagshipCaseStudies.scss";
import { motion, AnimatePresence } from "framer-motion";

const FlagshipCaseStudies: React.FC = () => {
  const [expandedDetails, setExpandedDetails] = useState<Record<number, boolean>>({});

  const toggleDetails = (index: number) => {
    setExpandedDetails((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  return (
    <section className='flagship section' id='flagship'>
      <SectionTitle title='Flagship Projects' subTitle='Business value & technical depth' />
      <div className='flagship__container container grid'>
        {/* Case Study 1: Finance Management System */}
        <motion.div
          className="flagship__card"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="flagship__content">
            <h3 className="flagship__title">
              Finance Management System
            </h3>

            <div className="flagship__tags">
              <span>Financial Management</span>
              <span>Web Application</span>
              <span>Multi-Branch</span>
            </div>

            <div className="flagship__details">
              {/* Business Impact */}
              <div className="detail__section">
                <h4>
                  <i className="uil uil-exclamation-circle"></i>
                  Business Impact
                </h4>

                <p>
                  A finance management platform that replaced paper-based
                  receipt booklets across the branches and centers of a
                  multi-branch association. The platform centralizes members,
                  subscriptions, donations, expenses, receipts, and carnet
                  tracking while giving each organizational level its own
                  responsibilities and access.
                </p>
              </div>

              {/* My Role */}
              <div className="detail__section">
                <h4>
                  <i className="uil uil-user-check"></i>
                  My Role & Outcome
                </h4>

                <p>
                  As the <strong>Lead Full-Stack Engineer</strong>, I designed
                  and developed the platform from the ground up, covering
                  system architecture, database design, frontend and backend
                  development, authentication, reporting, documentation, and
                  Docker-based deployment.
                </p>

                <p style={{ marginTop: "0.75rem" }}>
                  <strong>Outcome:</strong> The organization can now manage
                  receipts and carnets digitally, follow financial activity
                  across branches and centers, generate reports, and maintain a
                  traceable history without relying on paper-based tracking.
                </p>
              </div>

              {/* Technical Details Button */}
              <button
                className="button button--small button--link"
                onClick={() => toggleDetails(1)}
                style={{
                  marginTop: "1rem",
                  alignSelf: "flex-start",
                }}
              >
                {expandedDetails[1]
                  ? "Hide Technical Details"
                  : "View Technical Details (For Recruiters)"}

                <i
                  className={`uil uil-angle-${expandedDetails[1] ? "up" : "down"
                    } button__icon`}
                ></i>
              </button>

              <AnimatePresence>
                {expandedDetails[1] && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    style={{ overflow: "hidden" }}
                  >
                    <div
                      className="detail__section"
                      style={{
                        marginTop: "1.5rem",
                        padding: "1.5rem",
                        backgroundColor: "var(--body-color)",
                        borderRadius: "0.5rem",
                      }}
                    >
                      {/* Architecture & Stack */}
                      <h4>
                        <i className="uil uil-layer-group"></i>
                        Architecture & Stack
                      </h4>

                      <div
                        className="flagship__tags"
                        style={{ marginBottom: "1rem" }}
                      >
                        <span>React</span>
                        <span>TypeScript</span>
                        <span>Redux Toolkit</span>
                        <span>Ant Design</span>
                        <span>NestJS</span>
                        <span>Prisma</span>
                        <span>PostgreSQL</span>
                        <span>Docker</span>
                      </div>

                      <ul>
                        <li>
                          <strong>Organizational hierarchy:</strong> Implemented
                          an <em>Organisation → Branch → Center</em> structure
                          to reflect the organization's real operational model.
                        </li>

                        <li>
                          <strong>Role-based access:</strong> Implemented JWT
                          authentication and role-based permissions for Super
                          Admins, Admins, and Employees, with access restricted
                          according to organizational scope.
                        </li>

                        <li>
                          <strong>Financial accuracy:</strong> Monetary values
                          are stored using <strong>Decimal(15,3)</strong> to
                          avoid floating-point rounding issues in financial
                          calculations.
                        </li>

                        <li>
                          <strong>Receipt & carnet management:</strong> Digitized
                          the creation, distribution, assignment, usage, and
                          tracking of receipt carnets across branches and
                          centers.
                        </li>

                        <li>
                          <strong>Transaction management:</strong> Managed
                          subscriptions, donations, expenses, receipts, and
                          related financial records with filtering and
                          traceable history.
                        </li>

                        <li>
                          <strong>Reporting:</strong> Built PDF reports with
                          Puppeteer and CSV exports with date-range filtering
                          for financial and operational data.
                        </li>

                        <li>
                          <strong>Data integrity:</strong> Implemented
                          cancellation handling through soft deletion so
                          cancelled receipts are excluded from financial
                          aggregations and exports.
                        </li>

                        <li>
                          <strong>API documentation:</strong> Integrated
                          Swagger/OpenAPI documentation to support frontend
                          integration and API usage.
                        </li>

                        <li>
                          <strong>Deployment:</strong> Containerized the
                          frontend, backend, and database using Docker for
                          consistent deployment and environment management.
                        </li>
                      </ul>

                      {/* Architecture Diagram */}
                      <div className="flagship__diagram">
                        <img
                          src="projectsImg/Architecture.png"
                          alt="Finance Management System architecture showing the React client, NestJS API, Prisma ORM, PostgreSQL database, and Docker containers"
                          className="flagship__architecture"
                        />
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
          className="flagship__card"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="flagship__content">
            <h3 className="flagship__title">
              Vanlog — Order Tracking & Management Platform
            </h3>

            <div className="flagship__tags">
              <span>Logistics</span>
              <span>Web Application</span>
              <span>Order Management</span>
            </div>

            <div className="flagship__details">

              {/* Business Impact */}
              <div className="detail__section">
                <h4>
                  <i className="uil uil-exclamation-circle"></i>
                  Business Impact
                </h4>

                <p>
                  A production web application for order tracking and management,
                  designed to centralize orders, packages, users, and transporters
                  in one platform. The application supports operational workflows,
                  document management, and communication between users.
                </p>
              </div>

              {/* My Role */}
              <div className="detail__section">
                <h4>
                  <i className="uil uil-user-check"></i>
                  My Role & Outcome
                </h4>

                <p>
                  As a <strong>Software Engineer</strong>, I was responsible for the
                  frontend development and UX/UI design of the platform, translating
                  client requirements into user workflows and reusable interfaces. I
                  also supported the backend development where needed.
                </p>

                <p style={{ marginTop: "0.75rem" }}>
                  <strong>Outcome:</strong> Delivered a production application with
                  reusable UI architecture and complete management workflows for
                  orders, packages, users, and transporters.
                </p>
              </div>

              {/* Technical Details */}
              <button
                className="button button--small button--link"
                onClick={() => toggleDetails(2)}
                style={{
                  marginTop: "1rem",
                  alignSelf: "flex-start",
                }}
              >
                {expandedDetails[2]
                  ? "Hide Technical Details"
                  : "View Technical Details (For Recruiters)"}

                <i
                  className={`uil uil-angle-${expandedDetails[2] ? "up" : "down"
                    } button__icon`}
                ></i>
              </button>

              <AnimatePresence>
                {expandedDetails[2] && (
                  <motion.div
                    initial={{ height: 0, opacity: 1 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    style={{ overflow: "hidden" }}
                  >
                    <div
                      className="detail__section"
                      style={{
                        marginTop: "1.5rem",
                        padding: "1.5rem",
                        backgroundColor: "var(--body-color)",
                        borderRadius: "0.5rem",
                      }}
                    >
                      <h4>
                        <i className="uil uil-layer-group"></i>
                        Architecture & Stack
                      </h4>

                      <div
                        className="flagship__tags"
                        style={{ marginBottom: "1rem" }}
                      >
                        <span>React</span>
                        <span>TypeScript</span>
                        <span>Redux Toolkit</span>
                        <span>Atomic Design</span>
                        <span>i18n</span>
                        <span>Docker</span>
                        <span>GitHub CI/CD</span>
                      </div>

                      <ul>
                        <li>
                          <strong>UX/UI & Design System:</strong> Designed UX/UI
                          workflows and interfaces based on client requirements and
                          a shared design system.
                        </li>

                        <li>
                          <strong>Frontend Architecture:</strong> Structured the
                          frontend using <strong>Atomic Design</strong> principles
                          (Atoms, Molecules, Organisms, and Templates) to create
                          reusable and maintainable components.
                        </li>

                        <li>
                          <strong>State Management:</strong> Implemented application
                          state management using <strong>Redux Toolkit</strong> and
                          maintained strongly typed interfaces with TypeScript.
                        </li>

                        <li>
                          <strong>Internationalization:</strong> Implemented
                          multi-language support using <strong>i18n</strong>.
                        </li>

                        <li>
                          <strong>Management Workflows:</strong> Built CRUD
                          functionality for orders, packages, users, and
                          transporters.
                        </li>

                        <li>
                          <strong>Media & Communication:</strong> Implemented image
                          upload functionality and an in-app complaint chat.
                        </li>

                        <li>
                          <strong>Delivery:</strong> Worked with Docker, Git, and
                          GitHub CI/CD as part of the application's deployment
                          workflow.
                        </li>
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
