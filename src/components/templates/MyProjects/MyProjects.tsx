import React, { useState } from "react";
import SectionTitle from "../../atoms/SectionTitle/SectionTitle";
import "./MyProjects.scss";

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
      <div className='services__container container grid'>
        {projects.map((project, index: any) => (
          <div className='work__content' key={index}>
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
          </div>
        ))}
      </div>
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
