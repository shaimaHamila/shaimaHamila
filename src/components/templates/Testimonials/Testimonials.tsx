import React from "react";
import SectionTitle from "../../atoms/SectionTitle/SectionTitle";
import "./Testimonials.scss";
import { motion } from "framer-motion";

const testimonialsData = [
  {
    name: "Hassén Amri, Senior Generative AI Engineer",
    company: "Smart Ways Innovation & Tekab.dev",
    text: "Shaima combines strong full-stack JavaScript expertise with an impressive sense of creativity and design. She is proactive, adaptable, detail-oriented, and passionate about building great products.",
  },
  {
    name: "Mohamed Zhioua, Project Manager",
    company: "Astrolab Agency",
    text: "Shaima took complete ownership of building a full-stack Project & Equipment Tracking System from the ground up. Her technical skills, problem-solving mindset, and ability to combine design with development truly stood out.",
  },
  {
    name: "Mariem MAHDI, Software Engineer & Team Colleague",
    company: "Tekab.dev",
    text: "Shaima is passionate about development, curious about new technologies, and always eager to improve. Her self-learning ability, creativity, and positive attitude make her a great teammate.",
  },
];

const Testimonials: React.FC = () => {
  return (
    <section className='testimonial section' id='testimonials'>
      <SectionTitle title='Testimonials' subTitle='What my colleagues say' />
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
            <i className='uil uil-comment-alt-quote testimonial__icon'></i>
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
