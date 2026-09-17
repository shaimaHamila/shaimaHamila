import React from "react";
import SectionTitle from "../../atoms/SectionTitle/SectionTitle";
import "./Testimonials.scss";
import { motion } from "framer-motion";

const testimonialsData = [
  {
    name: "Engineering Lead",
    company: "Smartways Innovation",
    text: "Shaima is an exceptional Full-Stack Engineer. She took complete ownership of our Finance Management System's architecture. Her NestJS and PostgreSQL decisions saved us countless hours in processing financial ledgers.",
  },
  {
    name: "Project Manager",
    company: "Astrolab Agency",
    text: "Working with Shaima was seamless. She delivers high-quality React applications very quickly and always considers the UI/UX implications of her code.",
  },
  {
    name: "Technical Director",
    company: "Converty",
    text: "Highly autonomous and technically proficient. Shaima's ability to span the entire stack from database schema design to responsive frontend components makes her a valuable asset to any engineering team.",
  },
];

const Testimonials: React.FC = () => {
  return (
    <section className='testimonial section' id='testimonials'>
      <SectionTitle title="Testimonials" subTitle="What my colleagues say" />
      <div className='testimonial__container container grid'>
        {testimonialsData.map((testi, index) => (
          <motion.div 
            className='testimonial__card' 
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.2 }}
          >
            <i className="uil uil-comment-alt-quote testimonial__icon"></i>
            <p className='testimonial__description'>{testi.text}</p>
            <h3 className='testimonial__name'>{testi.name}</h3>
            <span className='testimonial__client'>{testi.company}</span>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
