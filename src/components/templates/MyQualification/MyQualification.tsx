import { useState } from "react";
import SectionTitle from "../../atoms/SectionTitle/SectionTitle";
import "./MyQualification.scss";
import { motion, AnimatePresence } from "framer-motion";

type Qualification = {
  title: string;
  subtitle: string;
  calendar: string;
};

type Section = {
  title: string;
  qualifications: Qualification[];
};

type MyQualificationProps = {
  sections: {
    education: Section;
    work: Section;
  };
  title: string;
  subTitle: string;
};

const MyQualification: React.FC<MyQualificationProps> = ({ sections, title, subTitle }) => {
  const [activeSection, setActiveSection] = useState("education");
  // Use state derived from activeSection directly in render or use effect, but current way works if updated correctly.
  // Actually, handleTabClick updates both.

  const handleTabClick = (section: "education" | "work") => {
    setActiveSection(section);
  };

  const qualifications = (sections as any)[activeSection].qualifications;

  return (
    <motion.section
      className='qualification__section section'
      id='qualification'
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.8 }}
    >
      <SectionTitle title={title} subTitle={subTitle} />

      <div className='qualification__container container'>
        <div className='qualification__tabs'>
          <div
            className={`qualification__button button--flex ${
              activeSection === "education" ? "qualification__active" : ""
            }`}
            onClick={() => handleTabClick("education")}
          >
            <i className='uil uil-graduation-cap qualification__icon'></i>
            Education
          </div>

          <div
            className={`qualification__button button--flex ${activeSection === "work" ? "qualification__active" : ""}`}
            onClick={() => handleTabClick("work")}
          >
            <i className='uil uil-bag qualification__icon'></i>
            Work
          </div>
        </div>

        <div className='qualification__sections'>
          <AnimatePresence mode='wait'>
            <motion.div
              key={activeSection}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className='qualification__content'
            >
              {qualifications.map((qual: Qualification, index: number) => (
                <div className='qualification__data' key={index}>
                  {index % 2 === 0 ? (
                    <>
                      <div>
                        <h3 className='qualification__title'>{qual.title}</h3>
                        <span className='qualification__subtitle'>{qual.subtitle}</span>
                        <div className='qualification__calendar'>
                          <i className='uil uil-calendar-alt'></i>
                          {qual.calendar}
                        </div>
                      </div>
                      <div>
                        <span className='qualification__rounder'></span>
                        {index < qualifications.length - 1 && <span className='qualification__line'></span>}
                      </div>
                    </>
                  ) : (
                    <>
                      <div></div>
                      <div>
                        <span className='qualification__rounder'></span>
                        {index < qualifications.length - 1 && <span className='qualification__line'></span>}
                      </div>
                      <div>
                        <h3 className='qualification__title'>{qual.title}</h3>
                        <span className='qualification__subtitle'>{qual.subtitle}</span>
                        <div className='qualification__calendar'>
                          <i className='uil uil-calendar-alt'></i>
                          {qual.calendar}
                        </div>
                      </div>
                    </>
                  )}
                </div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </motion.section>
  );
};

export default MyQualification;
