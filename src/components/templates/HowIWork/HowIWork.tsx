import React from "react";
import SectionTitle from "../../atoms/SectionTitle/SectionTitle";
import "./HowIWork.scss";
import { motion } from "framer-motion";

const processSteps = [
  {
    title: "1. Discovery & Planning",
    description: "We align on your business goals, target audience, and project scope before writing a single line of code.",
    icon: "uil uil-search-alt",
  },
  {
    title: "2. UX/UI Design",
    description: "I create wireframes and high-fidelity prototypes in Figma so you can visualize the end product.",
    icon: "uil uil-pen",
  },
  {
    title: "3. Full-Stack Build",
    description: "I develop the frontend and robust backend architecture, keeping you updated with regular progress.",
    icon: "uil uil-brackets-curly",
  },
  {
    title: "4. Testing & QA",
    description: "Rigorous testing ensures the application is bug-free, secure, and performs optimally across devices.",
    icon: "uil uil-check-circle",
  },
  {
    title: "5. Deployment & Handover",
    description: "I deploy the application to production and provide necessary documentation for seamless handover.",
    icon: "uil uil-rocket",
  },
];

const HowIWork: React.FC = () => {
  return (
    <section className='howiwork section' id='process'>
      <SectionTitle title="How I Work" subTitle="My client project delivery process" />
      <div className='howiwork__container container'>
        <div className='howiwork__timeline'>
          {processSteps.map((step, index) => (
            <motion.div 
              className='howiwork__step' 
              key={index}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
            >
              <div className='howiwork__icon-container'>
                <i className={step.icon}></i>
              </div>
              <div className='howiwork__content'>
                <h3 className='howiwork__title'>{step.title}</h3>
                <p className='howiwork__description'>{step.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowIWork;
