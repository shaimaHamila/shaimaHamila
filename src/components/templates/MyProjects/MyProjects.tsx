import React, { useState } from "react";
import SectionTitle from "../../atoms/SectionTitle/SectionTitle";
import "./MyProjects.scss";
import { motion } from "framer-motion";

type Project = {
  imgSrc: string;
  title: string;

  description: string;
  projectLink: string;
};

type MyProjectsProps = {
  projects: Project[];
  subTitle: string;
  title: string;
};

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0 },
};

const MyProjects: React.FC<MyProjectsProps> = ({ projects, title, subTitle }) => {
  const [modalImgSrc, setModalImgSrc] = useState<string | null>(null);

  const openModal = (imgSrc: string) => {
    setModalImgSrc(imgSrc);
  };

  const closeModal = () => {
    setModalImgSrc(null);
  };
  return (
    <section className='portfolio work__section section' id='projects'>
      <SectionTitle title={title} subTitle={subTitle} />
      <motion.div
        className='projects__container container grid'
        variants={container}
        initial='hidden'
        whileInView='show'
        viewport={{ once: true }}
      >
        {projects.map((project, index) => (
          <motion.div className='work__content' key={index} variants={item}>
            <img
              className='work__img'
              src={project.imgSrc}
              alt={project.title}
              onClick={() => openModal(project.imgSrc)}
            />
            <div className='work__info'>
              <h3 className='work__title'>{project.title}</h3>
              <p className='work__description'>{project.description}</p>

              <a
                className='button button--flex button--small button--link services__button'
                href={project.projectLink}
                target='_blank'
                rel='noopener noreferrer'
              >
                View Project
                <i className='uil uil-arrow-right button__icon' />
              </a>
            </div>
          </motion.div>
        ))}
      </motion.div>
      {modalImgSrc && (
        <div className='modal' onClick={closeModal}>
          <span className='modal__close' onClick={closeModal}>
            &times;
          </span>
          <img className='modal__content' src={modalImgSrc} alt='Modal' />
        </div>
      )}
    </section>
  );
};

export default MyProjects;
